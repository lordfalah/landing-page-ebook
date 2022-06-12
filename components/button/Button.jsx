import React from "react";

const Button = ({ children, className, variants, ...props }) => {
  const addClass = className ? className : "";

  const styled = {
    btnClassic:
      "rounded-md flex justify-start w-full hover:bg-slate-400/40 to-transparent py-4 px-10 transition-colors duration-300",
    btnEffect:
      "text-[#F4F7FF] shadow-xl shadow-[#00BAC7]/40 py-1 px-7 sm:py-3 sm:px-9 md:py-3 md:px-10 lg:py-4 lg:px-9",
    btnType: "py-3 px-10",
  };

  return (
    <button
      {...props}
      type="button"
      className={`${addClass} ${variants ? styled[variants] : ""} font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
