import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { AiOutlineKey, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import {
  MdAddCircleOutline,
  MdArrowRight,
  MdArrowRightAlt,
} from "react-icons/md";

const SettingsPanel = () => {
  const [{}, dispatch] = useStateProvider();

  return (
    <div className="w-full h-full overflow-auto custom-scrollbar">
      <div className="w-full sticky top-0 z-50 flex justify-between items-center p-2 border-b border-b-gray-200 bg-white bg-opacity-95">
        <div className="">
          <span className="text-gray-800 font-semibold text-lg">Settings</span>
        </div>
        <div className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110">
          <MdAddCircleOutline className="text-3xl p-1" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div
            onClick={() => {
              dispatch({
                type: reducerCases.IS_TYPE_SETTING,
                isTypeSetting: "accountInfo",
              });
            }}
            className="w-full flex flex-row justify-between p-3 text-sm text-gray-500 border-b border-b-gray-200 hover:bg-green-50 cursor-pointer transition duration-200 "
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-lg">
                <AiOutlineUser />
              </div>
              <div className="text-gray-600">Account information</div>
            </div>
            <div className="flex justify-center items-center">
              <MdArrowRight />
            </div>
          </div>
          <div
            onClick={() =>
              dispatch({
                type: reducerCases.IS_TYPE_SETTING,
                isTypeSetting: "changePassword",
              })
            }
            className="w-full flex flex-row justify-between p-3 text-sm text-gray-500 border border-gray-200 hover:bg-green-50 cursor-pointer transition duration-200 "
          >
            <div className="flex items-center justify-start gap-2">
              <div className="text-lg">
                <AiOutlineKey />
              </div>
              <div className="text-gray-600">Change your password</div>
            </div>
            <div className="flex justify-center items-center">
              <MdArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
