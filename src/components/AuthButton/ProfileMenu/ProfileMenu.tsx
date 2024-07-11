import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import { IMenuLink } from "@/types/Menus";
import { useSession } from "next-auth/react";
import { FaRegUser, FaTimes } from "react-icons/fa";

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
];

export function ProfileMenu({ isMenuOpen, closeMenu }: IMobileHeaderProps) {
  const { data: session } = useSession();
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="right-4 fixed top-[68px] backdrop-blur bg-black text-white dark:bg-white p-4 dark:text-black rounded-xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full">
              <p className="font-bold">Profile</p>
              <FaTimes onClick={closeMenu} className="text-xl cursor-pointer hover:text-zinc-700 transition-all duration-200"/>
            </div>

            <nav className="flex items-center gap-4">
              <ul className="flex items-center gap-8">
                {profileMenuLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="px-4 py-1 border-b transition-all duration-200 hover:border-zinc-700"
                    >
                      {link.title}
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
