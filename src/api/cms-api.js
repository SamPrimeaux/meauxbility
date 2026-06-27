import { DEFAULT_R2_BUCKET, PROJECT_SLUG, TENANT_ID, WORKSPACE_ID } from '../lib/constants.js';
import { bridgeAuthorized, json, readJson } from '../lib/http.js';
import { listCmsPages } from '../lib/cms-serve.js';

function id(prefix = 'cms') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

async function getPageSections(env, pageId) {
  const { results } = await env.DB.prepare(
    `SELECT id, section_type, section_name, section_data, sort_order, is_visible
     FROM cms_page_sections WHERE page_id = ? ORDER BY sort_order ASC`,
  )
    .bind(pageId)
    .all()
    .catch(() => ({ results: [] }));
  return (results || []).map((row) => ({
    ...row,
    section_data: safeJson(row.section_data, {}),
  }));
}

function safeJson(raw, fallback) {
  try {
    return JSON.parse(raw || '');
  } catch {
    return fallback;
  }
}

async function publishPage(env, pageId, userLabel = 'iam_bridge') {
  const page = await env.DB.prepare(`SELECT * FROM cms_pages WHERE id = ? LIMIT 1`).bind(pageId).first();
  if (!page) return { ok: false, error: 'page_not_found' };

  const sections = await getPageSections(env, pageId);
  const visible = sections.filter((s) => s.is_visible !== 0);
  const body = visible
    .map((s) => {
      const html = s.section_data?.html_fragment || s.section_data?.html;
      if (html) return String(html);
      const headline = s.section_data?.headline || s.section_name;
      return `<section data-cms-section="${s.section_name}" data-iam-section-type="${s.section_type}"><h2>${headline}</h2></section>`;
    })
    .join('\n');

  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>${page.title || page.slug}</title></head><body>${body}</body></html>`;
  const bucket = env.ASSETS_BUCKET || env.WEBSITE_ASSETS;
  if (!bucket) return { ok: false, error: 'assets_bucket_missing' };

  const pageSlug = page.slug || 'page';
  const r2Key = page.r2_key || `cms/${WORKSPACE_ID}/${PROJECT_SLUG}/${pageSlug}/published.html`;
  await bucket.put(r2Key, html, {
    httpMetadata: { contentType: 'text/html; charset=utf-8' },
  });

  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare(
    `UPDATE cms_pages SET status = 'published', r2_key = ?, r2_bucket = ?, published_at = ?, updated_at = ?, published_by = ? WHERE id = ?`,
  )
    .bind(r2Key, DEFAULT_R2_BUCKET, now, now, userLabel, pageId)
    .run();

  if (env.CACHE) {
    await env.CACHE.delete(`page:${page.route_path}`).catch(() => {});
  }

  return { ok: true, page_id: pageId, r2_key: r2Key, r2_bucket: DEFAULT_R2_BUCKET };
}

export async function handleCmsApi(request, env, pathname, method) {
  const bridge = bridgeAuthorized(request, env);

  if (pathname === '/api/cms/health' && method === 'GET') {
    const tables = await env.DB.prepare(
      `SELECT name FROM sqlite_master WHERE type='table' AND name LIKE 'cms_%' ORDER BY name`,
    )
      .all()
      .catch(() => ({ results: [] }));
    return json({
      ok: true,
      service: 'meauxbility',
      workspace_id: WORKSPACE_ID,
      project_slug: PROJECT_SLUG,
      cms_tables: (tables.results || []).map((r) => r.name),
    });
  }

  if (pathname === '/api/cms/bootstrap' && method === 'GET') {
    const pages = await listCmsPages(env.DB);
    const site = await env.DB.prepare(`SELECT * FROM cms_site_registry WHERE workspace_id = ? LIMIT 1`)
      .bind(WORKSPACE_ID)
      .first()
      .catch(() => null);
    return json({
      ok: true,
      tenant_id: TENANT_ID,
      workspace_id: WORKSPACE_ID,
      project_slug: PROJECT_SLUG,
      site,
      pages,
    });
  }

  if (pathname === '/api/cms/pages' && method === 'GET') {
    const pages = await listCmsPages(env.DB);
    return json({ ok: true, pages });
  }

  const pageMatch = pathname.match(/^\/api\/cms\/pages\/([^/]+)$/);
  if (pageMatch && method === 'GET') {
    const page = await env.DB.prepare(`SELECT * FROM cms_pages WHERE id = ? LIMIT 1`).bind(pageMatch[1]).first();
    if (!page) return json({ error: 'not_found' }, 404);
    const sections = await getPageSections(env, page.id);
    return json({ ok: true, page, sections });
  }

  if (pageMatch && (method === 'PUT' || method === 'PATCH') && bridge) {
    const body = await readJson(request);
    const page = await env.DB.prepare(`SELECT id FROM cms_pages WHERE id = ? LIMIT 1`).bind(pageMatch[1]).first();
    if (!page) return json({ error: 'not_found' }, 404);
    const updates = [];
    const binds = [];
    for (const key of ['title', 'status', 'meta_description', 'seo_title', 'route_path', 'slug']) {
      if (body[key] !== undefined) {
        updates.push(`${key} = ?`);
        binds.push(body[key]);
      }
    }
    if (updates.length) {
      updates.push('updated_at = ?');
      binds.push(Math.floor(Date.now() / 1000));
      binds.push(pageMatch[1]);
      await env.DB.prepare(`UPDATE cms_pages SET ${updates.join(', ')} WHERE id = ?`).bind(...binds).run();
    }
    return json({ ok: true, page_id: pageMatch[1] });
  }

  const sectionsMatch = pathname.match(/^\/api\/cms\/pages\/([^/]+)\/sections$/);
  if (sectionsMatch && method === 'GET') {
    const sections = await getPageSections(env, sectionsMatch[1]);
    return json({ ok: true, sections });
  }

  if (pathname === '/api/cms/publish' && method === 'POST' && bridge) {
    const body = await readJson(request);
    const pageId = String(body.page_id || body.pageId || '').trim();
    if (!pageId) return json({ error: 'page_id required' }, 400);
    const result = await publishPage(env, pageId, String(body.triggered_by || 'iam_bridge'));
    return json(result, result.ok ? 200 : 400);
  }

  return null;
}

export async function handleInternalPublish(request, env) {
  if (!bridgeAuthorized(request, env)) {
    return json({ error: 'unauthorized' }, 401);
  }
  const body = await readJson(request);
  const pageId = String(body.page_id || body.pageId || '').trim();
  if (!pageId) return json({ error: 'page_id required' }, 400);
  const result = await publishPage(env, pageId, String(body.triggered_by || 'internal_publish'));
  return json(result, result.ok ? 200 : 400);
}

export async function ensureHomepageStub(env) {
  const existing = await env.DB.prepare(
    `SELECT id FROM cms_pages WHERE project_slug = ? AND is_homepage = 1 LIMIT 1`,
  )
    .bind(PROJECT_SLUG)
    .first()
    .catch(() => null);
  if (existing?.id) return existing.id;

  const pageId = id('page');
  const now = Math.floor(Date.now() / 1000);
  await env.DB.prepare(
    `INSERT INTO cms_pages (
       id, project_id, project_slug, tenant_id, workspace_id, worker_id,
       slug, path, route_path, page_type, title, status, is_homepage,
       r2_bucket, r2_key, created_at, updated_at
     ) VALUES (?, ?, ?, ?, ?, ?, 'home', '/', '/', 'home', 'Meauxbility Foundation', 'draft', 1, ?, ?, ?, ?)`,
  )
    .bind(
      pageId,
      PROJECT_SLUG,
      PROJECT_SLUG,
      TENANT_ID,
      WORKSPACE_ID,
      'meauxbility',
      DEFAULT_R2_BUCKET,
      `cms/${WORKSPACE_ID}/${PROJECT_SLUG}/home/published.html`,
      now,
      now,
    )
    .run()
    .catch(() => {});

  return pageId;
}
