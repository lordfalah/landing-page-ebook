import Image from "next/image";
import React from "react";

const BookBefore = ({ className }) => {
  const addClass = className ? className : "";

  return (
    <div className={`${addClass}`}>
      <Image
        src="/img/books.png"
        width="100%"
        height="100%"
        layout="responsive"
        alt="ebook tailwind"
        objectFit="contain"
      />
    </div>
  );
};

export default BookBefore;
