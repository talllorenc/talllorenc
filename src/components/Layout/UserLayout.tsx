"use client";

import ProfileMenuLeft from "../Menu/ProfileMenuLeft";

type PropsType = {
  children: React.ReactNode;
};

const UserLayout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col py-[68px]">
      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex justify-between gap-8 container xs:py-16 sm:py-16 lg:py-20">
          <div className="max-w-xs w-full hidden lg:block">
            <ProfileMenuLeft />
          </div>
          <div className="flex-1">{children}</div>
        </section>
      </main>
    </div>
  );
};

export default UserLayout;
