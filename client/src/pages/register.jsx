import RegisterContainer from "@/components/page_components/RegisterContainer";
import React from "react";

function register() {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-full flex-1 bg-green-500 border-r border-r-gray-200 hidden sm:flex md:flex lg:flex justify-center items-center">
        <div className="relative">
          <span className="text-2xl text-white font-semibold">MSocial</span>
        </div>
      </div>
      <div className="w-full flex-1 flex justify-center items-center">
        <RegisterContainer/>
      </div>
    </div>
  );
}

export default register;
