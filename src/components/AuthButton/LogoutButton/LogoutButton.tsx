import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 transition-all text-white bg-[#f31260] duration-200 border-2 border-[#f31260] px-2 py-1 rounded-md hover:shadow-buttonRedBrick"
    >
      <FaSignOutAlt />
      <p className="">Log out</p>
    </button>
  );
}

export default LogoutButton;
