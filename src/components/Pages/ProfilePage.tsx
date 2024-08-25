"use client";

import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Spinner from "../ui/Spinner";
import { FaCheckCircle } from "react-icons/fa";
import FormErrors from "../AuthForms/FormErrors";
import SignOutButton from "../AuthButton/SignOutButton/SignOutButton";
import { Dancing_Script } from "next/font/google";

const dansing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ProfilePage = () => {
  const { user, isPending, isError } = useAuth();

  if (isError) {
    return (
      <div className="flex items-center justify-center ">
        <FormErrors message="An error occurred" />
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Spinner height="100px" weight="100px" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 shadow-buttonBlue p-4 rounded-xl bg-bgLight dark:bg-bgDark">
      <h1 className={`text-6xl font-bold mb-8 ${dansing.className}`}>
        Profile
      </h1>
      <div className="flex justify-center md:justify-start items-center gap-4">
        <Image
          src={user?.image || "/no-user.png"}
          alt="User avatar"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold text-4xl">{user?.username}</p>
          <p>
            {user?.createdAt
              ? new Date(user.createdAt).toLocaleString("en-US")
              : "Date not available"}
          </p>
        </div>
      </div>

      <div className="flex gap-12 flex-wrap">
        <div className=" flex flex-col gap-2 max-w-max">
          <p className="font-bold border-b border-neutral-500 text-xl">
            Email address
          </p>
          <div className="flex flex-col">
            <p>{user?.email}</p>
            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
              {user?.verified && <p>Verified</p>} <FaCheckCircle />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 max-w-max">
          <p className="font-bold border-b border-neutral-500 text-xl">
            Your role on the portal
          </p>
          <p>User</p>
        </div>
      </div>

      <div className="">
        <SignOutButton />
      </div>
    </div>
  );
};

export default ProfilePage;
