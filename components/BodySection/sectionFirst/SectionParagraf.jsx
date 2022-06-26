import React from "react";
import { Fragment } from "react";
import Paragraf from "../../font/Paragraf";

const SectionParagraf = () => {
  return (
    <Fragment>
      <Paragraf
        className="text-[#272D3E] md:tracking-wide text-lg xl:text-xl 
        xl:col-span-2 lg:w-full xl:w-2/3 lg:!leading-8"
        variants="textNormal"
      >
        Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan
        skill, buku ini juga cocok untuk back-end developer dan UI designer agar
        dapat menulis style tanpa harus menulis kode CSS dan tanpa mengandalkan
        front-end developer!
      </Paragraf>
    </Fragment>
  );
};

export default SectionParagraf;
