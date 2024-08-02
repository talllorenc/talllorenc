import React from "react";
import { IMenuLink } from "@/types/Menus";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import MobileAuthButton from "../AuthButton/MobileAuthButton";
import { usePathname } from "next/navigation";

interface IMobileHeaderProps {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const headerLinks: IMenuLink[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Tools",
    path: "/tools",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    title: "Solutions",
    path: "/solutions",
  },
];

const MobileHeader = ({
  isMobileMenuOpen,
  closeMobileMenu,
}: IMobileHeaderProps) => {
  const router = usePathname();
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed top-[68px] left-0 w-full h-screen flex z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={closeMobileMenu}
        >
          <motion.div
            className="w-full fixed top-[68px] left-0 h-screen z-20 dark:bg-gradient-to-r dark:from-black dark:to-slate-700 bg-gradient-to-r from-slate-300 to-white"
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: isMobileMenuOpen ? 0 : "-100%",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            exit={{ x: "100%", opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col text-black dark:text-white p-4 ">
              <div className="border-b border-gray-500 py-4">
                <MobileAuthButton />
              </div>

              <nav className="border-b border-gray-500 flex flex-col gap-4 py-4">
                <ul className="flex flex-col gap-4">
                  {headerLinks.map((link: IMenuLink) => {
                    const isActive = router === link.path;
                    return (
                      <li
                        key={link.id}
                        className={`flex justify-between items-center text-lg  ${
                          isActive ? "text-[#f31260]" : ""
                        }`}
                      >
                        <Link href={link.path} onClick={closeMobileMenu}>
                          <p>{link.title}</p>
                        </Link>
                        <FaAngleDoubleRight />
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="flex justify-between items-center text-lg py-4">
                <p>Theme</p>
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileHeader;
