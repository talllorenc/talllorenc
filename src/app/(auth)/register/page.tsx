import RegisterForm from "@/components/AuthForms/RegisterForm";
import AuthLayout from "@/components/Layout/AuthLayout";
import { getSession } from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign up | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Sign up | talllorenc",
    description: "Talllorenc base",
    url: "/register",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const RegisterPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if (user) redirect("/");

  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
