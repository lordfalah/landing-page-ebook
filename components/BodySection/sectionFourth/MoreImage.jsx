import React from "react";

const MoreImage = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`${addClass}`}>
      <img
        src="/img/bookSocial.png"
        className="w-full sm:w-2/3 mx-auto lg:w-full xl:w-11/12 2xl:full 2xl:-mt-16"
        alt="Thumbnail"
      />
    </div>
  );
};

export default MoreImage;
