import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
// import CredentialsProvider from 'next-auth/providers/credentials';
import dotenv from 'dotenv';
dotenv.config();

const handler = NextAuth({
  // pages: {
  //   signIn: '/SignIn',
  // },
  providers: [
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {},
    //   async authorize(credentials) {
    //     try {
    //       console.log(credentials);
    //       const user = await login(credentials);
    //       console.log('user is ', user);
    //       return user;
    //     } catch (error) {
    //       console.log('Error :', error);
    //       return null;
    //     }
    //   },
    // }),
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
