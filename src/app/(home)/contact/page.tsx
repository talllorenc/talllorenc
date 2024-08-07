import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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

const ContactPage = () => {
  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>
        Contact
      </h1>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
