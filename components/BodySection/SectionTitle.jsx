import React from "react";
import Heading from "../font/Heading";
import SpanBorder from "../font/SpanBorder";
import SpanTitle from "../font/SpanTitle";
import ContainerDisplay from "../layout/ContainerDisplay";

const SectionTitle = () => {
  return (
    <div>
      <ContainerDisplay className="flex items-center gap-5">
        <SpanBorder className="border-[#00BAC7]"></SpanBorder>
        <SpanTitle className="text-[#00BAC7]">BUKU INI UNTUK SIAPA</SpanTitle>
      </ContainerDisplay>
      <Heading className="text-[#272D3E]" variants="styleSubTitle">
        Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!
      </Heading>
    </div>
  );
};

export default SectionTitle;
