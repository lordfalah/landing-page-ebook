import React from "react";
import Button from "../../button/Button";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import Close from "../../icon/Close";
import RawCheck from "../../icon/RawCheck";
import ContainerDisplay from "../../layout/ContainerDisplay";
import CardPrice from "./CardPrice";

const dataPrice = [
  {
    id: 1,
    title: "Buku Digital",
    price: "Rp100.000",
    book: { subTitle: "Buku lengkap", equivalen: true },
    access: { subTitle: "Akses secara digital", equivalen: true },
    real: { subTitle: "Buku fisik", equivalen: false },
    update: { subTitle: "Mendapat pembaruan", equivalen: true },
    konsul: { subTitle: "Konsultasi", equivalen: true },
    donwload: { subTitle: "Dapat diunduh", equivalen: true },
  },

  {
    id: 2,
    title: "Buku Fisik",
    price: "Rp185.000",
    book: { subTitle: "Buku lengkap", equivalen: true },
    access: { subTitle: "Akses secara digital", equivalen: false },
    real: { subTitle: "Buku fisik", equivalen: false },
    update: { subTitle: "Mendapat pembaruan", equivalen: false },
    konsul: { subTitle: "Konsultasi", equivalen: true },
    donwload: { subTitle: "Dapat diunduh", equivalen: true },
  },

  {
    id: 3,
    title: "Buku Digital + FIsik",
    price: "Rp250.000",
    book: { subTitle: "Buku lengkap", equivalen: true },
    access: { subTitle: "Akses secara digital", equivalen: true },
    real: { subTitle: "Buku fisik", equivalen: true },
    update: { subTitle: "Mendapat pembaruan", equivalen: true },
    konsul: { subTitle: "Konsultasi", equivalen: true },
    donwload: { subTitle: "Dapat diunduh", equivalen: true },
  },
];

const ProductPrice = () => {
  return (
    <ContainerDisplay
      className="grid gap-9 sm:gap-7 lg:gap-9 grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3"
    >
      {dataPrice.map((data) => {
        return (
          <CardPrice
            key={data.id}
            className={`${
              data.id === 3
                ? "sm:col-span-2 lg:col-span-1 w-full sm:w-1/2 lg:w-full mx-auto"
                : "col-span-1"
            }`}
          >
            <Paragraf className="text-[#00BAC7]">{data.title}</Paragraf>
            <article className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8">
              <Heading className="text-[#001533]" variants="styleSubTitle">
                {data.price}
              </Heading>

              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  {data.book.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.book.subTitle}
                  </Paragraf>
                </li>
                <li className="flex items-center gap-4">
                  {data.access.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.access.subTitle}
                  </Paragraf>
                </li>
                <li className="flex items-center gap-4">
                  {data.real.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.real.subTitle}
                  </Paragraf>
                </li>
                <li className="flex items-center gap-4">
                  {data.update.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.update.subTitle}
                  </Paragraf>
                </li>
                <li className="flex items-center gap-4">
                  {data.konsul.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.konsul.subTitle}
                  </Paragraf>
                </li>
                <li className="flex items-center gap-4">
                  {data.donwload.equivalen ? (
                    <div className="bg-[#20D27D] rounded-full p-1 xl:p-2">
                      <RawCheck className="w-4 h-4 xl:stroke-white fill-white" />
                    </div>
                  ) : (
                    <div className="bg-[#F52E52] rounded-full p-1 xl:p-2">
                      <Close className="w-4 h-4 stroke-white fill-white" />
                    </div>
                  )}
                  <Paragraf
                    className="text-[#001533] md:tracking-wide text-base xl:text-lg 
                  lg:leading-8"
                    variants="textNormal"
                  >
                    {data.donwload.subTitle}
                  </Paragraf>
                </li>
              </ul>
            </article>
            <Button
              className="bg-[#00BAC7] rounded-md py-4 w-full 
              drop-shadow-lg shadow-[#4A72FF40] shadow-lg mt-7 md:mt-9 lg:mt-8
              xl:mt-11 lg:drop-shadow-xl xl:shadow-xl xl:shadow-[#4A72FF40]"
            >
              <Paragraf
                className="text-[#F4F7FF] text-base lg:text-lg cursor-pointer"
                variants="textSemiBold"
              >
                Beli Sekarang
              </Paragraf>
            </Button>
          </CardPrice>
        );
      })}
    </ContainerDisplay>
  );
};

export default ProductPrice;
