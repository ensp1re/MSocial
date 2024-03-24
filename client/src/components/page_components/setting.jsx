import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useStateProvider } from "@/context/StateContext";
import { FaArrowLeft } from "react-icons/fa";
import { reducerCases } from "@/context/constants";

const Setting = () => {
  const currentAvatarRef = useRef(null);

  const [{ isTypeSetting }, dispatch] = useStateProvider();

  const [changingAvatar, setChangingAvatar] = useState("");

  useEffect(() => {
    if (changingAvatar && currentAvatarRef.current) {
      currentAvatarRef.current.src = URL.createObjectURL(changingAvatar);
    }
  }, [changingAvatar, currentAvatarRef]);

  const handleChangeImage = (e) => {
    setChangingAvatar(e.target.files[0]);
  };

  return (
    <div className="w-full flex justify-center items-center">
      {isTypeSetting === "accountInfo" && (
        <div className="w-full max-w-md mx-auto mt-8">
          <div
            onClick={() => {
              dispatch({
                type: reducerCases.IS_TYPE_SETTING,
                isTypeSetting: "",
              });
            }}
            className=" mb-4 flex items-center justify-center rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110"
          >
            <span className="text-xl p-1 text-center">
              <FaArrowLeft />
            </span>
          </div>
          <form
            //   onSubmit={handleSubmit}
            className="w-full flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="w-full flex items-center mb-4 gap-2">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="logo"
                >
                  Avatar
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="logo"
                  type="file"
                  name="logo"
                  onChange={(e) => {
                    handleChangeImage(e);
                  }}
                  accept="image/*"
                />
              </div>
              <div className="relative top-4">
                {currentAvatarRef && changingAvatar ? (
                  <Image
                    ref={currentAvatarRef}
                    alt="Avatar"
                    className="rounded-full"
                    width="45"
                    height="45"
                    objectFit="contain"
                  />
                ) : (
                  <Image
                    src={"/default_avatar.png"}
                    alt="Avatar"
                    className="rounded-full"
                    width="45"
                    height="45"
                    objectFit="contain"
                  />
                )}
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                //   value={formData.username}
                //   onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nickname"
              >
                Nickname
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nickname"
                type="text"
                placeholder="Nickname"
                name="nickname"
                //   value={formData.nickname}
                //   onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bio"
              >
                Bio
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bio"
                placeholder="Bio"
                name="bio"
                //   value={formData.bio}
                //   onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {isTypeSetting === "changePassword" && (
        <div className="w-full max-w-md mx-auto mt-8">
          <div
            onClick={() => {
              dispatch({
                type: reducerCases.IS_TYPE_SETTING,
                isTypeSetting: "",
              });
            }}
            className=" mb-4 flex items-center justify-center rounded-full hover:bg-green-50 transition duration-200 cursor-pointer hover:scale-110"
          >
            <span className="text-xl p-1 text-center">
              <FaArrowLeft />
            </span>
          </div>
          <form
            //   onSubmit={handleSubmit}
            className="w-full flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Current password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                //   value={formData.username}
                //   onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nickname"
              >
                New password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nickname"
                type="text"
                placeholder="Nickname"
                name="nickname"
                //   value={formData.nickname}
                //   onChange={handleChange}
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      {!isTypeSetting && (
        <span className="text-xl text-gray-500">Select a setting</span>
      )}
    </div>
  );
};

export default Setting;
