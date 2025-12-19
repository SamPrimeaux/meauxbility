// Middleware for all Pages Functions
// Handles CORS and authentication

export const onRequest: PagesFunction = async (context) => {
  const { request, next } = context;

  // Add CORS headers to all responses
  const response = await next();

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Clone response and add headers
  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...Object.fromEntries(response.headers),
      ...corsHeaders,
    },
  });

  return newResponse;
};
