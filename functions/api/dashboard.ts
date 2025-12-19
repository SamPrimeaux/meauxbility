// Dashboard-specific API endpoints with D1 access
// Provides pre-built queries for common dashboard operations

export interface Env {
  DB: D1Database;
  MEAUX_WORK_DB: D1Database;
  SAAS_DB: D1Database;
  MEAUXABILITY_API_DB: D1Database;
  MEAUXWORK_DB: D1Database;
  INNERANIMAL_ASSETS_DB: D1Database;
  INNERANIMAL_APP_LIBRARY_DB: D1Database;
  SOUTHERNPETS_DB: D1Database;
  MEAUXOS_DB: D1Database;
  MEAUXBILITYORG_DB: D1Database;
  MEAUXACCESS_DB: D1Database;
  MEAUXMARKETS_DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname.replace('/api/dashboard', '');

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Dashboard stats endpoint
    if (path === '/stats' || path === '') {
      const stats = await getDashboardStats(env.DB);
      return new Response(
        JSON.stringify({ success: true, data: stats }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Projects endpoint
    if (path === '/projects') {
      const projects = await getProjects(env.MEAUX_WORK_DB);
      return new Response(
        JSON.stringify({ success: true, data: projects }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Messages/Communications endpoint
    if (path === '/messages') {
      const channel = url.searchParams.get('channel') || 'general';
      const messages = await getMessages(env.DB, channel);
      return new Response(
        JSON.stringify({ success: true, data: messages }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Content/Assets endpoint
    if (path === '/content') {
      const bucket = url.searchParams.get('bucket') || 'meauxbility-assets';
      const content = await getContent(env.DB, bucket);
      return new Response(
        JSON.stringify({ success: true, data: content }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Invalid endpoint' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};

async function getDashboardStats(db: D1Database) {
  try {
    // Get total assets
    const assetsResult = await db.prepare(
      'SELECT COUNT(*) as count FROM assets'
    ).first().catch(() => ({ count: 0 }));

    // Get active projects
    const projectsResult = await db.prepare(
      'SELECT COUNT(*) as count FROM projects WHERE status = ?'
    ).bind('active').first().catch(() => ({ count: 0 }));

    // Get team members
    const teamResult = await db.prepare(
      'SELECT COUNT(*) as count FROM team_members'
    ).first().catch(() => ({ count: 0 }));

    return {
      assets: assetsResult?.count || 0,
      projects: projectsResult?.count || 0,
      teamMembers: teamResult?.count || 0,
    };
  } catch (error) {
    return { assets: 0, projects: 0, teamMembers: 0 };
  }
}

async function getProjects(db: D1Database) {
  try {
    const result = await db.prepare(
      'SELECT * FROM projects ORDER BY created_at DESC LIMIT 50'
    ).all();
    return result.results || [];
  } catch (error) {
    return [];
  }
}

async function getMessages(db: D1Database, channel: string) {
  try {
    const result = await db.prepare(
      'SELECT * FROM messages WHERE channel = ? ORDER BY created_at DESC LIMIT 50'
    ).bind(channel).all();
    return result.results || [];
  } catch (error) {
    return [];
  }
}

async function getContent(db: D1Database, bucket: string) {
  try {
    const result = await db.prepare(
      'SELECT * FROM content WHERE bucket = ? ORDER BY created_at DESC LIMIT 100'
    ).bind(bucket).all();
    return result.results || [];
  } catch (error) {
    return [];
  }
}
