/**
 * MEAUXSession — realtime / session coordination (production DO binding).
 * Minimal stable export; extend for WebSocket rooms when needed.
 */
export class MEAUXSession {
  constructor(state, env) {
    this.state = state;
    this.env = env;
  }

  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return Response.json({ ok: true, do: 'MEAUXSession' });
    }
    return Response.json({ ok: false, error: 'not_found' }, { status: 404 });
  }
}
