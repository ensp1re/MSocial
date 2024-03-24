import { BiImage } from "react-icons/bi";
import Avatar from "../Avatar";
import { MdEmojiEmotions } from "react-icons/md";
import Button from "../Button";
import CommenteEl from "../CommenteEl";

const PostCommentSide = () => {
  return (
    <div className="w-full flex flex-col border-t border-t-gray-200">
      <div className="w-full p-3 flex border-b border-b-gray-200 flex-row">
        <div className="">
          <Avatar src={"/logo.png"} type={"sm"} />
        </div>
        <form className="w-full flex flex-col">
          <div className="w-full relative p-1 border-b border-b-gray-200 mb-2">
            <textarea
              className="block  text-gray-800 w-full min-h-14 outline-none rounded-md bg-transparent border-transparent focus:bg-white disabled:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed resize-none"
              rows="1"
              placeholder="Comment here..."
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
              <Button text={"Reply"} />
            </div>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-col">
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
        <CommenteEl />
      </div>
    </div>
  );
};

export default PostCommentSide;
