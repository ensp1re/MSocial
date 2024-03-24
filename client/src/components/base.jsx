import Container from "./container";
import Sidepart from "./sidepart";

const Base = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-full flex flex-row">
        <div className="max-w-[500px] flex-grow hidden md:flex sm:flex lg:flex ">
          <Sidepart />
        </div>
        <div className="sticky z-50 overflow-auto flex-grow w-full flex custom-scrollbar">{children}</div>
      </div>
    </div>
  );
};

export default Base;
