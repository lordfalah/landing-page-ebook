import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanBorder from "../../font/SpanBorder";
import SpanTitle from "../../font/SpanTitle";
import RawCheck from "../../icon/RawCheck";
import BuyBook from "./BuyBook";

const listText = [
  {
    text: "Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak hanya sekadar Bootstrap",
  },
  {
    text: "Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar meminimalisir terjadinya miskonsepsi",
  },
  {
    text: "Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi UI designer",
  },
  {
    text: "Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS",
  },
];

const ArticleManfaat = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <SpanBorder
          variants="borderPx"
          className="border-t-[#00BAC7]"
        ></SpanBorder>
        <SpanTitle className="text-[#00BAC7] text-sm">MANFAAT BUKU</SpanTitle>
      </div>

      <article className="flex flex-col gap-6 lg:gap-5 xl:gap-7 2xl:gap-8">
        <div>
          <Heading className="text-[#272D3E]" variants="styleSubTitle">
            Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
          </Heading>

          <BuyBook className="block lg:hidden" />
        </div>

        <Paragraf
          className="text-[#272D3E] md:tracking-wide text-lg xl:text-xl
          lg:!leading-8 mt-4 lg:mt-0"
          variants="textNormal"
        >
          &quot;Buku itu seperti cermin: kalau yang berkaca padanya adalah
          seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah
          seorang yang jenius.&quot; - J.K Rowling
        </Paragraf>

        <ul className="space-y-4 xl:space-y-5">
          {listText.map((data, idx) => {
            return (
              <li
                key={idx}
                className="gap-4 sm:gap-5 md:gap-6 flex items-center justify-center break-words"
              >
                <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                  <RawCheck className="w-6 h-6 xl:stroke-white fill-white" />
                </div>
                <Paragraf
                  className="text-[#272D3E] md:tracking-wide text-base xl:text-lg 
                  lg:!leading-[1.875rem]"
                  variants="textNormal"
                >
                  {data.text}
                </Paragraf>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  );
};

export default ArticleManfaat;
