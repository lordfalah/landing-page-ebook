import React from "react";
import { Fragment } from "react";
import Heading from "../font/Heading";
import Paragraf from "../font/Paragraf";
import Download from "../icon/Download";

const SaleProduct = ({ children }) => {
  return (
    <Fragment>
      <div className="flex justify-between gap-2 lg:gap-0 xl:gap-[30px] items-center ">
        <Download className="w-8 h-8 stroke-white" />
        <Paragraf
          className="font-bold text-white/60 lg:text-base 
            text-right md:text-sm"
        >
          {children}
        </Paragraf>
      </div>
      <Heading className="font-inter lg:text-xl xl:text-2xl text-white text-right">
        501,234+
      </Heading>
    </Fragment>
  );
};

export default SaleProduct;
