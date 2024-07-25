import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const BanerHome = () => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <Link
        href="/about"
        className="flex items-center text-xs rounded-lg transition-all duration-200 shadow-buttonRed hover:shadow-buttonRedBrick"
      >
        <p className="bg-[#f31260] text-white px-2 py-1 rounded-lg font-bold">
          talllorenc.kz
        </p>
        <div className="flex items-center gap-1 px-4">
          <p>About service</p>
          <FaAngleDoubleRight />
        </div>
      </Link>

      <div className="flex items-end mt-12">
        <h1 className={`text-9xl font-bold ${dansing.className}`}>Tallorenc</h1>
        <span className={`text-4xl  font-bold text-[#f31260]`}>DEV.</span>
      </div>


    </div>
  );
};

export default BanerHome;
