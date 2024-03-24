import Avatar from "./Avatar";

const ChatMessage = ({ is_receiver, is_sender, text }) => {
  return (
    <>
      {is_receiver && (
        <div className="w-full flex justify-start">
          <div className="min-w-[320px] flex border border-gray-200 rounded-3xl p-2">
            <div className="w-full flex items-center gap-2 ">
              <div className="relative min-w-8">
                <Avatar src={"/logo.png"} type={"sm"} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col flex-grow">
                  <div className="">
                    <span className="text-gray-900 font-semibold">Enspire</span>
                  </div>
                  <div className="text-sm text-justify text-gray-500">
                    {text}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-secondary text-sm">12:25</span>
            </div>
          </div>
        </div>
      )}
      {is_sender && (
        <div className="w-full flex justify-end">
          <div className="min-w-[320px] flex items_center border border-gray-200 rounded-3xl p-2 bg-green-50">
            <div className="w-full flex items-center gap-2 ">
              <div className="relative min-w-8">
                <Avatar src={"/logo.png"} type={"sm"} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col flex-grow">
                  <div className="">
                    <span className="text-gray-900 font-semibold">Enspire</span>
                  </div>
                  <div className="text-sm text-justify text-gray-500">
                    {text}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <span className="text-secondary text-sm">12:25</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMessage;
