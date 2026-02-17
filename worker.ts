interface Env {
  WAITLIST: KVNamespace;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/waitlist') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });
      }

      if (request.method === 'POST') {
        return handleWaitlist(request, env);
      }

      return new Response('Method not allowed', { status: 405 });
    }

    // Everything else: serve static assets
    return env.ASSETS.fetch(request);
  },
};

async function handleWaitlist(request: Request, env: Env): Promise<Response> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString().trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers }
      );
    }

    const existing = await env.WAITLIST.get(email);
    if (existing) {
      return new Response(
        JSON.stringify({ success: true, message: "You're already on the waitlist!" }),
        { status: 200, headers }
      );
    }

    await env.WAITLIST.put(
      email,
      JSON.stringify({ email, timestamp: new Date().toISOString() })
    );

    return new Response(
      JSON.stringify({ success: true, message: "You're on the list! We'll be in touch." }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers }
    );
  }
}
