import React from "react";
const CustomButton = ({ children, onClick, href, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      href={href}
      disabled={disabled}
      class={`font-jockey text-black border-black border-2 bg-white rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
