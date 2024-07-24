import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleButton =() => {
  return (
    <div
      onClick={() => signIn("google", { redirectTo: "/" })}
      className="flex items-center justify-center gap-4 bg-[#ebf5fe] p-2 rounded-md w-full hover:bg-[#b0cde7] hover:cursor-pointer"
    >
      <Image
        src="/SotialsIcons/google.png"
        width={25}
        height={25}
        alt="google"
      />
      <p className="font-bold text-[#232323]">Sign in with Google</p>
    </div>
  );
}

export default GoogleButton