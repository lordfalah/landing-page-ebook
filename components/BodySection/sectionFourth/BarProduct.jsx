import React from "react";
import ArrowRight from "../../icon/ArrowRight";

const BarProduct = ({ children, button }) => {
  return (
    <div
      className="bg-white rounded-2xl 
      py-4 px-7 sm:py-7 sm:px-9 md:py-9 md:px-14 lg:py-5 lg:px-[30px]
      drop-shadow-xl shadow-[#02282B1A]/80"
    >
      <div className="flex justify-between items-center gap-4 sm:gap-5 xl:gap-7">
        {children}
        <div className="rounded-full bg-[#00BAC71A] p-2">
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-1 fill-[#00BAC7]" />
        </div>
      </div>
    </div>
  );
};

export default BarProduct;
