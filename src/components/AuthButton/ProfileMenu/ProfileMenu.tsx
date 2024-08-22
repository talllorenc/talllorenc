import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IMenuLink } from "@/types/Menus";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaCog } from "react-icons/fa";
import SignOutButton from "../SignOutButton/SignOutButton";
import useAuth from "@/hooks/useAuth";
import { Spinner } from "@nextui-org/react";
import MountedSpinner from "@/components/ui/MountedSpinner";

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
  const { user, isPending, isSuccess } = useAuth();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="right-4 fixed top-[75px] z-50 w-full max-w-xs"
          initial={{ opacity: 0, translateY: -20 }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, translateY: -20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col text-black overflow-auto rounded-xl shadow-buttonDark text-sm">
            <div className="flex items-center gap-4 bg-white p-4 rounded-t-xl border-b border-neutral-200">
              {isPending ? (
                <MountedSpinner/>
              ) : isSuccess && user ? (
                <>
                  <Image
                    src={user.image || "/no-user.png"}
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col overflow-hidden">
                    <p className="truncate font-medium">{user.email}</p>
                    <p className="truncate text-gray-500">{user.username}</p>
                  </div>
                </>
              ) : (
                <p className="text-gray-500">User not found</p>
              )}
            </div>

            <div className="flex flex-col bg-neutral-100 rounded-b-xl">
              <div className="flex flex-col border-b border-neutral-200">
                {profileMenuLinks.map((link) => (
                  <Link key={link.id} href={link.path} onClick={closeMenu}>
                    <div
                      className={`flex items-center gap-2 p-4 hover:bg-neutral-200 transition-colors ${
                        router === link.path ? "bg-neutral-300" : ""
                      }`}
                    >
                      <span>{link.title}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <SignOutButton />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileMenu;
