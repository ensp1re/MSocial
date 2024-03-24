import NavigateEl from "./navigateEl";
import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";
import { useStateProvider } from "@/context/StateContext";
import { useRouter } from "next/router";
import {
  AiFillBell,
  AiFillCompass,
  AiFillHome,
  AiFillMessage,
  AiOutlineBell,
  AiOutlineCompass,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { FaEllipsisH, FaUser } from "react-icons/fa";
import reducer from "@/context/StateReducers";
import { reducerCases } from "@/context/constants";

const Sidepart = () => {
  const router = useRouter();
  const [{ isMoreOpen }, dispatch] = useStateProvider();

  const currentPath = router.pathname;

  console.log(currentPath);

  const j = {
    H: [currentPath === "/" ? <AiFillHome /> : <AiOutlineHome />, "Home"],
    E: [
      currentPath === "/explore" ? <AiFillCompass /> : <AiOutlineCompass />,
      "Explore",
    ],
    N: [
      currentPath === "/notifications" ? <AiFillBell /> : <AiOutlineBell />,
      "Notifications",
    ],
    M: [
      currentPath === "/messages" ? <AiFillMessage /> : <AiOutlineMessage />,
      "Messages",
    ],
    P: [
      currentPath.includes("/profile") ? <FaUser /> : <AiOutlineUser />,
      "Profile",
    ],
    D: [<FaEllipsisH />, "More"],
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full sticky z-50 flex h-full border-r border-gray-200 p-2 min-w-20 lg:min-w-[260px] overflow-auto custom-scrollbar">
        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full p-3">
              <Link href="/">
                <Image src={"/logo.png"} width={45} height={45} />
              </Link>
            </div>
            {Object.entries(j).map(([key, value], index) => {
              return (
                <NavigateEl
                  key={index}
                  src={value[0]}
                  text={value[1]}
                  is_focused={true}
                />
              );
            })}
            {isMoreOpen && (
              <div className="fixed z-10 flex items-center justify-center top-2/3 ">
                <div className="flex  items-center justify-start w-50 h-20 bg-white shadow-lg border border-gray-700 border-opacity-30 rounded-lg">
                  <div
                    onClick={() => {
                      dispatch({type: reducerCases.IS_MORE_OPEN})
                      router.push("/settings");
                    }}
                    className="flex bg-white gap-3 text-xl min-w-[220px] rounded-3xl p-3 hover:bg-green-50 transition duration-150 cursor-pointer items-center"
                  >
                    <span className={"text-slate-900"}>Settings</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full flex gap-3 justify-between text-xl rounded-3xl p-2 hover:bg-green-50 transition duration-150 cursor-pointer items-center">
            <div className="flex gap-2">
              <Avatar src="/logo.png" type={"md"} />
              <div className="lg:flex flex-col text-sm hidden">
                <span className=" text-gray-600 font-semibold">Enspire</span>
                <span className="text-secondary">@enspire</span>
              </div>
            </div>

            <div className="text-gray-600 hidden lg:block">
              <FaEllipsisH />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidepart;
