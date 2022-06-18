import React from "react";
import { Fragment } from "react";

const SpanBorder = ({ className, children, variants }) => {
  const addClass = className ? className : "";
  const styled = {
    borderPx: "w-[30px]",
    borderFull: "w-full block",
  };

  return (
    <Fragment>
      <span
        className={`border-t-2 ${addClass} ${variants ? styled[variants] : ""}`}
      >
        {children}
      </span>
    </Fragment>
  );
};

export default SpanBorder;
