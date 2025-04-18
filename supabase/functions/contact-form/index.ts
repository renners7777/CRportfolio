import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // 1. Parse incoming data
    const { name, email, message, captchaToken } = await req.json() as ContactFormData;

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
      return new Response(JSON.stringify({ error: 'CAPTCHA verification failed or server misconfiguration.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
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
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Supabase environment variables not set.');
      return new Response(JSON.stringify({ error: 'Server configuration error.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('messages')
      .insert([{ name, email, message }])
      .select()
      .single();

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      throw insertError; // Let the generic error handler catch it
    }

    // 4. Send Email via Resend (if insert was successful)
    if (insertData) {
      const resendApiKey = Deno.env.get('RESEND_API_KEY');
      const recipientEmail = Deno.env.get('NOTIFICATION_EMAIL_ADDRESS');

      if (!resendApiKey || !recipientEmail) {
        console.error('Resend API Key or Recipient Email environment variable not set.');
      } else {
        try {
          const resendApiUrl = 'https://api.resend.com/emails';
          const emailPayload = {
            from: 'Contact Form <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `New Contact Form Message from ${name}`,
            html: `
              <p>You received a new message from your contact form:</p>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
              </ul>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          };

          const resendResponse = await fetch(resendApiUrl, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${resendApiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailPayload),
          });

          if (!resendResponse.ok) {
            const errorBody = await resendResponse.json();
            console.error(`Failed to send email via Resend: ${resendResponse.status}`, errorBody);
          } else {
            console.log('Email sent successfully via Resend.');
          }
        } catch (emailError) {
          console.error('Error sending email via Resend:', emailError);
        }
      }
    }

    // 5. Return success response to the frontend
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('General error in contact-form function:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to process request.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
