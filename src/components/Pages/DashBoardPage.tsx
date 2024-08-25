import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const DashBoardPage = () => {
  return (
    <div className="flex flex-col gap-8 shadow-buttonBlue p-4 rounded-xl bg-bgLight dark:bg-bgDark">
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>
        Dashboard
      </h1>
    </div>
  );
};

export default DashBoardPage;
