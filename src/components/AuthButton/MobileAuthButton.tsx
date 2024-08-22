import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MobileProfileMenu from "./ProfileMenu/MobileProfileMenu";
import useAuth from "@/hooks/useAuth";
import MountedSpinner from "../ui/MountedSpinner";
import SignOutButton from "./SignOutButton/SignOutButton";

const MobileAuthButton = () => {
  const { user, isPending, isSuccess } = useAuth();

  return (
    <div>
      {isPending ? (
        <div className="flex justify-center items-center h-full">
          <MountedSpinner/>
        </div>
      ) : isSuccess && user ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="font-bold text-[#41b6de]">{user.email}</p>
            <Image
              src={user.image || "/no-user.png"}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>

          <MobileProfileMenu />

          <SignOutButton/>
        </div>
      ) : (
        <Link
          href="/sign-in"
          className="transition-all duration-200 rounded-md border-0 bg-[#41b6de] text-white font-bold hover:shadow-buttonBlueBrick shadow-buttonBlue flex items-center justify-center gap-2 rounded px-4 py-2"
        >
          <FaRegUser className="text-2xl text-xl" />
          <p className="font-bold">Log in</p>
        </Link>
      )}
    </div>
  );
};

export default MobileAuthButton;
