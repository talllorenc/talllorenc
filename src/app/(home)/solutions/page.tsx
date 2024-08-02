import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Solutions | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Solutions | talllorenc",
    description: "Talllorenc base",
    url: "/solutions",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const SolutionsPage = async () => {
  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>Solutions</h1>
    </Layout>
  );
};

export default SolutionsPage;
