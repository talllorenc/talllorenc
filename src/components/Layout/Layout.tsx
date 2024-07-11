"use client";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className="flex-1 flex flex-col py-[52px]">
      <main className="flex-1 flex flex-col">
        <section className="flex-1 container">{children}</section>
      </main>
    </div>
  );
};

export default Layout;
