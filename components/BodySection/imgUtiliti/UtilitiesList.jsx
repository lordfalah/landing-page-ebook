import React from "react";

const UtilitiesList = ({ className, children, source }) => {
  const addClass = className ? className : "";

  return (
    <article className={`${addClass}`}>
      <div className={`${source.id === 3 ? "w-full space-y-4" : "space-y-4"}`}>
        <img
          className="w-full"
          src={`/tailwind/${source.img}.png`}
          alt={source.title}
        />
        {children}
      </div>
    </article>
  );
};

export default UtilitiesList;
