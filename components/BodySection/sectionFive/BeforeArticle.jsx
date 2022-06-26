import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";

const BeforeArticle = () => {
  return (
    <div className="w-full space-y-4">
      <div
        className="bg-[#C6F4F8] py-[10px] px-5 rounded-full w-fit
        mx-auto"
      >
        <SpanTitle className="text-sm lg:text-base text-[#00BAC7]">
          PRATINJAU
        </SpanTitle>
      </div>
      <article
        className="text-center w-full lg:w-11/12 xl:w-3/4 2xl:w-1/2 
      mx-auto space-y-4 lg:space-y-5"
      >
        <Heading className="text-[#272D3E]" variants="styleSubTitle">
          Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di
          dalam buku ini
        </Heading>

        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-lg xl:text-xl
          lg:!leading-8"
          variants="textNormal"
        >
          Geser pada gambar halaman di sebelah kanan buku untuk melihat lebih
          detail halaman buku tersebut dan membaca isinya.
        </Paragraf>
      </article>
    </div>
  );
};

export default BeforeArticle;
