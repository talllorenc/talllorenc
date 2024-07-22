export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between h-screen gap-8">
      <div
        className="hidden lg:block bg-cover bg-center bg-no-repeat w-3/5 flex items-center justify-center rounded-r-3xl  shadow-buttonRedBrick"
        style={{ backgroundImage: "url('/main-logo3.png')" }}
      ></div>
      {children}
    </div>
  );
}
