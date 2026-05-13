import React from "react";

const CustomButton = ({ children, onClick, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group flex items-center justify-center min-h-[44px] text-sm px-3 py-1 md:text-2xl md:pt-1 md:pb-1 md:pl-4 md:pr-4 font-jockey border-black border-4 bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
