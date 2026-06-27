import { DEFAULT_R2_BUCKET, PROJECT_SLUG } from './constants.js';

function normalizeRoute(pathname) {
  let route = String(pathname || '/').trim() || '/';
  if (!route.startsWith('/')) route = `/${route}`;
  if (route.length > 1) route = route.replace(/\/+$/, '');
  return route;
}

/**
 * @param {import('@cloudflare/workers-types').D1Database} db
 * @param {string} routePath
 * @param {{ includeDraft?: boolean }} [opts]
 */
export async function resolveCmsPageByRoute(db, routePath, opts = {}) {
  const route = normalizeRoute(routePath);
  const statusSql = opts.includeDraft
    ? `status != 'archived'`
    : `status = 'published' AND COALESCE(is_active, 1) = 1`;

  const candidates = [route];
  if (route === '/') candidates.push('/home');
  if (route === '/home') candidates.push('/');

  for (const candidate of candidates) {
    const page = await db
      .prepare(
        `SELECT id, slug, title, route_path, status, page_type, r2_key, r2_bucket, content_type, project_slug, is_homepage
         FROM cms_pages
         WHERE route_path = ? AND ${statusSql}
         ORDER BY is_homepage DESC, updated_at DESC
         LIMIT 1`,
      )
      .bind(candidate)
      .first()
      .catch(() => null);
    if (page?.id) return page;
  }

  if (route !== '/') {
    const slug = route.replace(/^\//, '');
    return db
      .prepare(
        `SELECT id, slug, title, route_path, status, page_type, r2_key, r2_bucket, content_type, project_slug, is_homepage
         FROM cms_pages
         WHERE slug = ? AND ${statusSql}
         ORDER BY updated_at DESC
         LIMIT 1`,
      )
      .bind(slug)
      .first()
      .catch(() => null);
  }
  return null;
}

/**
 * @param {any} env
 * @param {Record<string, unknown>} page
 */
export async function fetchCmsPageHtml(env, page) {
  const bucketName = String(page.r2_bucket || DEFAULT_R2_BUCKET);
  const key = String(page.r2_key || '').trim();
  if (!key) return null;

  const bucket = pickR2Bucket(env, bucketName);
  if (!bucket) return null;

  const obj = await bucket.get(key).catch(() => null);
  if (!obj) return null;
  return {
    body: obj.body,
    contentType: obj.httpMetadata?.contentType || String(page.content_type || 'text/html'),
  };
}

/** @param {any} env @param {string} bucketName */
function pickR2Bucket(env, bucketName) {
  if (bucketName === 'meauxbilityv2' || bucketName === DEFAULT_R2_BUCKET) {
    return env.ASSETS_BUCKET || env.WEBSITE_ASSETS || null;
  }
  if (bucketName === 'allinfrastructure') return env.INFRASTRUCTURE_BUCKET || null;
  return env.ASSETS_BUCKET || env.WEBSITE_ASSETS || null;
}

/**
 * @param {import('@cloudflare/workers-types').D1Database} db
 */
export async function listCmsPages(db, projectSlug = PROJECT_SLUG) {
  const { results } = await db
    .prepare(
      `SELECT id, slug, title, route_path, status, page_type, is_homepage, r2_key, r2_bucket, updated_at
       FROM cms_pages
       WHERE project_slug = ? AND status != 'archived'
       ORDER BY sort_order ASC, updated_at DESC`,
    )
    .bind(projectSlug)
    .all()
    .catch(() => ({ results: [] }));
  return results || [];
}
