import React from "react";

const BookCss = ({ className, hidden }) => {
  const addClass = className ? className : "";
  const hiddenClass = hidden ? hidden : "";
  return (
    <div className={`${hiddenClass} z-10`}>
      <div className={`${addClass} sm:top-0 md:-top-5 lg:-top-9`}>
        <img src="/img/ebook.png" alt="book" className="width-ebook" />
      </div>
    </div>
  );
};

export default BookCss;
