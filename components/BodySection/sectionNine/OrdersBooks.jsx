import React, { Fragment } from "react";
import Button from "../../button/Button";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";
import SaleProduct from "../../hero/SaleProduct";
import Arrow from "../../icon/Arrow";

const OrdersBooks = () => {
  return (
    <Fragment>
      <div
        className="bg-[#EDFCFD] py-[10px] px-5 rounded-full w-fit
        mx-auto"
      >
        <SpanTitle className="text-sm lg:text-base text-[#00BAC7]">
          HARGA BUKU
        </SpanTitle>
      </div>
      <article className="text-center space-y-4">
        <Heading className="text-[#272D3E] mt-2" variants="styleSubTitle">
          Anda ingin segera memesan buku ini?
        </Heading>

        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-lg xl:text-xl
          lg:!leading-8"
          variants="textNormal"
        >
          Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
        </Paragraf>

        <div
          className="flex w-full justify-center
            items-center my-5 sm:flex-nowrap gap-5 sm:gap-10 md:gap-14 lg:gap-10 
            flex-row-reverse !mt-7 lg:!mt-9"
        >
          <Button
            className="bg-[#00BAC7] rounded-full py-2 flex items-center gap-2
            px-3 sm:py-3 sm:px-8 md:py-3 md:px-6 lg:py-4 lg:px-9"
            variants="btnEffect"
          >
            <SpanTitle className="font-bold xl:text-xl md:text-base lg:text-lg">
              Beli Sekarang
            </SpanTitle>
            <Arrow className="h-8 w-8" />
          </Button>
          <div>
            <SaleProduct variants="dark" className="text-[#272D3ECC]">
              SUDAH TERJUAL
            </SaleProduct>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default OrdersBooks;
