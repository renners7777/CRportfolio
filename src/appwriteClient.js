import { Client, Functions } from 'appwrite';

// Initialize the Appwrite Client
const client = new Client();

// Check if environment variables are set
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

if (!endpoint || !projectId) {
  console.error(
    'Appwrite environment variables VITE_APPWRITE_ENDPOINT or VITE_APPWRITE_PROJECT_ID are not set.'
  );
  // You might want to throw an error or handle this case appropriately
} else {
  client
    .setEndpoint(endpoint) // Your Appwrite Endpoint
    .setProject(projectId); // Your Appwrite Project ID
}

// Initialize Appwrite Services
export const functions = new Functions(client);
// Add other services if needed (Databases, Account, Storage, etc.)
// export const databases = new Databases(client);
// export const account = new Account(client);

export default client;