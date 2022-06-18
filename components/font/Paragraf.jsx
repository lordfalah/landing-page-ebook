import React from "react";

const Paragraf = ({ className, children, variants }) => {
  const addClass = className ? className : "";
  const styled = {
    textNormal: "tracking-normal font-normal md:leading-7",
    textMedium: "font-medium",
    textLight: "",
  };

  return (
    <p
      className={`font-sans leading-relaxed ${addClass} break-words 
      ${variants ? styled[variants] : ""}`}
    >
      {children}
    </p>
  );
};

export default Paragraf;
