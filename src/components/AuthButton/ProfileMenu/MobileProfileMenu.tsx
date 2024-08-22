import { IUserMenuLink } from "@/types/Menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";
import SignOutButton from "../SignOutButton/SignOutButton";

const mobileHeaderLinks: IUserMenuLink[] = [
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

const MobileProfileMenu = () => {
  const router = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {mobileHeaderLinks.map((link: IUserMenuLink) => {
          const isActive = router === link.path;
          return (
            <li
              key={link.id}
              className={`flex justify-between items-center text-lg ${
                isActive ? "text-[#41b6de]" : ""
              }`}
            >
              <Link href={link.path}>
                {link.title}
              </Link>
              <FaAngleDoubleRight />
            </li>
          );
        })}
      </ul>
      <SignOutButton/>
    </nav>
  );
};

export default MobileProfileMenu;
