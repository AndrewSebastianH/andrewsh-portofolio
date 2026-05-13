import React from "react";

const CustomButton = ({ children, onClick, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`custom-btn group flex items-center justify-center min-h-[34px] text-sm px-3 py-1 font-jockey border-black border-4 bg-white rounded-full hover:bg-black hover:text-white transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
