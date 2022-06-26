import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanBorder from "../../font/SpanBorder";
import SpanTitle from "../../font/SpanTitle";

const TestimonalArticle = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-evenly
      gap-4 lg:gap-10 xl:gap-20"
    >
      <div className="w-full">
        <div className="flex gap-4 items-center mb-3 lg:mb-2 xl:mb-3">
          <SpanBorder
            variants="borderPx"
            className="border-t-[#00BAC7]"
          ></SpanBorder>
          <SpanTitle className="text-[#00BAC7] text-sm">TESTIMONIAL</SpanTitle>
        </div>

        <Heading className="text-[#272D3E]" variants="styleSubTitle">
          Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
        </Heading>
      </div>

      <article className="w-full">
        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-lg xl:text-xl
          lg:!leading-8"
          variants="textNormal"
        >
          Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa,
          karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin beberapa
          ulasan ini bisa membangkitkan hasratmu untuk membeli buku ini.
        </Paragraf>
      </article>
    </div>
  );
};

export default TestimonalArticle;
