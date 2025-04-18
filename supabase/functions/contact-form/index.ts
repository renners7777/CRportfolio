import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts'; // We'll create this

// Define the expected structure of the incoming request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  captchaToken: string; // Added field for the reCAPTCHA token
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Parse incoming data
    const { name, email, message, captchaToken } = await req.json() as ContactFormData;

    // Basic validation
    if (!name || !email || !message || !captchaToken) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2. Verify reCAPTCHA token
    const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
    if (!recaptchaSecret) {
        console.error('RECAPTCHA_SECRET_KEY environment variable not set.');
        return new Response(JSON.stringify({ error: 'Server configuration error.' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const verifyResponse = await fetch(recaptchaUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(captchaToken)}`
    });

    const recaptchaResult = await verifyResponse.json();

    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', recaptchaResult['error-codes']);
      return new Response(JSON.stringify({ error: 'CAPTCHA verification failed.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 3. Insert data into Supabase using Service Role Key
    // Ensure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error('Supabase environment variables not set.');
        return new Response(JSON.stringify({ error: 'Server configuration error.' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Create Supabase client with SERVICE ROLE privileges
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { data, error } = await supabaseAdmin
      .from('messages')
      .insert([{ name, email, message }]); // RLS policy allows service_role

    if (error) {
      console.error('Supabase insert error:', error);
      throw error; // Let the generic error handler catch it
    }

    // 4. Return success response
    return new Response(JSON.stringify({ message: 'Message sent successfully!', data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('General error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to process request.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
