import React from "react";

const ContentPage = ({ children }) => {
  return (
    <div
      className={`grid sm:flex sm:flex-row md:grid sm:items-center 
    md:grid-cols-2 relative `}
    >
      {children}
    </div>
  );
};

export default ContentPage;
