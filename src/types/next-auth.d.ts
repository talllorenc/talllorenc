// types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      image: string;
    } & DefaultSession["user"];
    accessToken?: string; // Add this line to include accessToken
  }

  interface User {
    id: string;
    role: string;
    image: string;
    accessToken?: string; // Add this line to include accessToken
  }

  interface JWT {
    id: string;
    role: string;
    image: string;
    accessToken?: string; // Add this line to include accessToken
  }
}
