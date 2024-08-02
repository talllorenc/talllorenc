import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "About service | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "About service | talllorenc",
    description: "Talllorenc base",
    url: "/about",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const AboutPage = async () => {
  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>About</h1>
    </Layout>
  );
};

export default AboutPage;
