import { RegisterForm } from "@/components/AuthForms/RegisterForm";
import Layout from "@/components/Layout/Layout";
import { getSession } from "@/lib/getSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign up | talllorenc",
  description: "Talllorenc music site",
  openGraph: {
    title: "Sign up | talllorenc",
    description: "Talllorenc music site",
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
    <div className="flex items-center justify-center flex-1 p-4">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
