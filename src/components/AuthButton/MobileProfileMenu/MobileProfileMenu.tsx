import { IUserMenuLink } from "@/types/Menus";
import Link from "next/link";
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

export function MobileProfileMenu() {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        {mobileHeaderLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              className="flex justify-between items-center text-lg "
            >
              <p>{link.title}</p>
              <FaAngleDoubleRight />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
