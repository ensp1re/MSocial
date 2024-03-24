import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import { BiImage } from "react-icons/bi";
import { MdArrowRight, MdEmojiEmotions } from "react-icons/md";
import Button from "../Button";
import { FaEllipsisH } from "react-icons/fa";
import Post from "../post";

const Feed = () => {
  const [isFeed, setIsFeed] = useState(true);

  const handleFeed = () => {
    setIsFeed(true);
  };

  const handleFollowing = () => {
    setIsFeed(false);
  };

  return (
    <div className="w-full">
      <div className="w-full h-11 border-b border-b-gray-200 flex flex-row justify-between sticky top-0 bg-white bg-opacity-95 z-1">
        <div
          onClick={handleFeed}
          className="relative z-10 text-sm w-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition duration-200 text-gray-600"
        >
          <span
            className={`${isFeed ? "p-2 border-b-2 border-b-green-500 font-bold" : ""}`}
          >
            Feed
          </span>
        </div>
        <div
          onClick={handleFollowing}
          className="w-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition duration-200 text-gray-600"
        >
          <span
            className={`${isFeed ? "" : "p-2 border-b-2 border-b-green-500 font-bold"}`}
          >
            Following
          </span>
        </div>
      </div>
      <div className="w-full">
        {/* post */}
        <div className="w-full p-3 flex border-b border-b-gray-200 flex-row">
          <div className="">
            <Avatar src={"/logo.png"} type={"sm"} />
          </div>
          <form className="w-full flex flex-col">
            <div className="w-full relative p-1 border-b border-b-gray-200 mb-2">
              <textarea
                className="block  text-gray-800 w-full min-h-14 outline-none rounded-md bg-transparent border-transparent focus:bg-white disabled:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed resize-none"
                rows="1"
                placeholder="What's new?"
                onChange={(event) => {
                  event.target.style.height = "auto";
                  event.target.style.height = event.target.scrollHeight + "px";
                }}
              />
            </div>
            <div className="w-full flex">
              <div className="w-[80%] border-r border-r-gray-300 flex flex-row justify-start items-center gap-3">
                <div className="p-1 text-xl rounded-full hover:bg-green-100 transition duration-200 cursor-pointer">
                  <BiImage className="text-green-500" />
                </div>
                <div className="p-1 text-xl rounded-full hover:bg-green-100 transition duration-200 cursor-pointer">
                  <MdEmojiEmotions className="text-green-500" />
                </div>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <Button text={"Post"} />
              </div>
            </div>
          </form>
        </div>
        {/* feed */}
        <div className="flex w-full">
          <div className="flex">
            <div className="flex flex-col">
              <Post id={"id12"}/>
              <Post id={"id13"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
