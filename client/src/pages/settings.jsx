import Base from "@/components/base";
import SettingsPanel from "@/components/page_components/SettingsPanel";
import Profile from "@/components/page_components/profile";
import RightSide from "@/components/page_components/rightSide";
import Setting from "@/components/page_components/setting";
import { useStateProvider } from "@/context/StateContext";

const SettingsPage = () => {

  const [{ isTypeSetting }, dispatch] = useStateProvider();

  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        {isTypeSetting ? (
          ""
        ) : (
          <div
            className={`w-full flex border-r border-r-gray-200  custom-scrollbar`}
          >
            <SettingsPanel />
          </div>
        )}
        <div
          className={`w-full ${isTypeSetting ? "flex" : "hidden"}  md:flex lg:flex `}
        >
          {isTypeSetting ? (
            <Setting />
          ) : (
            <div className="w-full flex justify-center items-center">
              <span className="text-gray-900 font-semigold text-xl">
                Select a setting
              </span>
            </div>
          )}
        </div>
      </div>
    </Base>
    // <Base>
    //   <div className="w-full h-screen flex flex-row">
    //     <div className="w-full flex border-r border-r-gray-200">
    //       <SettingsPanel />
    //     </div>
    //     <div className="w-full hidden md:flex lg:flex mx-10">
    //       <Setting />{" "}
    //     </div>
    //   </div>
    // </Base>
  );
};

export default SettingsPage;
