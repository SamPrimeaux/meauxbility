import { MEAUXSession } from './durable-objects/meaux-session.js';
import { handleCmsApi, handleInternalPublish } from './api/cms-api.js';
import { fetchCmsPageHtml, resolveCmsPageByRoute } from './lib/cms-serve.js';
import { json } from './lib/http.js';
import { PROJECT_SLUG, WORKSPACE_ID } from './lib/constants.js';

export { MEAUXSession };

const PUBLIC_API_PREFIXES = ['/api/cms/health', '/api/cms/bootstrap'];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method.toUpperCase();

    if (pathname === '/health' || pathname === '/api/health') {
      return json({
        ok: true,
        service: 'meauxbility',
        workspace_id: WORKSPACE_ID,
        project_slug: PROJECT_SLUG,
        environment: env.ENVIRONMENT || 'production',
      });
    }

    if (pathname === '/_internal/publish' && method === 'POST') {
      return handleInternalPublish(request, env);
    }

    if (pathname.startsWith('/api/cms/')) {
      const cmsResponse = await handleCmsApi(request, env, pathname, method);
      if (cmsResponse) return cmsResponse;
      return json({ error: 'not_found', path: pathname }, 404);
    }

    if (pathname.startsWith('/api/')) {
      return json({ error: 'not_found', path: pathname }, 404);
    }

    const previewDraft = url.searchParams.get('preview') === 'draft';
    const cmsPage = await resolveCmsPageByRoute(env.DB, pathname, { includeDraft: previewDraft }).catch(() => null);
    if (cmsPage?.id) {
      const cachedKey = `page:${cmsPage.route_path || pathname}`;
      if (!previewDraft && env.CACHE) {
        const cached = await env.CACHE.get(cachedKey);
        if (cached) {
          return new Response(cached, {
            headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=60' },
          });
        }
      }

      const artifact = await fetchCmsPageHtml(env, cmsPage);
      if (artifact?.body) {
        const html = await new Response(artifact.body).text();
        if (!previewDraft && env.CACHE) {
          ctx.waitUntil(env.CACHE.put(cachedKey, html, { expirationTtl: 300 }).catch(() => {}));
        }
        return new Response(html, {
          headers: {
            'content-type': artifact.contentType || 'text/html; charset=utf-8',
            'cache-control': previewDraft ? 'no-store' : 'public, max-age=60',
          },
        });
      }
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  },
};
