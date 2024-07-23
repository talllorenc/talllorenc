"use client";

type PropsType = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: PropsType) => {
  return (
    <div className="flex items-center justify-center flex-1 p-4">
        {children}
    </div>
  );
};

export default AuthLayout;
