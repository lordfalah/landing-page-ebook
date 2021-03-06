import Image from "next/image";
import React from "react";

const MoreImage = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`${addClass} 2xl:-mt-16`}>
      <Image
        src="/img/bookSocial.png"
        alt="Thumbnail"
        width="100%"
        height="100%"
        layout="responsive"
      />
    </div>
  );
};

export default MoreImage;
