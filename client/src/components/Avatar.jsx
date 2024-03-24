import Image from "next/image";

import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar = ({ src, type }) => {
  if (src) {
    return (
      <>
        {type === "sm" && (
          <Image
            src={src}
            alt="Avatar"
            className="rounded-full"
            width="30"
            height="30"
            objectFit="contain"
          />
        )}
        {type === "md" && (
          <Image
            src={src}
            alt="Avatar"
            className="rounded-full"
            width="45"
            height="45"
            objectFit="contain"
          />
        )}
        {type === "lg" && (
          <Image
            src={src}
            alt="Avatar"
            className="rounded-full"
            width="130"
            height="130"
            objectFit="contain"
          />
        )}
      </>
    );
  }
  return <FaUserCircle size={24} />;
};

export default Avatar;
