# Meauxbility Foundation — production Worker

501(c)(3) nonprofit site managed via Inner Animal Media SaaS (`ws_meauxbility`).

## Stack

| Binding | Resource |
|---------|----------|
| `DB` | D1 `meauxbilityorg` |
| `ASSETS_BUCKET` / `WEBSITE_ASSETS` | R2 `meauxbilityv2` |
| `INFRASTRUCTURE_BUCKET` | R2 `allinfrastructure` |
| `SESSION_DO` | Durable Object `MEAUXSession` |
| `CACHE` / `SESSIONS` / `REALTIME_KV` | KV |
| `HYPERDRIVE` | Supabase via `meauxhyper` |

## Build & deploy

```bash
npm install
npm run build          # copies static rollback homepage → public/
npx wrangler deploy
```

Cloudflare Workers Builds runs the same: `npm run build` then `npx wrangler deploy`.

## IAM SaaS management

Set bridge secret on the Worker (same value as IAM `AGENTSAM_BRIDGE_KEY`):

```bash
npx wrangler secret put AGENTSAM_BRIDGE_KEY
```

Endpoints for IAM bridge (`cpas_fragment` profile):

- `GET /api/cms/health`
- `GET /api/cms/bootstrap`
- `GET /api/cms/pages`
- `POST /api/cms/publish` (bridge auth)
- `POST /_internal/publish` (bridge auth)

Public CMS pages are served from `cms_pages` + R2 when published; static `public/` is the fallback.

## Local dev

```bash
npm run build
npx wrangler dev
```

## Domains

- https://meauxbility.org
- https://www.meauxbility.org
- https://admin.meauxbility.org

Worker URL: https://meauxbility.meauxbility.workers.dev
