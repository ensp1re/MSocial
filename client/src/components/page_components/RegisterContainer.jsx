import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

const LoginContainer = () => {

    const currentAvatarRef = useRef(null);

  
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
    <div className="w-full max-w-md mx-auto mt-8 flex flex-col items-center">
      <div className=" mb-4 flex items-center justify-center rounded-full ">
        <span className="text-xl p-1 font-semibold text-center text-gray-500">
          Register
        </span>
      </div>
      <div className="w-full px-3 mb-4 rounded-sm border border-gray-200 flex items-center justify-center hover:bg-green-50 cursor-pointer duration-200">
        <div className="flex px-5 items-center gap-2 p-2 ">
            <span>
                <FaGoogle/>
            </span>
            <span>
                Login
            </span>
        </div>
      </div>
      <form
        //   onSubmit={handleSubmit}
        className="w-full flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="w-full flex items-center mb-4 gap-2 ">
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
          <div className="relative top-5 w-[50px] h-[50px]">
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Pssword"
            name="password"
            //   value={formData.nickname}
            //   onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="text"
            placeholder="Confirm password"
            name="confirmPassword"
            //   value={formData.nickname}
            //   onChange={handleChange}
          />
        </div>
        
        <div className="w-full flex gap-1 text-sm text-gray-500 mb-4">
          <span>If you have an account -</span>
          <Link href={"/login"} className="text-green-500 hover:underline ">
            login
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
