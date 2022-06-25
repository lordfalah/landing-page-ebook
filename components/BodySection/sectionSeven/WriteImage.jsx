import Image from "next/image";
import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";

const WriteImage = ({ className, variants }) => {
  const addClass = className ? className : "";

  return (
    <div
      className={`${addClass} !bg-cover !bg-no-repeat`}
      style={
        variants === "hidden"
          ? {
              background: "none",
            }
          : {
              background: `url("/img/bgMan.png")`,
            }
      }
    >
      <div
        className={`relative w-full md:w-5/6 lg:w-full lg:mt-14 lg:ml-5 mx-auto`}
      >
        <Image
          width="100%"
          height="100%"
          src="/img/man.png"
          objectFit={`${variants === "hidden" ? "contain" : "cover"}`}
          alt="Face Man"
          layout="responsive"
        />

        <div
          className="bg-[#00BAC7] rounded-md py-2 px-4 absolute bottom-[70px] 
        left-[70px] sm:bottom-32 sm:left-36 sm:py-5 sm:px-9 lg:left-20 lg:bottom-16
        lg:px-8 lg:py-4 xl:px-11 xl:py-5 xl:bottom-24 xl:left-28 2xl:left-32 2xl:bottom-32"
        >
          <Paragraf variants="textMedium" className="text-white sm:text-xl">
            Muhamad Nauval Azhar
          </Paragraf>
          <Paragraf
            className="text-white/80 text-sm sm:text-base"
            variants="textNormal"
          >
            @mhdnauvalazhar
          </Paragraf>
        </div>
      </div>
    </div>
  );
};

export default WriteImage;
