import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

export function AuthButton() {
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
      {session ? (
        <button
          onClick={toggleMenu}
          className="transition-all duration-200 border-4 border-[#F19CBB] rounded-full"
        >
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
        </button>
      ) : (
        <Link
          href="/login"
          className="transition-all duration-200  bg-[#F19CBB] text-white font-bold hover:shadow-buttonPinkBrick shadow-buttonBlack flex items-center gap-2 rounded px-4 py-1"
        >
          <FaRegUser className="text-xl" />
          <p className="font-bold">Log in </p>
        </Link>
      )}

      <ProfileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu}/>
    </div>
  );
}
