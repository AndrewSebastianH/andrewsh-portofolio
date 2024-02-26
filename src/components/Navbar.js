import React from "react";
import CustomButton from "./CustomButton";
import { ReactComponent as HomeIcon } from "../icons/home.svg";

const Navbar = () => {
  return (
    <>
      <div className="buttons">
        <CustomButton>
          <HomeIcon />
        </CustomButton>
        <CustomButton>EXP</CustomButton>
        <CustomButton>PROJECTS</CustomButton>
        <CustomButton>CONTACT ME</CustomButton>
      </div>
      <div className="font-bebas name">ANDREW SEBASTIAN HARDIANTA</div>
    </>
  );
};

export default Navbar;
