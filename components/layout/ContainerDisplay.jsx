import React from "react";

const ContainerDisplay = ({ className, children }) => {
  const addClass = className ? className : "";
  return <div className={`flex-wrap ${addClass}`}>{children}</div>;
};

export default ContainerDisplay;
