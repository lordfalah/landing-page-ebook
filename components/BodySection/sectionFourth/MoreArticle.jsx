import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanBorder from "../../font/SpanBorder";
import SpanTitle from "../../font/SpanTitle";
import Chat from "../../icon/Chat";
import Template from "../../icon/Template";
import BarProduct from "./BarProduct";
import MoreImage from "./MoreImage";

const MoreArticle = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <SpanBorder
          className="border-t-[#00BAC7]"
          variants="borderPx"
        ></SpanBorder>
        <SpanTitle className="text-[#00BAC7]">SELAIN ITU</SpanTitle>
      </div>
      <article className="lg:space-y-4 xl:space-y-5 2xl:space-y-6">
        <Heading className="#272D3E" variants="styleSubTitle">
          Buku dengan studi kasus nyata, juga komunitas yang ramah
        </Heading>
        <MoreImage className="block lg:hidden" />
        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-lg xl:text-xl
          lg:leading-8"
          variants="textNormal"
        >
          Buku ini diakhiri dengan membangun website yang responsive dengan
          Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas untuk
          bertanya ketika mengalami kesulitan.
        </Paragraf>

        <div className="space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-7 xl:space-y-9">
          <BarProduct>
            <div className="space-y-2 sm:space-y-1 flex gap-4 lg:gap-5">
              <Template
                className="w-8 h-8 lg:mt-0 xl:mt-1 lg:w-12 lg:h-12 xl:w-10 xl:h-10
                stroke-1 hidden sm:block mt-2 stroke-[#00BAC7]"
              />
              <div>
                <div className="flex gap-4">
                  <Template className="w-8 h-8 stroke-1 block sm:hidden stroke-[#00BAC7]" />
                  <Heading
                    className="text-[#00BAC7] text-lg lg:text-xl"
                    variants="styleMedium"
                  >
                    Live Demo Project
                  </Heading>
                </div>
                <Paragraf
                  className="text-[#272D3ECC] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8 mt-2 sm:mt-0"
                  variants="textNormal"
                >
                  Lihat live demo project yang akan kamu buat di akhir buku ini.
                </Paragraf>
              </div>
            </div>
          </BarProduct>
          <BarProduct>
            <div className="space-y-2 sm:space-y-1 flex gap-4">
              <Chat
                className="w-8 h-8 lg:mt-0 xl:mt-1 lg:w-12 lg:h-12 xl:w-10 xl:h-10 
                stroke-1 hidden sm:block mt-2 stroke-[#00BAC7]"
              />
              <div>
                <div className="flex gap-4">
                  <Chat className="w-8 h-8 stroke-1 block sm:hidden stroke-[#00BAC7]" />
                  <Heading
                    className="text-[#00BAC7] text-lg lg:text-xl"
                    variants="styleMedium"
                  >
                    Live Demo Project
                  </Heading>
                </div>
                <Paragraf
                  className="text-[#272D3ECC] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8 mt-2 sm:mt-0"
                  variants="textNormal"
                >
                  Lihat live demo project yang akan kamu buat di akhir buku ini.
                </Paragraf>
              </div>
            </div>
          </BarProduct>
        </div>
      </article>
    </div>
  );
};

export default MoreArticle;
