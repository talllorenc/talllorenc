import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IMenuLink } from "@/types/Menus";
import { FaAngleDoubleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface IMobileHeaderProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const profileMenuLinks: IMenuLink[] = [
  {
    id: 1,
    title: "Profile",
    path: "/user",
  },
  {
    id: 2,
    title: "Dashboard",
    path: "/user/dashboard",
  },
  {
    id: 3,
    title: "Settings",
    path: "/user/settings",
  },
];

const ProfileMenu = ({ isMenuOpen, closeMenu }: IMobileHeaderProps) => {
  const router = usePathname();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="right-4 border border-[#41b6de] bg-[#f4f6f8] dark:bg-[#2c394a] fixed top-[75px] w-[250px] backdrop-blur p-4 rounded-lg"
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
              <ul className="flex flex-col gap-6">
                {profileMenuLinks.map((link: IMenuLink) => {
                  const isActive = router === link.path;
                  return (
                    <li
                      key={link.id}
                      className={`flex justify-between items-center hover:text-[#41b6de] transition-all duration-200 ${
                        isActive ? "text-[#41b6de]" : ""
                      }`}
                    >
                      <Link href={link.path}>{link.title}</Link>
                      <FaAngleDoubleRight/>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div>LOGOUT</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
