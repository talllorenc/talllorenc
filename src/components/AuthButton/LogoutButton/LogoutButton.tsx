import { signOut } from "next-auth/react";
import { FaRegUser, FaCartPlus, FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";


export function LogoutButton() {

  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-2 transition-all duration-200 border px-2 py-1 rounded-md hover:bg-red-700"
    >
      <p className="font-bold">Log out</p>
      <FaSignOutAlt/>
    </button>
  );
}

export default LogoutButton;
