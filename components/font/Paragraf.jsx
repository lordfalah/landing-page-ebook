import React from "react";

const Paragraf = ({ className, children, variants }) => {
  const addClass = className ? className : "";
  const styled = {
    textNormal: "tracking-normal lg:leading-8 md:leading-7",
    textLight: "",
  };

  return (
    <p
      className={`font-sans font-normal leading-relaxed ${addClass} break-words 
      ${variants ? styled[variants] : ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraf;
