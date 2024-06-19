import { LoginForm } from "@/components/AuthForms/LoginForm";
import { Metadata } from "next";

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

const RegisterPage = () => {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1">
        <div className="max-w-xl mx-auto px-[18px] py-12 sm:py-16 lg:py-20">
          <LoginForm/>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
