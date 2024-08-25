import UserLayout from "@/components/Layout/UserLayout";
import DashBoardPage from "@/components/Pages/DashBoardPage";

const page = async () => {
  return (
    <UserLayout>
      <DashBoardPage/>
    </UserLayout>
  );
};

export default page;
