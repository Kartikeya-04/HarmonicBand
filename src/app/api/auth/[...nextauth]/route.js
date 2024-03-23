import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import dotenv from 'dotenv';
dotenv.config();
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLECLIENT,
      clientSecret: process.env.GOOGLESECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUBCLIENT,
      clientSecret: process.env.GITHUBSECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
//call back url = http://localhost:3000/api/auth/callback/google
// start url = http://localhost:3000
