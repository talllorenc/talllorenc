import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

interface IAuthButtonProps {
  closeMobileMenu: () => void;
}

export function AuthButton({ closeMobileMenu }: IAuthButtonProps) {
  const { data: session } = useSession();
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {session?.user ? (
        <button
          onClick={toggleMenu}
          className="transition-all duration-200 border-4 border-[#F19CBB] rounded-full"
        >
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <Image
              src='/Auth/no-user.png'
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </button>
      ) : (
        <Link
          onClick={closeMobileMenu}
          href="/login"
          className="transition-all duration-200 border-2 border-gray-500 rounded-xl md:border-0 md:bg-[#F19CBB] md:text-white font-bold md:hover:shadow-buttonPinkBrick md:shadow-buttonBlack flex items-center gap-2 md:rounded px-4 py-1"
        >
          <FaRegUser className="text-2xl md:text-xl" />
          <p className="hidden md:block font-bold">Log in </p>
        </Link>
      )}

      <ProfileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}
