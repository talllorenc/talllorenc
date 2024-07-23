import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LogoutButton from "./LogoutButton/LogoutButton";
import { MobileProfileMenu } from "./MobileProfileMenu/MobileProfileMenu";

export function MobileAuthButton({}) {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center ">
            <p className="font-bold text-[#41b6de]">{session?.user?.email}</p>
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
                src="/Auth/no-user.png"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>

          <MobileProfileMenu />

          <LogoutButton />
        </div>
      ) : (
        <Link
          href="/login"
          className="transition-all duration-200 rounded-md border-0 bg-[#41b6de] text-white font-bold hover:shadow-buttonBlueBrick shadow-buttonBlue flex items-center justify-center gap-2 rounded px-4 py-2"
        >
          <FaRegUser className="text-2xl text-xl" />
          <p className="font-bold">Log in </p>
        </Link>
      )}
    </div>
  );
}
