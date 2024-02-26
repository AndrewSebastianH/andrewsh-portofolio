import React from "react";
const CustomButton = ({ children, onClick, href, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      href={href}
      disabled={disabled}
      class={`text-2xl pt-1 pb-1 pl-4 pr-4 font-jockey text-black border-black border-4 bg-white rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
