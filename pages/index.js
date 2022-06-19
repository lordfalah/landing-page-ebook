import Head from "next/head";
import { Fragment } from "react";
import { useState } from "react";
import ArticleCss from "../components/hero/ArticleCss";
import BookCss from "../components/hero/BookCss";
import Container from "../components/layout/Container";
import BackgroundNav from "../components/navbar/BackgroundNav";
import NavBtn from "../components/navbar/burger/NavBtn";
import ListNav from "../components/navbar/ListNav";
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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Head>
        <title>Landing Page Ebook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
            isOpen ? "translate-x-0" : "-translate-x-full"
          } bg-gradient-to-br from-[#212f5b] to-transparent`}
          variants="btnClassic"
          setIsOpen={setIsOpen}
        >
          <ListNav className="style-list w-24 h-24">
            <span className="style-first-span">M</span>
          </ListNav>
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
        <Container className="p-5 md:p-0 space-y-16">
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
        <Container className="p-5 sm:p-0">
          <ContainerDisplay className="grid lg:grid-cols-2 gap-0 lg:gap-8">
            <ArticleManfaat />
            <BuyBook className="hidden lg:block" />
          </ContainerDisplay>
        </Container>
      </section>

      <section className="my-40">
        <Container className="p-5 sm:p-0">
          <ContainerDisplay className="grid lg:grid-cols-2">
            <MoreImage className="hidden lg:block" />
            <MoreArticle />
          </ContainerDisplay>
        </Container>
      </section>
    </Fragment>
  );
}
