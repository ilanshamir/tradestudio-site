interface Env {
  WAITLIST: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString().trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid email address.' }),
        { status: 400, headers: corsHeaders }
      );
    }

    const existing = await env.WAITLIST.get(email);
    if (existing) {
      return new Response(
        JSON.stringify({ success: true, message: "You're already on the waitlist!" }),
        { status: 200, headers: corsHeaders }
      );
    }

    await env.WAITLIST.put(
      email,
      JSON.stringify({ email, timestamp: new Date().toISOString() })
    );

    return new Response(
      JSON.stringify({ success: true, message: "You're on the list! We'll be in touch." }),
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers: corsHeaders }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
