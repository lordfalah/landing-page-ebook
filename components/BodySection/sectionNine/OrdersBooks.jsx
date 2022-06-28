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
      <article className="text-center space-y-5 sm:space-y-4 md:space-y-5">
        <Heading
          className="text-[#272D3E] mt-2 lg:mt-4"
          variants="styleSubTitle"
        >
          Anda ingin segera memesan buku ini?
        </Heading>

        <Paragraf
          className="text-[#272D3ECC] md:tracking-wide text-lg xl:text-xl
          lg:!leading-8 w-full sm:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto"
          variants="textNormal"
        >
          Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja.
        </Paragraf>

        <div
          className="flex w-full justify-center
            items-center my-5 sm:flex-nowrap gap-5 sm:gap-10 md:gap-14 lg:gap-10 
            flex-row-reverse !mt-9 sm:!mt-10 md:!mt-12 lg:!mt-11 xl:!mt-12 xl:gap-14"
        >
          <Button
            className="bg-[#00BAC7] rounded-full py-2 flex items-center gap-2
            px-3 sm:py-3 sm:px-8 md:py-3 md:px-6 lg:py-4 lg:px-9 md:gap-4"
            variants="btnEffect"
          >
            <SpanTitle className="font-bold text-base ">
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
