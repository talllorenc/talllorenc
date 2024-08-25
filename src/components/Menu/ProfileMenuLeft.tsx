import { IMenuLink } from "@/types/Menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";


const profileMenuLinks: IMenuLink[] = [
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
];

const ProfileMenuLeft = () => {
  const router = usePathname();

  return (
    <div className="bg-bgLight dark:bg-bgDark shadow-buttonBlue rounded-xl">
      {profileMenuLinks.map((link) => (
        <Link key={link.id} href={link.path}>
          <div
            className={`flex items-center justify-between gap-2 p-4 hover:text-[#41b6de] transition duration-200 ${
              router === link.path ? "text-[#41b6de]" : ""
            }`}
          >
            <span>{link.title}</span>
            <IoIosArrowForward/>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProfileMenuLeft;
