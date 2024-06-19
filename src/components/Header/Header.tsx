import Link from "next/link";
import { useState } from "react";
import { FaRegUser, FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { IHeaderLink } from "@/types/Header";
import { MobileHeader } from "./MobileHeader";

const headerLinks: IHeaderLink[] = [
  {
    id: 1,
    title: "Beats",
    path: "/beats",
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
  },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="w-full ">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="md:hidden flex items-center text-3xl"
            onClick={toggleMobileMenu}
          >
            {!isMobileMenuOpen ? <FaBars /> : <FaTimes />}
          </button>

          <Link href="/" className="text-3xl font-bold">
            talllorenc
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-8">
            {headerLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-[#F19CBB] transition-all duration-200 text-xl font-medium"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/cart" className="flex items-center gap-2">
            <FaCartPlus className="text-xl" />
            <p className="font-bold">$0.00</p>
          </Link>

          <Link
            href="/login"
            className="transition-all duration-200  bg-[#F19CBB] text-white font-bold hover:shadow-buttonPinkBrick shadow-buttonBlack flex items-center gap-2 rounded px-4 py-1"
          >
            <FaRegUser className="text-xl" />
            <p className="font-bold">Log in </p>
          </Link>
        </div>
        {/* <nav className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {headerLinks.map((link) => (
              <li key={link.id} className="hover:text-[#F19CBB] transition-all duration-200">
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 border-l border-gray-500">
            <Link
              href="/cart"
              className="flex items-center gap-2 px-4"
            >
              <FaCartPlus className="text-xl" />
              <p className="font-bold">$0.00</p>
            </Link>

            <Link
              href="/login"
              className="transition-all duration-200  bg-[#F19CBB] text-white font-bold hover:shadow-buttonPinkBrick shadow-buttonBlack flex items-center gap-2 rounded px-4 py-1"
            >
              <FaRegUser className="text-xl" />
              <p className="font-bold">Log in </p>
            </Link>
          </div>
        </nav> */}

        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </header>
  );
}
