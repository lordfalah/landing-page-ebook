import React from "react";

const Download = ({ className, fill }) => {
  const addClass = className ? className : "h-6 w-6";
  const addFill = fill ? fill : "none";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={addClass}
      fill={addFill}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  );
};

export default Download;
