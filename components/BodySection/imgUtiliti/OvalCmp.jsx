import React from "react";

const OvalCmp = ({ className, children }) => {
  const addClass = className ? className : "";

  return (
    <div
      className={`text-white font-bold rounded-full  
     bg-[#00BAC7] flex justify-center items-center ${addClass}`}
    >
      {children}
    </div>
  );
};

export default OvalCmp;
