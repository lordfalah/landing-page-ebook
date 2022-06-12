import React from "react";
import { Fragment } from "react";

const ListNav = ({ children, className }) => {
  const addClass = className ? className : "";

  return (
    <Fragment>
      <li className={`${addClass} font-sans text-base`}>{children}</li>
    </Fragment>
  );
};

export default ListNav;
