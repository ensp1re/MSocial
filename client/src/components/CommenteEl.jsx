import { BsHeart } from "react-icons/bs";
import { FaEllipsisH, FaHeart, FaRetweet, FaShareAlt } from "react-icons/fa";
import { GoBookmark, GoBookmarkFill, GoComment } from "react-icons/go";
import Button from "./Button";
import Avatar from "./Avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const CommenteEl = ({ image }) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetWeeted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleRetweet = () => {
    setIsRetWeeted(!isRetweeted);
  };
  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      <div className="w-full">
        <div className=" p-3 w-full flex hover:bg-gray-50 transition duration-200 cursor-pointer">
          <div className="w-[7%] m-1">
            <Avatar src={"/logo.png"} type={"sm"} />
          </div>
          <div className="w-[93%] flex flex-col">
            <div className="p-1 flex items-center justify-between">
              <div className="flex gap-2 text-sm">
                <Link
                  href={"#"}
                  className="font-bold hover:opacity-75 opacity-95 transition"
                >
                  Science girl
                </Link>
                <Link href={"#"} className="text-secondary">
                  @gunsnrosesgirl3
                </Link>
                <span className="text-secondary">- 3h</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div className="flex rounded-full hover:bg-emerald-50 p-1 transition duration-300 cursor-pointer">
                  <FaEllipsisH />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="p-1">
               <span>
                Cool! I love a solution to this problem.
               </span>
              </div>
            </div>
            {image && (
              <div className="flex h-full w-full">
                <div className="flex relative h-full w-full overflow-hidden minmax(200px, auto) rounded-3xl">
                  <Image
                    alt="image"
                    src="/image.png"
                    layout="responsive"
                    objectFit="contain"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            )}
            <div className="w-full flex flex-row justify-between pr-4">
              <div className="flex justify-around w-[90%] p-2 gap-2">
                <div className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer">
                  <GoComment className=" text-" />
                </div>
                <div
                  onClick={handleRetweet}
                  className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer"
                >
                  <FaRetweet
                    className={`${isRetweeted ? "text-green-500" : ""}`}
                  />
                </div>
                <div
                  onClick={handleLike}
                  className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer"
                >
                  {isLiked ? (
                    <FaHeart className="text-green-600" />
                  ) : (
                    <BsHeart className="" />
                  )}
                </div>
              </div>
              <div className="flex justify-between w-[10%] p-2 gap-2">
                <div
                  onClick={handleSave}
                  className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer"
                >
                  {isSaved ? (
                    <GoBookmarkFill className="text-lg text-green-500" />
                  ) : (
                    <GoBookmark className="text-lg" />
                  )}
                </div>
                <div className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer">
                  <FaShareAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommenteEl;
