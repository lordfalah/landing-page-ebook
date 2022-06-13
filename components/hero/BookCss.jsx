import Image from "next/image";
import React from "react";

const BookCss = ({ className, variants }) => {
  const addClass = className ? className : "";

  const styled = {
    hidden: "sm:hidden md:block w-full",
  };

  return (
    <div className={`${variants ? styled[variants] : ""} z-10`}>
      <div className={`${addClass}`}>
        <img src="/img/ebook.png" alt="book" className="width-ebook" />
      </div>
    </div>
  );
};

export default BookCss;
