import React, { Fragment } from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
import SpanTitle from "../../font/SpanTitle";
import ContainerDisplay from "../../layout/ContainerDisplay";

const moreDetails = [
  {
    id: 1,
    title: "PRODUCTS",
    subTitle: ["Courses", "Books", "Freebies", "Classes"],
  },
  {
    id: 2,
    title: "COMPANY",
    subTitle: [
      "About Us",
      "Contact",
      "Privacy Policy",
      "Terms of Service",
      "Help",
    ],
  },
  {
    id: 3,
    title: "GET IN TOUCH",
    subTitle: ["Twitter", "Facebook", "Dribbble"],
  },
];

const MoreMalaka = () => {
  return (
    <Fragment>
      <ContainerDisplay className="flex gap-10 lg:flex-nowrap">
        <div className="w-full space-y-4">
          <div
            className="rounded-full bg-[#00BAC7] p-3 flex justify-center 
          items-center w-14 h-14"
          >
            <SpanTitle className="text-white font-bold font-serif text-2xl">
              M
            </SpanTitle>
          </div>

          <Heading className="font-bold text-white text-xl">The Malaka</Heading>
          <Paragraf
            className="text-white/80 md:tracking-wide text-base 
          lg:leading-[1.875rem] text-justify lg:text-left w-full sm:w-4/5 
          lg:w-11/12"
            variants="textNormal"
          >
            Malaka adalah situs penyedia kursus ilmu komputer berbahasa
            Indonesia, mulai dari pengembangan hingga desain grafis.
          </Paragraf>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-8 lg:gap-14">
          {moreDetails.map((more) => {
            return (
              <ul key={more.id} className="space-y-2">
                <Heading
                  className="font-bold font-sans text-sm text-white/60 
              tracking-widest mb-4"
                >
                  {more.title}
                </Heading>

                {more.subTitle.map((data, idx) => {
                  return (
                    <li key={idx} className="list-none">
                      <Paragraf
                        className="text-white/80 text-base"
                        variants="textNormal"
                      >
                        {data}
                      </Paragraf>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </ContainerDisplay>

      <div className="w-full pb-12 sm:pb-14 md:pb-16">
        <SpanTitle
          className="text-white/40 tracking-widest block text-xs w-full
          text-center"
        >
          COPYRIGHT © 2022 — DESIGN NAUVAL
        </SpanTitle>
      </div>
    </Fragment>
  );
};

export default MoreMalaka;
