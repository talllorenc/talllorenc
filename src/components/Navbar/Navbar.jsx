"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SigninButton from "@/components/SigninButton/SigninButton";
import { useState } from "react";

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
    title: "Records",
    url: "/recordsPage",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-2 backdrop-blur bg-opacity-50 z-50">
      <div className="flex justify-between items-center z-999">
        <Link href="/">
          <span>TALLLORENC</span>
        </Link>
        <div className="in:hidden">
          <button onClick={toggleMenu}>
            <Image
              src="/navbar/burger-menu.png"
              width={40}
              height={40}
              alt="Menu"
            />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex flex-col" : "hidden"
          } items-center justify-center top-full left-0 w-full absolute bg-black backdrop-blur in:hidden`}
        >
          <div className="flex flex-col in:flex-row gap-[20px] items-center p-4 in:p-0">
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
                <span
                onClick={closeMenu}
                  className={`hover:text-[#9C9C9C] ${
                    pathname === link.url
                      ? "border-b-2 border-[#F75380] text-[#9C9C9C]"
                      : ""
                  }`}
                >
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
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
            <div className="flex gap-[10px] mb-4">
              <SigninButton />
            </div>
          </div>
        </div>
        <div className="hidden in:flex gap-[15px] items-center">
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
                <span>{link.title}</span>
                
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
            <SigninButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
