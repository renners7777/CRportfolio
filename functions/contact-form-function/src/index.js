import { Client, Databases, ID } from 'node-appwrite'; // Import Databases and ID

// --- Environment Variable Checks ---
// Ensure all required environment variables are defined
const requiredEnv = [
  'APPWRITE_FUNCTION_API_ENDPOINT',
  'APPWRITE_FUNCTION_PROJECT_ID',
  'APPWRITE_API_KEY', // Server-side API Key for backend operations
  'RECAPTCHA_SECRET_KEY',
  'RESEND_API_KEY',
  'NOTIFICATION_EMAIL_ADDRESS',
  'APPWRITE_DATABASE_ID',
  'APPWRITE_COLLECTION_ID_MESSAGES'
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    console.error(`Error: Environment variable ${key} is not set.`);
    // Optional: Throw an error during initialization if a critical env var is missing
    // throw new Error(`Missing environment variable: ${key}`);
  }
}

// --- Main Function Logic ---
export default async ({ req, res, log, error }) => {
  // 1. Check Request Method (Expect POST)
  if (req.method !== 'POST') {
    return res.json({ error: 'Method not allowed' }, 405);
  }

  // 2. Parse Incoming Data
  let name, email, message, captchaToken;
  try {
    // Appwrite passes the body parsed if Content-Type is application/json
    // If you send stringified JSON, req.body should be the object
    // If you send raw stringified JSON, you might need JSON.parse(req.body)
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    log("Parsed request body:", body); // Log the parsed body

    if (!body || typeof body !== 'object') {
        throw new Error("Invalid request body format. Expected JSON object.");
    }

    ({ name, email, message, captchaToken } = body);

    // Basic validation
    if (!name || !email || !message || !captchaToken) {
      log("Missing required fields in request body.");
      return res.json({ error: 'Missing required fields.' }, 400);
    }
  } catch (parseError) {
    error("Failed to parse request body:", parseError);
    return res.json({ error: 'Invalid request body. Could not parse JSON.' }, 400);
  }

  // 3. Verify reCAPTCHA Token
  log("Verifying reCAPTCHA token...");
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify`;

  try {
    const verifyResponse = await fetch(recaptchaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(captchaToken)}`
    });

    const recaptchaResult = await verifyResponse.json();
    log("reCAPTCHA verification result:", recaptchaResult);

    if (!recaptchaResult.success) {
      error('reCAPTCHA verification failed:', recaptchaResult['error-codes'] || 'Unknown reason');
      return res.json({ error: 'CAPTCHA verification failed.' }, 400);
    }
    log("reCAPTCHA verification successful.");

  } catch (captchaError) {
    error("Error during reCAPTCHA verification request:", captchaError);
    return res.json({ error: 'Failed to verify CAPTCHA. Server error.' }, 500);
  }

  // 4. Initialize Appwrite Client (Server-Side)
  // Use the API Key from environment variables for backend operations
  const client = new Client()
    .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY); // Use the secure API key

  const databases = new Databases(client);
  const databaseId = process.env.APPWRITE_DATABASE_ID;
  const collectionId = process.env.APPWRITE_COLLECTION_ID_MESSAGES;

  // 5. Save Message to Appwrite Database
  log(`Attempting to save message to Database ID: ${databaseId}, Collection ID: ${collectionId}`);
  try {
    const document = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(), // Generate a unique ID for the document
      { // The data to store
        name: name,
        email: email,
        message: message,
        // You might want to add a timestamp here if not automatically handled by Appwrite
        // createdAt: new Date().toISOString()
      }
    );
    log("Successfully saved message to database. Document ID:", document.$id);

    // 6. Send Notification Email via Resend (only if save was successful)
    log("Attempting to send notification email via Resend...");
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL_ADDRESS;
    const resendApiUrl = 'https://api.resend.com/emails';

    try {
      const emailPayload = {
        from: 'Contact Form <onboarding@resend.dev>', // IMPORTANT: Replace with your verified Resend domain/sender
        to: [recipientEmail],
        subject: `New Contact Form Message from ${name}`,
        html: `<p>You received a new message:</p><ul><li><strong>Name:</strong> ${name}</li><li><strong>Email:</strong> ${email}</li></ul><p><strong>Message:</strong></p><p>${message}</p>`,
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
        error(`Failed to send email via Resend: ${resendResponse.status}`, errorBody);
        // Log error but don't fail the whole function just for the email
      } else {
        log('Notification email sent successfully via Resend.');
      }
    } catch (emailError) {
      error('Error sending notification email via Resend:', emailError);
      // Log error but don't fail the whole function
    }

    // 7. Return Success Response to Frontend
    return res.json({ message: 'Message received and saved successfully!' }, 200); // Use 200 OK

  } catch (dbError) {
    error("Failed to save message to database:", dbError);
    return res.json({ error: 'Failed to save message. Server error.' }, 500);
  }
};
