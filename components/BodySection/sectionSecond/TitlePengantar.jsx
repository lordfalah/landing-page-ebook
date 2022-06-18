import Image from "next/image";
import React from "react";
import { Fragment } from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanBorder from "../../font/SpanBorder";
import SpanTitle from "../../font/SpanTitle";

const TitlePengantar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <SpanBorder
            variants="borderPx"
            className="border-t-white"
          ></SpanBorder>
          <SpanTitle className="text-white text-sm">
            BUKU INI UNTUK SIAPA
          </SpanTitle>
        </div>
        <Heading className="text-white" variants="styleSubTitle">
          Kata Pengantar Dari Penulis Buku
        </Heading>
      </div>
      <SpanBorder
        className="border-t-[#C4C4C4]/80 my-7"
        variants="borderFull"
      ></SpanBorder>
      <div className="flex gap-6">
        <Image
          width="50px"
          height="50px"
          alt="man"
          layout="intrinsic"
          src="/img/man.png"
        />
        <div className="flex flex-col">
          <Paragraf variants="textMedium" className="text-white">
            Muhamad Nauval Azhar
          </Paragraf>
          <Paragraf className="text-white/80" variants="textNormal">
            @mhdnauvalazhar
          </Paragraf>
        </div>
      </div>
    </div>
  );
};

export default TitlePengantar;
