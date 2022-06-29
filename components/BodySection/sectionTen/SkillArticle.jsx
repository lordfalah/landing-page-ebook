import React from "react";
import Button from "../../button/Button";
import Heading from "../../font/Heading";
import Paragraf from "../../font/Paragraf";

const SkillArticle = () => {
  return (
    <div
      className="block md:flex md:flex-row md:items-center md:gap-28 lg:gap-32
        xl:gap-52 2xl:gap-80 space-y-6 sm:space-y-8 lg:space-y-0"
    >
      <article className="space-y-4 w-full md:w-3/4 xl:w-4/5">
        <Heading className="text-white text-[1.375rem]" variants="styleMedium">
          Sudah siap meningkatkan skill kamu?
        </Heading>

        <Paragraf
          className="text-white/80 md:tracking-wide text-lg xl:text-xl"
          variants="textNormal"
        >
          Mulai belajar hari ini di Multinity, atau dapatkan jawaban atas
          pertanyaan kamu di halaman bantuan.
        </Paragraf>
      </article>

      <div
        className="flex gap-5 md:gap-6 sm:mt-2 md:mt-0 md:flex-col md:w-2/5
        lg:flex-row lg:w-2/3 lg:gap-8 xl:w-1/2 items-center"
      >
        <Button className="bg-white/5 rounded-md py-4 w-full lg:py-6">
          <Paragraf
            className="text-[#F4F7FF] text-base lg:text-lg cursor-pointer"
            variants="textSemiBold"
          >
            Pusat Bantuan
          </Paragraf>
        </Button>

        <Button
          className="bg-[#00BAC7] rounded-md py-4 lg:py-6 w-full 
            drop-shadow-lg shadow-[#00BAC754] shadow-xl 
             lg:drop-shadow-xl xl:shadow-xl xl:shadow-[#00BAC754]"
        >
          <Paragraf
            className="text-[#F4F7FF] text-base lg:text-lg cursor-pointer"
            variants="textSemiBold"
          >
            Mendaftar
          </Paragraf>
        </Button>
      </div>
    </div>
  );
};

export default SkillArticle;
