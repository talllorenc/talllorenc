import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import ContactForm from "@/components/ContactForm/ContactForm";

export const metadata: Metadata = {
  title: "Contact | talllorenc",
  description: "Talllorenc music site",
  openGraph: {
    title: "Contact | talllorenc",
    description: "Talllorenc music site",
    url: "/login",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
