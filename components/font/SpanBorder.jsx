import React from "react";

const SpanBorder = ({ className, children }) => {
  const addClass = className ? className : "";

  return (
    <span className={`border-t w-[30px] border-2 ${addClass}`}>{children}</span>
  );
};

export default SpanBorder;
