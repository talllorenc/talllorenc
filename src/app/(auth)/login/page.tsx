import { LoginForm } from "@/components/AuthForms/LoginForm";
import { Metadata } from "next";
import { getSession } from "../../../lib/getSession";
import { redirect } from "next/navigation";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "Sign in | talllorenc",
  description: "Talllorenc music site",
  openGraph: {
    title: "Sign in | talllorenc",
    description: "Talllorenc music site",
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
    <div className="flex items-center justify-center flex-1 p-4">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
