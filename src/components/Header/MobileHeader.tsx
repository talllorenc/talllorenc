import React from "react";
import { IHeaderLink } from "@/types/Header";
import Link from "next/link";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface IMobileHeaderProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const headerLinks: IHeaderLink[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Beats",
    path: "/beats",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
];

export function MobileHeader({
  isMobileMenuOpen,
  closeMobileMenu,
}: IMobileHeaderProps) {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed top-0 left-0 w-full h-screen flex z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closeMobileMenu}
        >
          <motion.div
            className="bg-white w-[200px] fixed top-[68px] left-0 h-screen"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: isMobileMenuOpen ? 0 : "100%",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            exit={{ x: "-100%", opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col">
              {headerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className="text-md border-b p-4 font-bold"
                  onClick={closeMobileMenu}
                >
                  {link.title}
                </Link>
              ))}

              <div className="flex items-center flex gap-4 text-2xl mt-8 justify-center">
                <Link
                  href="/cart"
                  className="flex items-center border-2 border-gray-500 rounded-xl px-4 py-1"
                  onClick={closeMobileMenu}
                >
                  <FaCartPlus className="" />
                </Link>

                <Link
                  href="/login"
                  className="hover:-translate-y-1 transition-all duration-200 flex items-center border-2 border-gray-500 rounded-xl px-4 py-1"
                  onClick={closeMobileMenu}
                >
                  <FaRegUser className="" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
