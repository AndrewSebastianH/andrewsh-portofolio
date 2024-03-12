import React from "react";
const CustomButton = ({ children, onClick, href, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center justify-center text-md px-2  md:text-2xl md:pt-1 md:pb-1 md:pl-4 md:pr-4 font-jockey border-black border-4 bg-white rounded-full hover:bg-black hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
