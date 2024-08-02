import { auth } from "../../../auth";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaUnlock,
  FaArrowAltCircleRight,
  FaInfoCircle,
} from "react-icons/fa";
import LogoutButton from "../AuthButton/LogoutButton/LogoutButton";
const UserInfo = async () => {
  const session = await auth();
  console.log(session);
  
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-center p-8 rounded-lg shadow-buttonBlue">
        <div className="flex items-center gap-8">
          <Image
            src={session?.user?.image || "/auth/no-user.png"}
            alt="Profile"
            width={200}
            height={200}
            className="rounded-md [background:linear-gradient(45deg,#f31260,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col ">
              <div className="flex items-center gap-2 text-[#41b6de] text-md">
                <FaUser />
                <p className="font-bold">Name</p>
              </div>
              <p className="rounded-xl">{session?.user?.name}</p>
            </div>

            <div className="flex flex-col ">
              <div className="flex items-center gap-2 text-[#41b6de] text-md">
                <FaEnvelope />
                <p className="font-bold">Email</p>
              </div>
              <p className="rounded-xl">{session?.user?.email}</p>
            </div>

            <div className="flex flex-col ">
              <div className="flex items-center gap-2 text-[#41b6de] text-md">
                <FaUnlock />
                <p className="font-bold">Role</p>
              </div>
              <p className="rounded-xl">{session?.user?.role}</p>
            </div>
          </div>
        </div>

        <LogoutButton />
      </div>

      <div className="max-w-xl mx-auto p-2 rounded-lg shadow-buttonGreen flex items-center justify-between gap-4">
        <div className="">
          <FaInfoCircle className="text-4xl text-green-500" />
        </div>

        <span className="text-green-500 text-center">
          If you want to increase your privileges to add content to the site or
          manage it, please contact the site administrator.
        </span>

        <Link
          href="/contact"
          className="rounded-full transition duration-200 hover:scale-90"
        >
          <FaArrowAltCircleRight className="text-4xl text-green-500 " />
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
