import React, { Fragment } from "react";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import useWindowSize from "../../../hooks/useWindowSize";
import Image from "next/image";

const listData = [
  {
    id: 1,
    title:
      "Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)",
    status: "Mahasiswa",
    name: "Ahmad Saugi",
    image: "face1",
  },
  {
    id: 2,
    title:
      "Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses memahami taildwindcss. Isinya cukup lengkap dan detail.",
    status: "Front-end Engineer",
    name: "Dedik Sugiharto",
    image: "face2",
  },
  {
    id: 3,
    title:
      "Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.",
    status: "IT Support",
    name: "Lutfi Hanafiah Ramadhan",
    image: "face3",
  },
];

const CourselCards = () => {
  const { width } = useWindowSize();

  return (
    <Fragment>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={width < 1024 ? 1 : width > 1280 ? 3 : 2}
      >
        {listData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="mb-14 lg:mb-16">
              <div
                className="bg-white shadow-[#00BAC714] drop-shadow 
                shadow-md rounded-[10px] p-[1.875rem] cursor-grabbing space-y-6
                xl:space-y-7"
              >
                <article>
                  <Paragraf
                    className="text-[#272D3ECC] md:tracking-wide text-base 
                    lg:leading-[1.875rem] text-justify lg:text-left"
                    variants="textNormal"
                  >
                    &quot;{data.title}&quot;
                  </Paragraf>
                </article>

                <div className="flex gap-5 items-center">
                  <Image
                    width="50px"
                    height="50px"
                    src={`/img/${data.image}.png`}
                    layout="intrinsic"
                  />
                  <div>
                    <Heading className="text-[#272D3E]" variants="styleMedium">
                      {data.name}
                    </Heading>
                    <Paragraf
                      className="text-[#272D3ECC]"
                      variants="textNormal"
                    >
                      {data.status}
                    </Paragraf>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default CourselCards;
