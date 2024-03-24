import Base from "@/components/base";
import ChatContainer from "@/components/page_components/chatContainer";
import Messages from "@/components/page_components/message";
import { useStateProvider } from "@/context/StateContext";

const MessagesPage = () => {
  const [{ isChatOpened }, dispatch] = useStateProvider();

  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        {isChatOpened ? (
          ""
        ) : (
          <div
            className={`w-full flex border-r border-r-gray-200  custom-scrollbar`}
          >
            <Messages />
          </div>
        )}
        <div className={`w-full ${isChatOpened ? "flex" : "hidden"}  md:flex lg:flex `}>
          {isChatOpened ? (
            <ChatContainer />
          ) : (
            <div className="w-full flex justify-center items-center">
              <span className="text-gray-900 font-semigold text-xl">
                Select a message
              </span>
            </div>
          )}
        </div>
      </div>
    </Base>
  );
};

export default MessagesPage;
