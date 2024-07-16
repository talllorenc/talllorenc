import { auth } from "../../../auth";

const Middleware = async () => {
  const session = await auth();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Middleware page</h1>
      <p>{session?.user?.name}</p>
    </div>
  );
};

export default Middleware;
