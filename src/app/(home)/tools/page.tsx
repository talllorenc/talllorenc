import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Useful tools | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Useful tools | talllorenc",
    description: "Talllorenc base",
    url: "/tools",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const ToolsPage = async () => {
  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>Tools</h1>
    </Layout>
  );
};

export default ToolsPage;
