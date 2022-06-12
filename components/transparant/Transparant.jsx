import React from "react";

const Transparant = ({ style, variants }) => {
  const addStyle = style ? style : null;
  const styled = {
    oval: "bg-gradient-to-r from-white/5 to-white/0 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] w-[400px] h-[400px] rounded-full absolute -right-28 -top-20",
    boxFirst:
      "w-40 h-96 lg:w-[244px] lg:h-[500px] top-44 left-8 md:w-52 md:h-[450px] absolute",
    boxSecond:
      "lg:w-[210px] lg:h-[500px] top-72 w-32 h-72 md:w-44 md:h-[430px] rounded-lg absolute",
  };

  return (
    <div
      style={addStyle}
      className={` ${styled[variants]} z-0 overflow-hidden`}
    ></div>
  );
};

export default Transparant;
