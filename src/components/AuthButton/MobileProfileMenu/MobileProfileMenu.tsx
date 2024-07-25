import { IUserMenuLink } from "@/types/Menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDoubleRight } from "react-icons/fa";

const mobileHeaderLinks: IUserMenuLink[] = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Settings",
    path: "/settings",
  },
];

const MobileProfileMenu = () => {
  const router = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {mobileHeaderLinks.map((link) => {
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
    </nav>
  );
};

export default MobileProfileMenu;
