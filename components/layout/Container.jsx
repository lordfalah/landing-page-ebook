import React from "react";

const Container = ({ children, className }) => {
  const addClass = className ? className : "";
  return <div className={`${addClass} container mx-auto`}>{children}</div>;
};

export default Container;
