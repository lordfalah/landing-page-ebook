import React from "react";
import ArrowRight from "../../icon/ArrowRight";

const AnimateArrow = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div
      className={`animate-bounce bg-[#00BAC7] rounded-full 
        flex items-center justify-center shadow-lg drop-shadow-xl 
        shadow-[#00BAC773] ${addClass}`}
    >
      <ArrowRight
        className="w-6 h-6 fill-white stroke-0 group-hover:animate-ping  
    "
      />
    </div>
  );
};

export default AnimateArrow;
