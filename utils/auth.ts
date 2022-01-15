import { initAuth0 } from "@auth0/nextjs-auth0";
export default initAuth0({
  issuerBaseURL: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.NEXT_PUBLIC_AUTH0_BASE_URL,
  secret: process.env.NEXT_PUBLIC_AUTH0_SECRET,
  clientID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
});
