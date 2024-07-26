
import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "About service | talllorenc",
  description: "Talllorenc music site",
  openGraph: {
    title: "About service | talllorenc",
    description: "Talllorenc music site",
    url: "/about",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const AuthPage = async () => {

  return (
    <Layout>
      Auth
    </Layout>
  );
};

export default AuthPage;
