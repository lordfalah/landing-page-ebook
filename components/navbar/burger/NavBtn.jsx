import React from "react";
import Container from "../../layout/Container";
import ListNav from "../ListNav";
import BurgerNav from "./BurgerNav";

const NavBtn = ({ setIsOpen, isOpen, className }) => {
  const addClass = className ? className : "";

  return (
    <Container
      className={`p-5 flex lg:hidden justify-between relative z-50 ${addClass}`}
    >
      <ListNav
        className={`style-list relative transition-transform duration-300 w-16 h-16 md:w-20 md:h-20
        ${isOpen ? "scale-0 -translate-x-full" : "scale-100 translate-x-0"}`}
      >
        <span className="style-first-span">M</span>
      </ListNav>
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
