"use server";

import { signIn } from "../../auth";
import { AuthError } from "next-auth";
import { ILoginUser } from "@/types/AuthForms";

export async function authenticate(formData: ILoginUser) {
  try {
    await signIn("credentials", {
      ...formData,
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";
        default:
          return "Invalid credentials";
      }
    }
    throw error;
  }
}
