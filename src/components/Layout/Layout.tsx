"use client";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col py-[68px]">
      <main className="flex-1 flex flex-col">
        <section className="flex-1 container xs:py-16 sm:py-16 lg:py-20">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
