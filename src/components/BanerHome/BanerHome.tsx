import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
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
        <h1 className={`text-7xl md:text-9xl font-bold ${dansing.className}`}>
          Talllorenc
        </h1>
        <span className={`text-2xl md:text-4xl  font-bold text-[#f31260]`}>
          DEV.
        </span>
      </div>

      <div className="flex gap-8 items-center mt-12">
        <a
          href="#"
          className="transition-all duration-200  hover:scale-90 rounded-full"
          target="_blank"
        >
          <Image
            src="/SotialsIcons/telegram.png"
            alt="telegram"
            width={40}
            height={40}
            className=""
          />
        </a>
        <a
          href="#"
          className="transition-all duration-200  hover:scale-90 rounded-full"
          target="_blank"
        >
          <Image
            src="/SotialsIcons/google.png"
            alt="google"
            width={40}
            height={40}
          />
        </a>
        <a
          href="#"
          className="transition-all duration-200  hover:scale-90 rounded-full"
          target="_blank"
        >
          <Image
            src="/SotialsIcons/instagram.png"
            alt="instagram"
            width={40}
            height={40}
          />
        </a>
        <a
          href="#"
          className="transition-all duration-200  hover:scale-90 rounded-full"
          target="_blank"
        >
          <Image
            src="/SotialsIcons/github.png"
            alt="github"
            width={40}
            height={40}
          />
        </a>
      </div>

      <div>
        <p className="mt-12 text-center text-base text-default-500">
          © {new Date().getFullYear()} dev by talllorenc. Kazakhstan, Karaganda. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default BanerHome;
