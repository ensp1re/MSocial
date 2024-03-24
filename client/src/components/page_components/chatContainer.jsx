import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdAddCircleOutline, MdArrowRight } from "react-icons/md";
import Avatar from "../Avatar";
import { FaEllipsisH } from "react-icons/fa";
import Input from "../input";
import Button from "../Button";
import { BiImage } from "react-icons/bi";
import ChatMessage from "../ChatMessage";
import { useEffect, useRef } from "react";

const ChatContainer = () => {
  const messageEndRef = useRef(null);

  const [{}, dispatch] = useStateProvider();

  const handleOpenChat = () => {
    dispatch({
      type: reducerCases.IS_CHAT_OPENED,
    });
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full sticky top-0 flex justify-between items-center p-2 border-b border-b-gray-200 bg-white bg-opacity-95">
        <div className="flex items-center">
          <div
            onClick={handleOpenChat}
            className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110"
          >
            <AiOutlineArrowLeft className="text-3xl p-1" />
          </div>
          <div className="flex flec-col">
            <div className="w-full flex gap-3 justify-between text-xl rounded-3xl p-2 items-center">
              <div className="flex flex-row gap-2">
                <div>
                  <Avatar src="/logo.png" type={"sm"} />
                </div>
                <div className="flex flex-col text-sm">
                  <span className=" text-gray-600 font-semibold">Enspire</span>
                  <span className="text-secondary">@enspire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110">
          <FaEllipsisH className="text-3xl p-1 text-gray-500" />
        </div>
      </div>
      <div
        className="w-full flex flex-col flex-grow justify-between"
        style={{ height: "calc(103vh - 100px)" }}
      >
        <div className="w-full flex-grow overflow-auto custom-scrollbar">
          <div className="w-full flex flex-col px-10 mt-2 gap-2">
            <ChatMessage is_receiver={true} text={"Hello"} time={"12:25"} />
            <ChatMessage is_sender={true} text={"HI"} time={"12:25"} />
            <ChatMessage is_receiver={true} text={"Hello"} time={"12:25"} />
            <ChatMessage is_sender={true} text={"HI"} time={"12:25"} />
            <ChatMessage is_receiver={true} text={"Hello"} time={"12:25"} />
            <ChatMessage is_sender={true} text={"HI"} time={"12:25"} />
            <ChatMessage is_receiver={true} text={"Hello"} time={"12:25"} />
            <ChatMessage is_sender={true} text={"HI"} time={"12:25"} />
            <ChatMessage is_receiver={true} text={"Hello"} time={"12:25"} />
            <ChatMessage is_sender={true} text={"HI"} time={"12:25"} />
            <div ref={messageEndRef}/>
          </div>
        </div>

        <div className="w-full p-1 z-50 bottom-0 flex flex-row items-center border-t border-t-gray-200">
          <div className="p-1 text-xl rounded-full hover:bg-green-100 transition duration-200 cursor-pointer">
            <BiImage className="text-green-500" />
          </div>
          <div className="w-full flex items-center justify-between ">
            <div className="w-full">
              <Input text={"Send a message"} />
            </div>
            <div>
              <Button text={"Send"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
