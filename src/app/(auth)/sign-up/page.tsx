import AuthLayout from "@/components/Layout/AuthLayout";
import RegisterPage from "@/components/Pages/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Sign up | talllorenc",
    description: "Talllorenc base",
    url: "/sign-up",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const page = async () => {
  return (
    <AuthLayout>
      <RegisterPage/>
    </AuthLayout>
  );
};

export default page;
