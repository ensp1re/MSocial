import Input from "../input";
import Suggested from "../suggested";

const RightSide = ({ search }) => {
  return (
    <div className="w-full flex flex-col p-3 gap-8 pr-5">
      {search && (
        <div className="flex max-w-[300px]">
          <Input />
        </div>
      )}

      <div className="max-w-[300px] flex flex-col rounded-3xl bg-gray-100">
        <div className="p-2 font-bold">Who to follow</div>
        <div className="flex flex-col items-center">
          <Suggested />
          <Suggested />
          <Suggested />
        </div>
        <div className="p-2 text-sm text-green-500 cursor-pointer hover:opacity-60 transition duration-200">
          Show more
        </div>
      </div>
    </div>
  );
};

export default RightSide;
