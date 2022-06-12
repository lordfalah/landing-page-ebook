import React from "react";
import Button from "../button/Button";
import BackgroundNav from "./BackgroundNav";
import ListNav from "./ListNav";

const Nav = ({ className, setIsOpen }) => {
  const addClass = className ? className : "";
  return (
    <nav className={`lg:flex justify-around ${addClass}`}>
      <ul className={`flex gap-5 items-center`}>
        <ListNav className="style-list">
          <span className="style-first-span">M</span>
        </ListNav>
        <ListNav className="text-white font-bold">Mr. Falah</ListNav>
      </ul>

      <BackgroundNav className="gap-12" setIsOpen={setIsOpen} />

      <ul>
        <ListNav className="text-white font-bold">
          <Button
            className="bg-white text-[#272D3E] rounded-full"
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
