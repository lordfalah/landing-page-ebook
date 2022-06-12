import React from "react";
import Button from "../button/Button";
import ListNav from "./ListNav";

const BackgroundNav = ({ className, children, variants, setIsOpen }) => {
  const addClass = className ? className : "";
  const addVariants = variants ? variants : "";

  return (
    <ul className={`flex ${addClass}`}>
      {children}
      <Button onClick={() => setIsOpen(false)} variants={addVariants}>
        <ListNav className=" text-white font-bold">Top</ListNav>
      </Button>
      <Button onClick={() => setIsOpen(false)} variants={addVariants}>
        <ListNav className=" text-white/80">For Everyone</ListNav>
      </Button>
      <Button onClick={() => setIsOpen(false)} variants={addVariants}>
        <ListNav className=" text-white/80">Benefit</ListNav>
      </Button>
      <Button onClick={() => setIsOpen(false)} variants={addVariants}>
        <ListNav className=" text-white/80">Preview</ListNav>
      </Button>
      <Button onClick={() => setIsOpen(false)} variants={addVariants}>
        <ListNav className=" text-white/80">PenuListNavs</ListNav>
      </Button>
    </ul>
  );
};

export default BackgroundNav;
