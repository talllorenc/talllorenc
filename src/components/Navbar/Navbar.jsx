"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Импорт usePathname
import Image from "next/image";
import SigninButton from "@/components/SigninButton/SigninButton";

const links = [
  {
    id: 1,
    title: "About me",
    url: "/about",
  },
  {
    id: 2,
    title: "Playlist",
    url: "/playlist",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full p-2 backdrop-blur bg-opacity-50">
      <div className="flex justify-between items-center">
        <Link href="/">
          <span>TALLLORENC</span>
        </Link>
        <div className="flex gap-[15px] items-center">
          <div className="flex gap-[20px] items-center">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`hover:text-[#9C9C9C] ${
                  pathname === link.url
                    ? "border-b-2 border-[#F75380] text-[#9C9C9C]"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <button className="flex items-center border-[2px] border-orange-600 rounded-lg gap-1 p-1 hover:border-orange-500">
              <Image
                src="/navbar/dolar.png"
                width={24}
                height={24}
                alt="tips icon"
              />
            </button>
          </div>
          <div className="flex gap-[10px]">
            {/* <button className="bg-[#F75370] p-1 rounded-lg hover:bg-[#F75380]">Sign up</button>
            <button className="border-[2px] border-[#A11B3F] rounded-lg p-1 hover:border-[#F75380]">Log in</button> */}
            <SigninButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
