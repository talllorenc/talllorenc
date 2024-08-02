import LoginForm from "@/components/AuthForms/LoginForm";
import { Metadata } from "next";
import { getSession } from "../../../lib/getSession";
import { redirect } from "next/navigation";
import AuthLayout from "@/components/Layout/AuthLayout";

export const metadata: Metadata = {
  title: "Sign in | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Sign in | talllorenc",
    description: "Talllorenc base",
    url: "/login",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
