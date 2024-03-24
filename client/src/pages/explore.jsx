import Base from "@/components/base";
import Explore from "@/components/page_components/exploreSide";
import RightSide from "@/components/page_components/rightSide";






const ExplorePage = () => {
  return (
    <Base>
      <div className="w-full h-screen flex flex-row">
        <div className="w-full flex border-r border-r-gray-200">
          <Explore />
        </div>
        <div className="w-full hidden md:flex lg:flex">
          <RightSide search={false}/>
        </div>
      </div>
    </Base>
  );
};

export default ExplorePage;
