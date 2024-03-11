import React from "react";
const CustomButton = ({ children, onClick, href, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center justify-center text-2xl pt-1 pb-1 pl-4 pr-4 font-jockey border-black border-4 bg-white rounded-full hover:bg-black hover:text-white transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
