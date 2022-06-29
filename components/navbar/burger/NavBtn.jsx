import React from "react";
import OvalCmp from "../../BodySection/imgUtiliti/OvalCmp";
import Heading from "../../font/Heading";
import Container from "../../layout/Container";
import BurgerNav from "./BurgerNav";

const NavBtn = ({ setIsOpen, isOpen, className }) => {
  const addClass = className ? className : "";

  return (
    <Container
      className={`p-5 flex lg:hidden justify-between relative z-50 ${addClass}`}
    >
      <OvalCmp
        className={`lg:w-14 lg:h-14 relative transition-transform duration-300 w-14 
        h-14  ${
          isOpen ? "scale-0 -translate-x-full" : "scale-100 translate-x-0"
        }`}
      >
        <Heading className="text-2xl font-bold" variants="styleFirst">
          M
        </Heading>
      </OvalCmp>
      <button
        type="button"
        className="text-white"
        onClick={() => setIsOpen((open) => !open)}
      >
        <BurgerNav
          className={`${
            isOpen ? "origin-top-left rotate-45 " : "origin-top-left"
          }`}
        />
        <BurgerNav className={`${isOpen ? "scale-0 translate-x-10" : ""}`} />
        <BurgerNav
          className={`${
            isOpen ? "origin-bottom-left -rotate-45" : "origin-bottom-left"
          }`}
        />
      </button>
    </Container>
  );
};

export default NavBtn;
