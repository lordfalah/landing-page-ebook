import React from "react";

const Transparant = ({ style, variants }) => {
  const addStyle = style ? style : null;
  const styled = {
    oval: "bg-gradient-to-r from-white/5 to-white/0 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full absolute sm:-right-28 sm:-top-20 -right-36 top-0",
    boxFirst:
      "w-40 h-80 top-80 sm:w-40 sm:h-96 lg:w-[244px] lg:h-[500px] sm:top-60 left-14 md:top-44 md:left-8 md:w-52 md:h-[450px] absolute",
    boxSecond:
      "lg:w-[210px] lg:h-[500px] top-72 -left-5 md:left-5 z-0  w-32 h-72 md:w-44 md:h-[430px] rounded-lg absolute",
  };

  return (
    <div
      style={addStyle}
      className={`${styled[variants]} t z-0 overflow-hidden`}
    ></div>
  );
};

export default Transparant;
