import React from "react";
import BookBefore from "./BookBefore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimateArrow from "./AnimateArrow";
import Image from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";

const CourselImage = ({ setCount }) => {
  const { width } = useWindowSize();

  return (
    <div className="relative w-full flex justify-between items-center">
      <BookBefore className="w-1/2 2xl:w-[45%] hidden lg:block" />
      <div className="overflow-hidden w-full lg:w-1/2">
        <div className="relative group hover:cursor-grabbing my-11 sm:my-0">
          <AnimateArrow
            className="absolute z-10 bottom-1/2 translate-y-1/2 
            w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 right-7 
            sm:right-32 md:right-36 xl:right-28 lg:right-24 
            lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:right-32"
          />
          <Swiper
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={1}
            onSlideNextTransitionStart={() => setCount((acc) => acc + 1)}
            onSlidePrevTransitionStart={() => setCount((acc) => acc - 1)}
          >
            {[1, 2, 3].map((images) => {
              return (
                <SwiperSlide key={images}>
                  <Image
                    layout="responsive"
                    alt="img"
                    width="100%"
                    height="100%"
                    objectFit={width > 640 ? "contain" : "cover"}
                    src="/img/codeTailwind.png"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CourselImage;
