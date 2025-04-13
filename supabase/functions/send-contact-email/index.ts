// filepath: supabase/functions/send-contact-email/index.ts
import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
// NOTE: You might need to install an email client library
// Example using Resend (install instructions may vary)
// import { Resend } from 'resend'; // Hypothetical import

// Load API Key and target email from environment variables
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
const TARGET_EMAIL = Deno.env.get('TARGET_CONTACT_EMAIL'); // Your email address

// Initialize email client (example for Resend)
// const resend = new Resend(RESEND_API_KEY);

console.log('Send Contact Email function booting up...');

serve(async (req: Request) => {
  // 1. Validate the request (ensure it's from Supabase trigger)
  // Supabase sends a POST request with the record data in the body
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  if (!RESEND_API_KEY || !TARGET_EMAIL) {
      console.error("Missing RESEND_API_KEY or TARGET_CONTACT_EMAIL env var");
      return new Response("Internal Server Error: Missing configuration", { status: 500 });
  }

  try {
    // 2. Parse the incoming data (the new message record)
    const payload = await req.json();
    const record = payload.record; // Structure depends on trigger type

    if (!record || !record.name || !record.email || !record.message) {
       console.error("Invalid payload received:", payload);
       return new Response("Bad Request: Invalid payload", { status: 400 });
    }

    console.log(`Processing message from: ${record.email}`);

    // 3. Construct and send the email
    const emailSubject = `New Contact Form Message from ${record.name}`;
    const emailBody = `
      You received a new message via your portfolio contact form:
      --------------------------------
      Name: ${record.name}
      Email: ${record.email}
      Message:
      ${record.message}
      --------------------------------
    `;

    // --- Replace with your actual email sending logic ---
    // Example using Resend (check their specific API)
    /*
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact Form <noreply@yourdomain.com>', // Use a verified domain with your email provider
      to: [TARGET_EMAIL],
      subject: emailSubject,
      html: `<p>${emailBody.replace(/\n/g, '<br>')}</p>`, // Basic HTML formatting
    });

    if (error) {
      throw new Error(`Resend error: ${JSON.stringify(error)}`);
    }
    console.log('Email sent successfully via Resend:', data);
    */
    // --- End of email sending logic placeholder ---

    // Placeholder success until email sending is implemented
    console.log("Simulating email send:");
    console.log("To:", TARGET_EMAIL);
    console.log("Subject:", emailSubject);
    console.log("Body:", emailBody);
    // End placeholder

    return new Response(JSON.stringify({ success: true, message: 'Email processed.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
})

/*
To deploy:
1. Set secrets:
   supabase secrets set RESEND_API_KEY=your_actual_api_key
   supabase secrets set TARGET_CONTACT_EMAIL=CRSoftwareEngineer@outlook.com
2. Deploy the function:
   supabase functions deploy send-contact-email --no-verify-jwt
*/
