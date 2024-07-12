import { BanerMain } from "@/components/BanerMain/BanerMain";
import { CardItems } from "@/components/CardItems/CardItems";
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
    <div className="">
      <BanerMain />
      <Layout>
        <div className="flex flex-col gap-4">
          <p className="text-3xl font-bold">Latest beats</p>
          <CardItems />
        </div>
      </Layout>
    </div>
  );
}
