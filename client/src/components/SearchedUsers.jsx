import Avatar from "./Avatar";
import Button from "./Button";

const SearchedUsers = ({ username, nickname, bio, avatar }) => {
  return (
    <div className="w-full flex flex-row gap-3 justify-between text-xl p-2 hover:bg-green-50 transition duration-150 cursor-pointer">
      <div className="flex w-[10%] items-start">
        <Avatar src={avatar} type={"md"} />
      </div>
      <div className="w-[90%] gap-1 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col text-sm">
            <span className=" text-gray-600 font-semibold">{nickname}</span>
            <span className="text-secondary">@{username}</span>
          </div>
          <div className="text-gray-600">
            <Button text={"Follow"} />
          </div>
        </div>
        <div className="text-sm text-gray-500">{bio}</div>
      </div>
    </div>
  );
};

export default SearchedUsers;
