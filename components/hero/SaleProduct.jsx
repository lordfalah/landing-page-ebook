import React from "react";
import { Fragment } from "react";
import Heading from "../font/Heading";
import Paragraf from "../font/Paragraf";
import Download from "../icon/Download";

const SaleProduct = ({ children, className, variants }) => {
  const addClass = className ? className : "";
  const styledText = {
    white: "text-white",
    dark: "text-[#272D3E]",
  };

  return (
    <Fragment>
      <div className="flex justify-between gap-2 lg:gap-0 xl:gap-[30px] items-center ">
        <Download
          className={`h-6 w-6 sm:h-8 sm:w-8 ${
            styledText[variants] === "text-white"
              ? "stroke-white"
              : styledText[variants] === "text-[#272D3E]" && "stroke-[#272D3E]"
          }`}
        />
        <Paragraf
          className={`font-bold lg:text-base 
            text-right md:text-sm ${addClass}`}
        >
          {children}
        </Paragraf>
      </div>
      <Heading
        className={`font-inter lg:text-xl xl:text-2xl text-right ${
          styledText[variants] ? styledText[variants] : ""
        }`}
      >
        501,234+
      </Heading>
    </Fragment>
  );
};

export default SaleProduct;
