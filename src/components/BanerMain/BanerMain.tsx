"use client";

import Link from "next/link";
import Image from "next/image";
import { FaAngleDoubleRight, FaSearch } from "react-icons/fa";
import { usePathname } from 'next/navigation'

export function BanerMain() {
  const router = usePathname();
  const isHomePage = router === "/";
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[70vh] w-full flex items-center justify-center rounded-b-3xl  shadow-buttonRedBrick"
      style={{ backgroundImage: "url('/main-logo3.png')" }}
    >
      <div className="flex flex-col gap-8 items-center justify-center pt-12">
        <h1 className="hidden md:block text-5xl font-bold text-[#f31260]">WELCOME TO SAD FUN</h1>
        <div className="relative flex items-center ">
          <FaSearch className="absolute left-3 z-10 text-white" />
          <input
            type="text"
            placeholder="Type to search..."
            className="pl-10 pr-4 py-3 rounded-xl w-full transition-all duration-200 shadow-buttonRed backdrop-blur-2xl bg-transparent text-white hover:backdrop-blur-xl appearance-none focus:outline-none focus:ring-0 border-none peer"
          />
        </div>
        <Link
          href="/beats"
          className={`flex items-center gap-2 shadow-buttonRed bg-[#f31260] uppercase transition-all duration-200 px-6 py-3 font-bold rounded-md hover:shadow-buttonRedBrick ${isHomePage ? "text-white" : "dark:text-white"}`}
        >
          <FaAngleDoubleRight /> Buy beats
        </Link>
        <div className="flex gap-8 items-center">
          <a
            href="#"
            target="_blank"
            className="transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/SotialsIcons/telegram.png"
              width={40}
              height={40}
              alt="telegram"
            />
          </a>

          <a
            href="#"
            target="_blank"
            className="transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/SotialsIcons/instagram.png"
              width={40}
              height={40}
              alt="instagram"
            />
          </a>

          <a
            href="#"
            target="_blank"
            className="transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/SotialsIcons/google.png"
              width={40}
              height={40}
              alt="google"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
