import Base from "@/components/base";
import Notification from "@/components/page_components/notification";
import RightSide from "@/components/page_components/rightSide";




const NotificationsPage = () => {
  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex border-r border-r-gray-200">
          <Notification />
        </div>
        <div className="w-full hidden md:flex lg:flex ">
          <RightSide search={true} />
        </div>
      </div>
    </Base>
  );
};

export default NotificationsPage;
