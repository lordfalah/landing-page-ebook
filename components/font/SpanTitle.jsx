import React from "react";

const SpanTitle = ({ className, children }) => {
  return (
    <span className={`${className} font-sans font-bold text-sm`}>
      {children}
    </span>
  );
};

export default SpanTitle;
