export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders,
    },
  });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export function bridgeAuthorized(request, env) {
  const key = request.headers.get('x-bridge-key') || request.headers.get('authorization')?.replace(/^Bearer\s+/i, '') || '';
  const valid = env.AGENTSAM_BRIDGE_KEY || env.INTERNAL_PUBLISH_KEY || '';
  return Boolean(valid && key && key === valid);
}
