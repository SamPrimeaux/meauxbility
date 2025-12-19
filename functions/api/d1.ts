// Cloudflare Pages Function for D1 Database Access
// This enables MCP connections to D1 databases from the React app

export interface Env {
  // Primary Dashboard Database
  DB: D1Database; // meauxbility-dashboard-db

  // Main Work Hub
  MEAUX_WORK_DB: D1Database; // meaux-work-db

  // SaaS Core
  SAAS_DB: D1Database; // meauxstack-saas-db

  // API Database
  MEAUXABILITY_API_DB: D1Database; // meauxbility-api-db

  // WebSocket/Real-time
  MEAUXWORK_DB: D1Database; // meauxwork-db

  // Inner Animal Media
  INNERANIMAL_ASSETS_DB: D1Database; // inneranimalmedia-assets
  INNERANIMAL_APP_LIBRARY_DB: D1Database; // inneranimalmedia_app_library

  // Projects
  SOUTHERNPETS_DB: D1Database; // southernpetsanimalrescue

  // System Databases
  MEAUXOS_DB: D1Database; // meauxos
  MEAUXBILITYORG_DB: D1Database; // meauxbilityorg
  MEAUXACCESS_DB: D1Database; // meauxaccess-db
  MEAUXMARKETS_DB: D1Database; // meauxmarkets_dev
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/d1', '');

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle OPTIONS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse database binding from query or path
    const dbName = url.searchParams.get('db') || 'DB';
    const db = getDatabase(env, dbName);

    if (!db) {
      return new Response(
        JSON.stringify({ error: `Database ${dbName} not found` }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Handle different endpoints
    if (path === '/query' || path === '') {
      const body = await request.json().catch(() => ({}));
      const { sql, params = [] } = body;

      if (!sql) {
        return new Response(
          JSON.stringify({ error: 'SQL query required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const result = await db.prepare(sql).bind(...params).all();

      return new Response(
        JSON.stringify({ success: true, data: result.results, meta: result.meta }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (path === '/exec') {
      const body = await request.json().catch(() => ({}));
      const { sql, params = [] } = body;

      if (!sql) {
        return new Response(
          JSON.stringify({ error: 'SQL query required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const result = await db.prepare(sql).bind(...params).run();

      return new Response(
        JSON.stringify({ success: true, data: result }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    if (path === '/batch') {
      const body = await request.json().catch(() => ({}));
      const { queries } = body;

      if (!Array.isArray(queries)) {
        return new Response(
          JSON.stringify({ error: 'Queries array required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      const statements = queries.map((q: { sql: string; params?: any[] }) =>
        db.prepare(q.sql).bind(...(q.params || []))
      );

      const results = await db.batch(statements);

      return new Response(
        JSON.stringify({ success: true, data: results }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid endpoint' }),
      {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Database error',
        stack: error.stack
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
};

function getDatabase(env: Env, dbName: string): D1Database | null {
  const dbMap: Record<string, keyof Env> = {
    'DB': 'DB',
    'MEAUX_WORK_DB': 'MEAUX_WORK_DB',
    'SAAS_DB': 'SAAS_DB',
    'MEAUXABILITY_API_DB': 'MEAUXABILITY_API_DB',
    'MEAUXWORK_DB': 'MEAUXWORK_DB',
    'INNERANIMAL_ASSETS_DB': 'INNERANIMAL_ASSETS_DB',
    'INNERANIMAL_APP_LIBRARY_DB': 'INNERANIMAL_APP_LIBRARY_DB',
    'SOUTHERNPETS_DB': 'SOUTHERNPETS_DB',
    'MEAUXOS_DB': 'MEAUXOS_DB',
    'MEAUXBILITYORG_DB': 'MEAUXBILITYORG_DB',
    'MEAUXACCESS_DB': 'MEAUXACCESS_DB',
    'MEAUXMARKETS_DB': 'MEAUXMARKETS_DB',
  };

  const binding = dbMap[dbName];
  return binding ? env[binding] : null;
}
