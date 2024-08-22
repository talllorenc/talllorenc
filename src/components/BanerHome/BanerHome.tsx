"use client";

import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import useAuth from "@/hooks/useAuth";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const BanerHome = () => {

  const { user, isPending, isSuccess } = useAuth();

  console.log(user);
  
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

      <div className="flex gap-8 items-center mt-4">
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

      <Link
        href="/solutions"
        className="[background:linear-gradient(45deg,#f31260,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border flex items-center gap-4 mt-12 transition-all duration-200 text-white px-6 py-3 font-bold rounded-md hover:shadow-buttonRedBrick"
      >
        Get started
        <FaAngleDoubleRight />
      </Link>

      <div className="mt-12">
        <p className=" text-center text-base text-default-500">
          © {new Date().getFullYear()} dev by A.L. Kazakhstan, Karaganda. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BanerHome;

