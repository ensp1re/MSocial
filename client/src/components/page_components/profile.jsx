import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Avatar from "../Avatar";
import Button from "../Button";
import { useState } from "react";
import { typePosts } from "../../../types/constantsEl";
import Post from "../post";

const Profile = () => {
  const [isMyPage, setIsMyPage] = useState(true);

  const [selectedTypePost, setSelectedTypePost] = useState({
    selected: "posts",
  });

  const handleChoosePosts = (name) => {
    setSelectedTypePost({ selected: name });
  };

  return (
    <div className="w-full">
      <div className="flex w-full h-11 p-2 items-center gap-2 border-b border-b-gray-200 bg-white sticky top-0 z-20 bg-opacity-95">
        <div className="rounded-full p-1 hover:bg-green-50 transition duration-200 cursor-pointer">
          <FaArrowLeft className="text-sm hover:scale-110" />
        </div>
        <div className="flex flex-col p-1 mb-1">
          <span className="font-semibold">Enspire</span>
          <span className="text-sm text-secondary">777 posts</span>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex relative w-full h-full overflow-hidden minmax(200px, auto)">
          <Image
            src={"/background.png"}
            objectFit="contain"
            layout="responsive"
            width={32}
            height={32}
          />
        </div>
        <div className="flex w-full p-4 flex-col">
          <div className="flex w-full items-center justify-between relative bottom-11">
            <div className="flex relative rounded-full ring-4 ring-white cursor-pointer transition duration-200">
              <Avatar src={"/logo.png"} type={"lg"} />
            </div>
            <div className="flex">
              {isMyPage ? (
                <Button text={"Edit profile"} type={"2"} />
              ) : (
                <Button text={"Follow"} />
              )}
            </div>
          </div>
          <div className="w-full flex">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <span className=" text-gray-900 font-semibold">Enspire</span>
                <span className="text-secondary">@enspire</span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col text-sm mt-2">
            <p>Actionable insights on Airdrops & DeFi. |</p>
            <br />
            <p>Top 7 on the LayerZero Leaderboard. |</p>
            <br />
            <p>Interoperability Maxi</p>
            <br />
          </div>
          <div className="flex w-full flex-row text-sm gap-3">
            <div className="hover:opacity-75 cursor-pointer transition duration-200 gap-2">
              <span className="text-gray-900 font-semibold">445</span>
              <span className="text-secondary ml-1">Following</span>
            </div>
            <div className="hover:opacity-75 cursor-pointer transition duration-200 gap-2">
              <span className="text-gray-900 font-semibold">125.7k</span>
              <span className="text-secondary  ml-1">Followers</span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-11 border-b border-b-gray-200 flex flex-row justify-between sticky top-0 bg-white bg-opacity-95 z-1">
            {Object.entries(typePosts).map(([value, key]) => (
              <div
                key={key}
                onClick={() => handleChoosePosts(key)}
                className={`relative z-10 text-sm w-full flex items-center justify-center hover:bg-gray-100 cursor-pointer transition duration-200 text-gray-600 ${
                  selectedTypePost.selected === key
                    ? "p-2 border-b-2 border-b-green-500 font-bold"
                    : ""
                }`}
              >
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex">
          <div className="flex flex-col">
            {selectedTypePost.selected === "posts" && (
              <>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
              </>
            )}
            {selectedTypePost.selected === "replies" && (
              <div className="min-w-[550px]">Replies</div>
            )}
            {selectedTypePost.selected === "saved" && (
              <div className="min-w-[550px]">Saved</div>
            )}
            {selectedTypePost.selected === "likes" && (
              <div className="min-w-[550px]">Likes</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
