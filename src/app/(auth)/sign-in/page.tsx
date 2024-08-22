import { Metadata } from "next";
import AuthLayout from "@/components/Layout/AuthLayout";
import LoginPage from "@/components/Pages/LoginPage";

export const metadata: Metadata = {
  title: "Sign in | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Sign in | talllorenc",
    description: "Talllorenc base",
    url: "/sign-in",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const page = async () => {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
};

export default page;
