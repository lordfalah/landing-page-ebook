import Head from "next/head";
import { Fragment } from "react";
import { useState } from "react";
import ArticleCss from "../components/hero/ArticleCss";
import BookCss from "../components/hero/BookCss";
import Container from "../components/layout/Container";
import BackgroundNav from "../components/navbar/BackgroundNav";
import NavBtn from "../components/navbar/burger/NavBtn";
import Nav from "../components/navbar/Nav";
import Transparant from "../components/transparant/Transparant";
import SectionTitle from "../components/BodySection/sectionFirst/SectionTitle";
import ContainerDisplay from "../components/layout/ContainerDisplay";
import SectionImage from "../components/BodySection/sectionFirst/SectionImage";
import SectionParagraf from "../components/BodySection/sectionFirst/SectionParagraf";
import TitlePengantar from "../components/BodySection/sectionSecond/TitlePengantar";
import SubPengantar from "../components/BodySection/sectionSecond/SubPengantar";
import ArticleManfaat from "../components/BodySection/sectionThirt/ArticleManfaat";
import BuyBook from "../components/BodySection/sectionThirt/BuyBook";
import MoreArticle from "../components/BodySection/sectionFourth/MoreArticle";
import MoreImage from "../components/BodySection/sectionFourth/MoreImage";
import BeforeArticle from "../components/BodySection/sectionFive/BeforeArticle";
import CourselImage from "../components/BodySection/sectionFive/CourselImage";
import Paragraf from "../components/font/Paragraf";
import PriceArticle from "../components/BodySection/sectionSix/PriceArticle";
import ProductPrice from "../components/BodySection/sectionSix/ProductPrice";
import WriteImage from "../components/BodySection/sectionSeven/WriteImage";
import WriteArticle from "../components/BodySection/sectionSeven/WriteArticle";
import TestimonalArticle from "../components/BodySection/sectionEight/TestimonalArticle";
import CourselCards from "../components/BodySection/sectionEight/CourselCards";
import AnimateArrow from "../components/BodySection/sectionFive/AnimateArrow";
import OrdersBooks from "../components/BodySection/sectionNine/OrdersBooks";
import SkillArticle from "../components/BodySection/sectionTen/SkillArticle";
import MoreMalaka from "../components/BodySection/sectionTen/MoreMalaka";
import OvalCmp from "../components/BodySection/imgUtiliti/OvalCmp";
import Heading from "../components/font/Heading";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <Fragment>
      <Head>
        <title>Landing Page Ebook</title>
        <meta
          name="description"
          content="Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS"
        />
      </Head>

      <header
        className={`w-full bg-cover bg-bottom bg-no-repeat top-0 pb-24
        overflow-hidden ${isOpen ? "fixed lg:relative" : "relative"}`}
        style={{ backgroundImage: `url("/img/hero.png")` }}
      >
        <Transparant variants="oval" />

        <Transparant
          style={{ background: `rgba(255, 255, 255, 0.02)` }}
          variants="boxFirst"
        />

        <Transparant
          style={{ background: `rgba(255, 255, 255, 0.02)` }}
          variants="boxSecond"
        />

        <Nav
          setIsOpen={setIsOpen}
          className="relative z-10 items-center hidden lg:block py-14"
        />

        <BackgroundNav
          className={`flex-col h-screen absolute z-50 transition duration-500 
          ease-in-out justify-evenly p-10 items-center  w-10/12 lg:hidden ${
            isOpen ? "" : "-translate-x-full"
          } bg-gradient-to-br from-[#212f5b] to-transparent`}
          variants="btnClassic"
          setIsOpen={setIsOpen}
        >
          <OvalCmp className="w-[4.375rem] h-[4.375rem]">
            <Heading className="text-2xl font-bold" variants="styleFirst">
              M
            </Heading>
          </OvalCmp>
          {/* isOpen ? "scale-0 -translate-x-full" : "scale-100 translate-x-0" */}
        </BackgroundNav>
        <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />

        <div
          className={`bg-black/50 top-0 bottom-0 left-0 right-0 z-20 absolute 
          transition ease-in-out duration-300 block lg:hidden ${
            isOpen ? "scale-100" : "scale-0 rounded-full"
          }`}
        ></div>

        <Container>
          <ContainerDisplay
            className="grid sm:flex sm:flex-row md:grid sm:items-center 
              md:grid-cols-2 relative"
          >
            <ArticleCss />
            <BookCss
              className="absolute sm:top-0 md:-top-5 lg:-top-10 2xl:-top-12"
              variants="hidden"
            />
          </ContainerDisplay>
        </Container>
      </header>

      <section className="mb-40 mt-0 md:mt-14 lg:mt-20 xl:mt-32">
        <Container
          className="p-5 md:p-0 space-y-11 sm:space-y-10 
          md:space-y-12 lg:space-y-14"
        >
          <ContainerDisplay
            className="grid gap-5 items-center lg:grid-cols-2 xl:grid-cols-3 
          md:flex-nowrap justify-items-end"
          >
            <SectionTitle />
            <SectionParagraf />
          </ContainerDisplay>
          <SectionImage />
        </Container>
      </section>

      <section className="my-40 bg-[#00BAC7]">
        <Container className="p-5 md:p-0">
          <ContainerDisplay
            className="grid gap-6 lg:gap-32 xl:gap-40 lg:grid-cols-3 
           py-16 lg:py-20 xl:py-24 2xl:py-[100px]"
          >
            <TitlePengantar />
            <SubPengantar />
          </ContainerDisplay>
        </Container>
      </section>

      <section className="my-40">
        <Container className="px-5 sm:px-0">
          <ContainerDisplay className="grid lg:grid-cols-2 gap-0 lg:gap-8">
            <ArticleManfaat />
            <BuyBook className="hidden lg:block" />
          </ContainerDisplay>
        </Container>
      </section>

      <section className="my-40">
        <Container className="px-5 sm:px-0">
          <ContainerDisplay className="grid lg:grid-cols-2">
            <MoreImage className="hidden lg:block" />
            <MoreArticle />
          </ContainerDisplay>
        </Container>
      </section>

      <section className="my-40">
        <Container className="px-5 sm:px-0">
          <div className="lg:space-y-20 2xl:space-y-16">
            <BeforeArticle />
            <CourselImage setCount={setCount} />
          </div>
          <Paragraf
            className="text-[#272D3ECC] text-center text-md xl:text-xl
            mt-0 lg:mt-5 2xl:mt-0"
          >
            Halaman 1 dari {count}
          </Paragraf>
        </Container>
      </section>

      <section
        className="my-40 bg-cover bg-no-repeat pt-64 pb-32 sm:pb-48 md:pb-52 lg:pt-56 xl:pb-60"
        style={{ backgroundImage: `url("/img/bgDark.png")` }}
      >
        <Container className="px-5 sm:px-0 space-y-14 sm:space-y-16 lg:space-y-20 xl:space-y-24">
          <PriceArticle />
          <ProductPrice />
          <Paragraf
            className="text-white/80 md:tracking-wide text-lg xl:text-xl
            lg:!leading-8 text-center w-full lg:w-1/2 2xl:w-1/2 mx-auto"
            variants="textNormal"
          >
            *Buku digital akan dikirimkan ke alamat email kamu *Buku fisik
            dikirim 7 hari setelah pemesanan
          </Paragraf>
        </Container>
      </section>

      <section className="my-40">
        <Container className="px-5 md:px-0">
          <ContainerDisplay
            className="flex flex-col lg:flex-row lg:flex-nowrap 
            lg:gap-10 items-center"
          >
            <WriteImage className="hidden lg:block w-full" />
            <WriteArticle className="w-full lg:w-full" />
          </ContainerDisplay>
        </Container>
      </section>

      <section className="my-40">
        <Container
          className="bg-[#EDFCFD] box-border py-16 p-5 md:px-14 
          md:py-24 xl:py-28 xl:px-16 rounded-sm sm:rounded-2xl group
          space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-16 xl:space-y-16 relative"
        >
          <AnimateArrow
            className="absolute hidden md:flex items-center 
            w-10 h-10 md:w-12 md:h-12 lg:h-14 lg:w-14 justify-center
            z-10 right-5 bottom-1/3 translate-y-1/3"
          />

          <AnimateArrow
            className="absolute hidden md:flex items-center 
            w-10 h-10 md:w-12 md:h-12 lg:h-14 lg:w-14 justify-center
            z-10 left-5 bottom-1/3 translate-y-1/3"
            rotate="rotate-180"
          />
          <TestimonalArticle />
          <CourselCards />
        </Container>
      </section>

      <section className="my-40">
        <Container className="px-5 sm:px-0">
          <OrdersBooks />
        </Container>
      </section>

      <footer className="mt-40 bg-[#272D3E] rounded-tr-[3.5rem]">
        <Container className="px-5 sm:px-0 pt-16 md:pt-24 space-y-28 md:space-y-32 lg:space-y-36">
          <SkillArticle />
          <MoreMalaka />
        </Container>
      </footer>
    </Fragment>
  );
}
