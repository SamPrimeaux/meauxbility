// Catch-all route for React SPA routing
// Serves index.html for all routes so React Router can handle client-side routing

export const onRequest: PagesFunction = async (context) => {
  const { request } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Don't intercept API routes or static assets
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/assets/') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|map|webp|avif)$/i)
  ) {
    // Let these pass through normally
    return context.next();
  }

  // For all SPA routes, serve index.html
  // This allows React Router to handle client-side routing
  try {
    // Fetch index.html directly
    const indexUrl = new URL('/index.html', url.origin);
    const indexRequest = new Request(indexUrl.toString(), {
      method: 'GET',
      headers: request.headers,
    });
    
    const indexResponse = await context.next(indexRequest);
    
    if (indexResponse.ok) {
      return new Response(indexResponse.body, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=0, must-revalidate',
        },
      });
    }
  } catch (error) {
    console.error('Error serving index.html:', error);
  }

  // Fallback: try next() for the original request
  return context.next();
};
