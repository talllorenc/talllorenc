"use server";

import { signIn } from "../../auth";
import { AuthError } from "next-auth";
import { ILoginUser, IRegisterUser } from "@/types/AuthForms";

export async function authenticate(formData: ILoginUser) {
  try {
    await signIn("credentials", {
      ...formData,
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

export async function register(formData: IRegisterUser) {
  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();

    if (
      errorData.errors &&
      Array.isArray(errorData.errors) &&
      errorData.errors.length > 0
    ) {
      const errorMessages = errorData.errors
        .map((error: { msg: string }) => error.msg)
        .join(", ");
      throw new Error(errorMessages || "Registration failed");
    }

    throw new Error("Registration failed");
  }

  return response.json();
}
