import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

interface IAuthButtonProps {
  closeMobileMenu: () => void;
}

const AuthButton = ({ closeMobileMenu }: IAuthButtonProps) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Link
        href="/sign-in"
        className="transition-all duration-200 rounded-md border-0 bg-[#41b6de] text-white font-bold hover:shadow-buttonBlueBrick shadow-buttonBlue flex items-center justify-center gap-2 rounded px-4 py-2"
      >
        <FaRegUser className="text-2xl text-xl" />
        <p className="font-bold">Log in </p>
      </Link>

      <ProfileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default AuthButton;
