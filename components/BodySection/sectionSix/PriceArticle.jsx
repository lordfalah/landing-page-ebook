import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";

const PriceArticle = () => {
  return (
    <div className="w-full space-y-4">
      <div
        className="bg-[#C6F4F81A] py-[10px] px-5 rounded-full w-fit
        mx-auto"
      >
        <SpanTitle className="text-sm lg:text-base text-[#00BAC7]">
          HARGA BUKU
        </SpanTitle>
      </div>
      <article
        className="text-center w-full lg:w-11/12 xl:w-3/4 2xl:w-1/2 
        mx-auto space-y-4 lg:space-y-5"
      >
        <Heading className="text-white" variants="styleSubTitle">
          Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di
          perangkat kamu
        </Heading>

        <Paragraf
          className="text-[#FFFFFFCC] md:tracking-wide text-lg xl:text-xl
            lg:leading-8"
          variants="textNormal"
        >
          Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak
          cipta dilindungi undang-undang.
        </Paragraf>
      </article>
    </div>
  );
};

export default PriceArticle;
