import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";
import WriteImage from "./WriteImage";

const WriteArticle = ({ className }) => {
  const addClass = className ? className : "";

  return (
    <div className={`${addClass}`}>
      <SpanTitle className="text-[#00BAC7] text-sm lg:text-base">
        PENULIS BUKU
      </SpanTitle>
      <article>
        <Heading
          className="text-[#272D3E] mt-1 sm:mt-2 lg:mb-4 xl:mb-5"
          variants="styleSubTitle"
        >
          Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
        </Heading>

        <WriteImage className="mx-auto lg:hidden" variants="hidden" />

        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-base sm:text-lg 
          lg:leading-8 lg:text-base text-justify"
          variants="textNormal"
        >
          &quot;Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga
          kamu. Namun, kedepannya saya berharap nama ini tidak lagi terdengar
          asing di telinga kamu sebagai orang yang rajin berbagi hal-hal baik
          untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang web
          developer yang masuk kategori
          apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih
          senang fokus di front-end development, karena --menurut saya-- ini
          lebih sederhana saja. Di front-end development pada dasarnya hanya
          perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah jelas
          ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau kamu
          cocoknya pake jQuery, malah maksa pake React.&quot;
        </Paragraf>
      </article>
    </div>
  );
};

export default WriteArticle;
