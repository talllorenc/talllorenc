import React from "react";
import GoogleButton from "./SotialsButtons/GoogleButton";

const SotialsAuth = () => {
  return (
    <div className="flex flex-col gap-8">
      <GoogleButton />

      <div className="flex items-center justify-center">
        <div className="border-t border-neutral-200 flex-grow"></div>
        <span className="px-1 md:px-4 text-neutral-400 text-sm md:text-base">
          or
        </span>
        <div className="border-t border-neutral-200 flex-grow"></div>
      </div>
    </div>
  );
};

export default SotialsAuth;
