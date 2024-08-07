import Layout from "@/components/Layout/Layout";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const SettingsPage = async () => {

  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>Settings</h1>
    </Layout>
  );
};

export default SettingsPage;
