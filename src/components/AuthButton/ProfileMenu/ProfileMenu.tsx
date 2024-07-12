import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import { IMenuLink } from "@/types/Menus";
import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";

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
          className="right-4 fixed md:top-[68px] backdrop-blur bg-[#232323] text-white p-4 rounded-xl shadow-buttonGrayBrick"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-4">
            <nav className="flex items-center gap-4">
              <ul className="flex items-center gap-8">
                {profileMenuLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.path}
                      className="px-4 py-1 transition-all rounded-lg duration-200 hover:bg-zinc-700"
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
