import React from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import ContainerDisplay from "../../layout/ContainerDisplay";
import UtilitiesList from "../imgUtiliti/UtilitiesList";

const dataList = [
  {
    id: 1,
    img: "utilities",
    title: "Utility-First Framework",
    subTitle:
      "Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI.",
  },
  {
    id: 2,
    img: "jitEngine",
    title: "Tailwind JIT Engine",
    subTitle:
      "JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik.",
  },
  {
    id: 3,
    img: "unopini",
    title: "Unopinionated-Framework",
    subTitle:
      "Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik.",
  },
];

const SectionImage = () => {
  return (
    <ContainerDisplay
      className="flex gap-16 lg:gap-9 sm:grid sm:gap-7 
      sm:grid-cols-2 lg:grid-cols-3"
    >
      {dataList.map((data) => {
        return (
          <UtilitiesList
            key={data.id}
            className={`${
              data.id === 3
                ? "sm:col-span-2 lg:col-span-1 w-full sm:w-1/2 lg:w-full mx-auto"
                : "col-span-1"
            }`}
            source={data}
          >
            <div className="space-y-2 lg:space-y-3">
              <Heading className="text-lg md:text-xl text-[black] text-center">
                {data.title}
              </Heading>
              <Paragraf
                className="text-[#272D3E] text-center md:tracking-wide text-base xl:text-lg 
                  lg:!leading-8"
                variants="textNormal"
              >
                {data.subTitle}
              </Paragraf>
            </div>
          </UtilitiesList>
        );
      })}
    </ContainerDisplay>
  );
};

export default SectionImage;
