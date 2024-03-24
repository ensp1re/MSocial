import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";


const NavigateEl = ({ src, text, is_focused }) => {
  const router = useRouter();





  const [{}, dispatch] = useStateProvider();

  const handleRouterClick = useCallback(() => {
    if (text === "Home") {
      router.push("/");
    } else if (text === "Profile") {
      const routerProfileURL = `/profile/ensp1re`;
      router.push(routerProfileURL);
    } else if (text === "More") {
      dispatch({
        type: reducerCases.IS_MORE_OPEN,
      });
    } else {
      const urlName = `/${text.toLowerCase()}`;
      router.push(urlName);
    }
  }, [text]);

  return (
    <div
      onClick={handleRouterClick}
      className="flex gap-3 text-xl  rounded-3xl p-3 hover:bg-green-50 transition duration-150 cursor-pointer items-center w-11 lg:min-w-[220px]"
    >
      <span className="">{src}</span>
      <span
        className={`${is_focused ? "text-slate-900" : "text-slate-600"} hidden md:hidden sm:hidden lg:block`}
      >
        {text}
      </span>
    </div>
  );
};

export default NavigateEl;
