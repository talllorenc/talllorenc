import { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { Dancing_Script } from "next/font/google";
import AboutPage from "@/components/Pages/AboutPage";

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

const page = async () => {
  return (
    <Layout>
      <div
        className="w-full h-64 bg-cover bg-bottom flex items-center justify-center rounded-full shadow-buttonBlue"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <h1 className={`text-6xl font-bold ${dansing.className}`}>
          About portal
        </h1>
      </div>

      <AboutPage/>
    </Layout>
  );
};

export default page;
