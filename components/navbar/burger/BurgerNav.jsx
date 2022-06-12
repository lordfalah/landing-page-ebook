import React from "react";
import { Fragment } from "react";

const BurgerNav = ({ className }) => {
  const addClass = className ? className : "";
  return (
    <Fragment>
      <span
        className={`${addClass} rounded-full block my-2 w-[33.5px] h-[3px] bg-white 
        transition ease-in-out duration-300`}
      ></span>
    </Fragment>
  );
};

export default BurgerNav;
