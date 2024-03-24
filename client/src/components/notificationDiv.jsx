import Link from "next/link";
import Avatar from "./Avatar";

const NotificationDiv = ({ sender, text, type, link }) => {
  return (
    <div className="w-full border border-gray-200 hover:bg-green-50 cursor-pointer transition duration-200">
      <div className="w-full flex flex-row justify-between p-3">
        <div className="w-full flex justify-start items-center gap-2">
          <div className="relative">
            <Avatar src={"/logo.png"} type={"sm"} />
          </div>
          <div className="flex gap-1 text-sm">
            <span className="text-gray-900 font-semibold">{sender}</span>
            <span className="text-secondary">{text}</span>
            <Link href={"#"} className="text-secondary hover:underline hover:text-gray-600 transition duration-200">{type}</Link>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <span className="text-sm text-secondary">12:25</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationDiv;
