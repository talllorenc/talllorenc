import Layout from "@/components/Layout/Layout";
import ProfilePage from "@/components/Pages/ProfilePage";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const page = async () => {

  return (
    <Layout>
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>Profile</h1>
      <ProfilePage/>
    </Layout>
  );
};

export default page;
