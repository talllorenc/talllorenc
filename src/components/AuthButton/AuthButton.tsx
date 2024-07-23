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
          className="transition-all duration-200 border-4 border-[#41b6de] rounded-full hover:scale-110"
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
          className="transition-all duration-200 rounded-md border-0 bg-[#41b6de] text-white font-bold hover:shadow-buttonBlueBrick shadow-buttonBlue flex items-center justify-center gap-2 rounded px-4 py-2"
        >
          <FaRegUser className="text-2xl text-xl" />
          <p className="font-bold">Log in </p>
        </Link>
      )}

      <ProfileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}
