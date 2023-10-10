"use client"
import React from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

const SigninButton = () => {
  const { data: session } = useSession();
  if(session && session.user){
    return(
        <div className="flex gap-1 ml-auto items-center">
            <p className="border-l-[2px] px-[10px]">{session.user.name}</p>
            <button onClick={()=> signOut()} className="bg-red-600 flex rounded px-[8px] py-[4px]">
              <Image src="/navbar/logout.png" width={25} height={25} alt="logout icon"/>
            </button>
        </div>
    )
  }
  return (
    <button onClick={()=>signIn()} className="border-[2px] border-[#A11B3F] rounded-lg p-1 hover:border-[#F75380]">
        Sign in
    </button>
  )
};

export default SigninButton;
