import React from "react";

const CardPrice = ({ children, className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`bg-white p-14 rounded-xl ${addClass}`}>{children}</div>
  );
};

export default CardPrice;
