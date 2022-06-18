import React from "react";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";
import ContainerDisplay from "../../layout/ContainerDisplay";

const BuyBook = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <div className={`relative block ${addClass}`}>
      <img
        src="/img/ebook2.png"
        className="w-full sm:w-2/3 mx-auto lg:w-full xl:w-3/4 2xl:w-2/3"
      />

      <ContainerDisplay
        className="grid grid-cols-3 justify-evenly bg-[#00BAC7] p-5 rounded-2xl 
        divide-x divide-white/30 text-center w-full py-7 sm:py-8 lg:py-10 shadow-2xl 
        shadow-[#00BAC7]/70 absolute bottom-5 lg:bottom-32 xl:bottom-9 2xl:bottom-8"
      >
        <div>
          <SpanTitle className="text-white text-xl xl:text-3xl">19</SpanTitle>
          <Paragraf
            className="text-white/80 md:tracking-wide text-sm md:text-base xl:text-lg"
            variants="textNormal"
          >
            Jumlah Chapter
          </Paragraf>
        </div>

        <div>
          <SpanTitle className="text-white text-xl xl:text-3xl">253</SpanTitle>
          <Paragraf
            className="text-white/80 md:tracking-wide text-sm md:text-base xl:text-lg"
            variants="textNormal"
          >
            Jumlah Halaman
          </Paragraf>
        </div>

        <div>
          <SpanTitle className="text-white text-xl xl:text-3xl">60</SpanTitle>
          <Paragraf
            className="text-white/80 md:tracking-wide text-sm md:text-base xl:text-lg"
            variants="textNormal"
          >
            Hari Menulis
          </Paragraf>
        </div>
      </ContainerDisplay>
    </div>
  );
};

export default BuyBook;
