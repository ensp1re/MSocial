import {
  FaBookmark,
  FaComment,
  FaEllipsisH,
  FaHeart,
  FaRetweet,
  FaShareAlt,
} from "react-icons/fa";
import { BsHeart, BsSave } from "react-icons/bs";
import { GoBookmark, GoBookmarkFill, GoComment } from "react-icons/go";
import Avatar from "./Avatar";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiImage } from "react-icons/bi";
import { MdEmojiEmotions } from "react-icons/md";
import Button from "./Button";
import 'animate.css'

const Post = ({ id }) => {
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetWeeted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleCommentIconClick = () => {
    setShowComments(!showComments);
  };



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
    <div
      onClick={(e) => {
        router.push("/post/id123");
      }}
      className=" p-3 w-full flex hover:bg-gray-50 transition duration-200 cursor-pointer"
    >
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
          <div className="flex rounded-full hover:bg-emerald-50 p-1 transition duration-300 cursor-pointer">
            <FaEllipsisH />
          </div>
        </div>
        <div className="flex">
          <div className="p-1">
            <p>Polyhedra token contract found!</p>
            <br></br>
            <p>
              $POLY will be listed on Binance, Coinbase, Kucoin, OKX, Bybit,
              MEXC
            </p>
            <br></br>
            <p>Do you believe it is the real token address?</p>
            <br></br>
            <p>Check yourself👇</p>
          </div>
        </div>
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
        <div className="w-full flex flex-row justify-between pr-4">
          <div className="flex justify-around w-[90%] p-2 gap-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleCommentIconClick();
              }}
              className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer"
            >
              <GoComment className=" text-" />
            </div>
            <div
              onClick={handleRetweet}
              className="rounded-full p-1 flex items-center justify-center hover:bg-green-50 hover:scale-110 cursor-pointer"
            >
              <FaRetweet className={`${isRetweeted ? "text-green-500" : ""}`} />
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
        {showComments && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            id={id}
            className={`flex w-full p-3 border-b border-b-gray-200 flex-row`}
          >
            <div className="">
              <Avatar src={"/logo.png"} type={"sm"} />
            </div>
            <form className="w-full flex flex-col">
              <div className="w-full relative p-1 border-b border-b-gray-200 mb-2">
                <textarea
                  className="block  text-gray-800 w-full min-h-14 outline-none rounded-md bg-transparent border-transparent focus:bg-white disabled:opacity-50 disabled:bg-gray-300 disabled:cursor-not-allowed resize-none"
                  rows="1"
                  placeholder="Post your reply"
                  onChange={(event) => {
                    event.target.style.height = "auto";
                    event.target.style.height =
                      event.target.scrollHeight + "px";
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
        )}
      </div>
    </div>
  );
};

export default Post;
