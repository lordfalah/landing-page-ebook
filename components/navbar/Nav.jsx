import React from "react";
import OvalCmp from "../BodySection/imgUtiliti/OvalCmp";
import Button from "../button/Button";
import Heading from "../font/Heading";
import BackgroundNav from "./BackgroundNav";
import ListNav from "./ListNav";

const Nav = ({ className, setIsOpen }) => {
  const addClass = className ? className : "";
  return (
    <nav className={`lg:flex justify-around ${addClass}`}>
      <ul className={`flex gap-7 xl:gap-8 items-center`}>
        <OvalCmp className="lg:w-14 lg:h-14">
          <Heading className="text-2xl font-bold" variants="styleFirst">
            M
          </Heading>
        </OvalCmp>
        <ListNav className="text-white font-bold">Mr. Falah</ListNav>
      </ul>

      <BackgroundNav className="gap-12" setIsOpen={setIsOpen} />

      <ul>
        <ListNav className="text-white font-bold">
          <Button
            className="bg-white text-[#272D3E] rounded-full font-bold"
            variants="btnType"
          >
            Donwload
          </Button>
        </ListNav>
      </ul>
    </nav>
  );
};

export default Nav;
