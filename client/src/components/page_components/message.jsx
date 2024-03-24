import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { AiOutlineMessage } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import Input from "../input";
import ChatUser from "../chatUser";

const Messages = () => {
  const [{}, dispatch] = useStateProvider();

  const handleOpenChat = () => {
    dispatch({
      type: reducerCases.IS_CHAT_OPENED,
    });
  };

  const dataFoundUsers = [
    {
      username: "enspire",
      avatar: "/logo.png",
      nickname: "Enspire",
      lastMessage: "Hi, follow me!",
    },
  ];

  return (
    <div className="w-full h-full overflow-auto custom-scrollbar">
      <div className="w-full sticky top-0 z-50 flex justify-between items-center p-2 border-b border-b-gray-200 bg-white bg-opacity-95">
        <div className="">
          <span className="text-gray-800 font-semibold text-lg">Messages</span>
        </div>
        <div className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110">
          <MdAddCircleOutline className="text-3xl p-1" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-3 ">
        <div className="w-full p-2">
          <Input text={"Search Direct Messages"} />
        </div>
        <div className="w-full mt-2">
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={true}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
            <ChatUser 
            username={dataFoundUsers[0].username}
            avatar={dataFoundUsers[0].avatar}
            nickname={dataFoundUsers[0].nickname}
            lastMessage={dataFoundUsers[0].lastMessage}
            isSeen={false}
            onClick={handleOpenChat}
            />
        </div>
      </div>
    </div>
  );
};

export default Messages;
