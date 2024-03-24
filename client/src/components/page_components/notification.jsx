import { MdAddCircleOutline } from "react-icons/md";
import NotificationDiv from "../notificationDiv";

const Notification = () => {
  return (
    <div className="w-full h-full overflow-auto custom-scrollbar">
      <div className="w-full sticky top-0 z-50 flex justify-between items-center p-2 border-b border-b-gray-200 bg-white bg-opacity-95">
        <div className="">
          <span className="text-gray-800 font-semibold text-lg">Notifications</span>
        </div>
        <div className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110">
          <MdAddCircleOutline className="text-3xl p-1" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-3 ">
        <div className="w-full flex flex-col gap-2">
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
            <NotificationDiv sender={"McLovin'"} text={"liked your"} type={"post"}/>
        </div>
      </div>
    </div>
  );
};

export default Notification;
