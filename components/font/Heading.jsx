import React from "react";

const Heading = ({ className, children }) => {
  const addClass = className ? className : "";
  return <p className={`font-sans ${addClass}`}>{children}</p>;
};

export default Heading;
