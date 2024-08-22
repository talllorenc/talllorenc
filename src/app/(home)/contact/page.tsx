import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import ContactPage from "@/components/Pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact me | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Contact me | talllorenc",
    description: "Talllorenc base",
    url: "/contact",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const page = () => {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
};

export default page;
