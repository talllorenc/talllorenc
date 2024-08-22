import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import useAuth from "@/hooks/useAuth";
import MountedSpinner from "../ui/MountedSpinner";

interface IAuthButtonProps {
  closeMobileMenu: () => void;
}

const AuthButton = ({ closeMobileMenu }: IAuthButtonProps) => {
  const { user, isPending, isSuccess, isError } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  if (isPending) {
    return (
      <MountedSpinner/>
    );
  }

  if (isSuccess && user) {
    return (
      <div className="relative">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <Image
            src={user.image || "/no-user.png"}
            alt={user.name || "User avatar"}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-bold">{user.name}</p>
        </div>
        <ProfileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    );
  }

  return (
    <Link
      href="/sign-in"
      className="transition-all duration-200 rounded-md border-0 bg-[#41b6de] text-white font-bold hover:shadow-buttonBlueBrick shadow-buttonBlue flex items-center justify-center gap-2 rounded px-4 py-2"
      onClick={closeMobileMenu}
    >
      <FaRegUser className="text-2xl text-xl" />
      <p className="font-bold">Log in</p>
    </Link>
  );
};

export default AuthButton;
