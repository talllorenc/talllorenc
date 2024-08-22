"use client";

import LinkButton from "../ui/LinkButton";
import { FaRegArrowAltCircleRight  } from "react-icons/fa";

type PropsType = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col py-[68px]">
      <main className="flex-1 flex flex-col">
        <section className="flex-1 container xs:py-16 sm:py-16 lg:py-20">
          {children}
          <div className="max-w-md mx-auto mt-4">
            <LinkButton
              href="/"
              text="Go back to the home page"
              icon={<FaRegArrowAltCircleRight  />}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;
