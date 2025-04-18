import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js"; // Correct import for Supabase client
import { Resend } from "npm:resend"; // Import Resend
const supabaseUrl = Deno.env.get("SUPABASE_URL");
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(Deno.env.get("RESEND_API_KEY")); // Initialize Resend with your API key
Deno.serve(async (req)=>{
  if (req.method === 'POST') {
    const { name, email, message } = await req.json();
    // Insert the message into the messages table
    const { data, error } = await supabase.from('messages').insert([
      {
        name,
        email,
        message
      }
    ]);
    if (error) {
      return new Response(JSON.stringify({
        error: error.message
      }), {
        status: 400
      });
    }
    // Send an email using Resend
    await resend.sendEmail({
      from: "CRSoftwareEngineer@outlook.com",
      to: "CRSoftwareEngineer@outlook.com",
      subject: "New Message Received",
      html: `<p>You have received a new message:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });
    return new Response(JSON.stringify({
      message: 'Message submitted and email sent!'
    }), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 200
    });
  }
  return new Response('Method not allowed', {
    status: 405
  });
});
