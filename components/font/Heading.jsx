import React from "react";

const Heading = ({ className, children, variants }) => {
  const styled = {
    styleTitle:
      "lg:text-4xl sm:text-4xl text-3xl 2xl:text-5xl lg:leading-relaxed xl:leading-normal md:leading-normal",
    styleSubTitle:
      "leading-normal md:leading-10 lg:leading-[44px] font-medium text-2xl md:text-3xl lg:text-[32px]",
    styleMedium: "font-sans font-medium leading-relaxed tracking-wide",
  };

  const addClass = className ? className : "";
  return (
    <h1
      className={`font-sans ${addClass} ${
        variants ? styled[variants] : ""
      } font-medium break-words`}
    >
      {children}
    </h1>
  );
};

export default Heading;
