import React from "react";
import Button from "../button/Button";
import Heading from "../font/Heading";
import Paragraf from "../font/Paragraf";
import Arrow from "../icon/Arrow";
import techno from "../icon/techno";
import BookCss from "./BookCss";
import ContentPage from "./ContentPage";
import SaleProduct from "./SaleProduct";

const ArticleCss = () => {
  return (
    <div className="style-article">
      <div className="w-5/6 sm:w-full">
        <Heading className="style-heading">
          Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS
        </Heading>
      </div>

      <BookCss className="flex justify-center sm:hidden" />

      <div className="hidden sm:block md:hidden">
        <ContentPage>
          <BookCss />

          <div className="space-y-6">
            <Button
              className="style-button bg-[#00BAC7] rounded-full"
              variants="btnEffect"
            >
              <Paragraf className="font-bold">Beli Sekarang</Paragraf>
              <Arrow className="h-8 w-8" />
            </Button>
            <div className="space-y-1">
              <SaleProduct>SUDAH TERJUAL</SaleProduct>
            </div>
          </div>
        </ContentPage>
      </div>

      <article className="sm:my-0 md:my-12">
        <Paragraf className="style-paragraf">
          Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
          diakhiri dengan membangun sebuah website yang responsive dengan
          Tailwind CSS.
        </Paragraf>
      </article>

      <div className="style-display">
        <div className="block sm:hidden md:block">
          <Button
            className="style-button bg-[#00BAC7] rounded-full"
            variants="btnEffect"
          >
            <Paragraf className="font-bold">Beli Sekarang</Paragraf>
            <Arrow className="h-8 w-8" />
          </Button>
        </div>

        <div className="space-y-1 sm:hidden md:block">
          <SaleProduct>SUDAH TERJUAL </SaleProduct>
        </div>
      </div>

      <div className="my-10  md:my-20 mb-44 space-y-4">
        <div className="flex items-center gap-5 ">
          <span className="border-t w-[30px] border-2 border-white/40"></span>
          <Paragraf className="font-bold text-white/40 tracking-wider">
            TEKNOLOGI YANG DIGUNAKAN
          </Paragraf>
        </div>

        <ul className="flex gap-5 items-center flex-wrap">
          {techno().map((data) => {
            return (
              <li key={data.id}>
                <img src={data.source} alt={data.source} width="100%" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ArticleCss;
