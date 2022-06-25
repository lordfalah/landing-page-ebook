import React from "react";

const SpanTitle = ({ className, children }) => {
  return (
    <span className={`${className} font-sans font-bold tracking-widest`}>
      {children}
    </span>
  );
};

export default SpanTitle;
