import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
import {
  FaArrowLeft,
  FaEllipsisH,
  FaHeart,
  FaRetweet,
  FaShareAlt,
} from "react-icons/fa";
import { GoBookmark, GoBookmarkFill, GoComment } from "react-icons/go";
import { MdAddCircleOutline, MdArrowLeft } from "react-icons/md";
import Avatar from "../Avatar";
import { useState } from "react";
import Button from "../Button";

const PostSide = () => {
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
    <div className="w-full">
      <div className="w-full sticky top-0 z-50 flex justify-between items-center p-2 border-b border-b-gray-200 bg-white bg-opacity-95">
        <div className="flex justify-center items-center gap-3">
          <div
            onClick={() => {
              router.back();
            }}
            className="rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110"
          >
            <FaArrowLeft className="text-2xl p-1" />
          </div>
          <span className="text-gray-800 font-semibold text-lg">Post</span>
        </div>
      </div>
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
                <div>
                  <Button text={"Follow"} />
                </div>
                <div className="flex rounded-full hover:bg-emerald-50 p-1 transition duration-300 cursor-pointer">
                  <FaEllipsisH />
                </div>
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

export default PostSide;
