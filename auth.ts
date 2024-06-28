import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import google from "next-auth/providers/google";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
