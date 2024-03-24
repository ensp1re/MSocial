import { MdFiberManualRecord } from "react-icons/md";
import Avatar from "./Avatar";
import Button from "./Button";

const ChatUser = ({
  username,
  nickname,
  lastMessage,
  avatar,
  isSeen,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isSeen ? "" : "bg-gray-100"} w-full flex flex-row gap-3 justify-between text-xl p-2 hover:bg-green-50 transition duration-150 cursor-pointer`}
    >
      <div className=" flex w-[10%] items-start">
        <Avatar src={avatar} type={"md"} />
      </div>
      <div className="w-[90%] gap-1 flex flex-col">
        <div className="w-full flex justify-between">
          <div className="w-full flex justify-between items-center">
            <div className="w-full flex flex-row text-sm gap-2">
              <span className=" text-gray-600 font-semibold">{nickname}</span>
              <span className="text-secondary">@{username}</span>
            </div>
            {!isSeen && (
              <div className="p-1">
                <MdFiberManualRecord className="text-sm text-green-500" />
              </div>
            )}
          </div>
        </div>
        <div
          className={`text-sm text-gray-500 ${isSeen ? "" : "font-semibold"}`}
        >
          {lastMessage}
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
