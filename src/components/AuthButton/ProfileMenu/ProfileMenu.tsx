import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import { IMenuLink } from "@/types/Menus";

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
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="right-4 bg-black fixed top-[68px] bg-black p-4 text-white rounded-xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <nav className="flex items-center gap-4">
              <ul className="flex items-center gap-8">
                {profileMenuLinks.map((link) => (
                  <li
                    key={link.id}
                  >
                    <Link href={link.path} className="px-4 py-2 hover:bg-neutral-700 transition-all duration-200 rounded">{link.title}</Link>
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
