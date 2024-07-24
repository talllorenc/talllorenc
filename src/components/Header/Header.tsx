"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IMenuLink } from "@/types/Menus";
import MobileHeader from "./MobileHeader";
import AuthButton from "../AuthButton/AuthButton";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const headerLinks: IMenuLink[] = [
  {
    id: 1,
    title: "Solutions",
    path: "/solutions",
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 bg-white/10 dark:bg-black/10 backdrop-blur z-50 `}
    >
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-end gap-8">
          <Link
            href="/"
            className="text-3xl font-bold hover:scale-90 transition-all duration-200"
          >
            TALLLORENC
          </Link>

          <nav className="hidden md:flex text-[#d3d3d3]">
            <ul className="flex items-end gap-6">
              {headerLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-[#f31260] transition-all duration-200"
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <ThemeSwitcher />
          <AuthButton closeMobileMenu={closeMobileMenu} />
        </div>

        <button
          className="md:hidden flex items-center text-3xl"
          onClick={toggleMobileMenu}
        >
          {!isMobileMenuOpen ? <FaBars /> : <FaTimes />}
        </button>

        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
