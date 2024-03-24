import Base from "@/components/base";
import Profile from "@/components/page_components/profile";
import RightSide from "@/components/page_components/rightSide";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex border-r border-r-gray-200">
          <Profile />
        </div>
        <div className="w-full hidden md:flex lg:flex ">
          <RightSide search={true}/>
        </div>
      </div>
    </Base>
  );
};

export default ProfilePage;
