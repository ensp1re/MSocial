import Base from "./base";
import Feed from "./page_components/feed";
import RightSide from "./page_components/rightSide";

const Main = () => {
  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex border-r border-r-gray-200">
          <Feed />
        </div>
        <div className="w-full hidden md:flex lg:flex ">
          <RightSide />
        </div>
      </div>
    </Base>
  );
};

export default Main;
