import React from "react";

const BookCss = ({ className, variants }) => {
  const addClass = className ? className : "";

  const styled = {
    hidden: "hidden md:block w-full",
  };

  return (
    <div className={`${variants ? styled[variants] : ""} z-10`}>
      <div className={`${addClass}`}>
        <img
          src="/img/ebook.png"
          alt="book"
          className="sm:max-w-full md:max-w-[115%] 2xl:max-w-full"
        />
        {/* max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full 2xl:max-w-[130%] */}
      </div>
    </div>
  );
};

export default BookCss;
