import React from "react";
import GoogleButton from "./GoogleButton/GoogleButton";

const  AuthSocials = () => {
  return (
    <div className="flex flex-col gap-2 py-4">
      <div>
        <GoogleButton />
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="border-t border-neutral-300 flex-grow"></div>
        <span className="px-1 md:px-4 text-neutral-400 text-sm md:text-base uppercase">Or using email</span>
        <div className="border-t border-neutral-300 flex-grow"></div>
      </div>
    </div>
  );
}

export default AuthSocials

