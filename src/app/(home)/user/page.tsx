import UserLayout from "@/components/Layout/UserLayout";
import ProfilePage from "@/components/Pages/ProfilePage";


const page = async () => {

  return (
    <UserLayout>
      <ProfilePage/>
    </UserLayout>
  );
};

export default page;
