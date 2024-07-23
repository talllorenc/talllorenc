import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import { IMenuLink } from "@/types/Menus";
import { useSession } from "next-auth/react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";

interface IMobileHeaderProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const profileMenuLinks: IMenuLink[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Settings",
    path: "/settings",
  },
];

export function ProfileMenu({ isMenuOpen, closeMenu }: IMobileHeaderProps) {
  const { data: session } = useSession();
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="right-4 fixed md:top-[68px] w-[250px] backdrop-blur bg-[#232323] text-white p-4 rounded-xl shadow-buttonGrayBrick"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">

            <nav className="py-4 border-b border-gray-500">
              <ul className="flex flex-col gap-4">
                {profileMenuLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="flex justify-between items-center text-lg hover:bg-[#2b2b2b] p-2 rounded"
                    >
                      <p>{link.title}</p>
                      <FaAngleDoubleRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <LogoutButton />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProfileMenu;
