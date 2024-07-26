import { auth } from "../../../../auth";

const UserdPage = async () => {
  const session = await auth();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>UserdPage page</h1>
      <p>{session?.user?.name}</p>
    </div>
  );
};

export default UserdPage;
