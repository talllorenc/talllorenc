import BanerHome from "@/components/BanerHome/BanerHome";
import Layout from "@/components/Layout/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | talllorenc",
  description: "Talllorenc music site",
  openGraph: {
    title: "Home | talllorenc",
    description: "Talllorenc music site",
    url: "/",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

export default function Home() {
  return (
    <Layout>
      <BanerHome/>
    </Layout>
  );
}
