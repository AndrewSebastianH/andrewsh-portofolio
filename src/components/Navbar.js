import React from "react";
import CustomButton from "./CustomButton";
import { ReactComponent as HomeIcon } from "../icons/home.svg";

const Navbar = () => {
  return (
    <>
      <div className="m-5">
        <div className="flex items-center justify-between">
          <div className="buttons gap-3 flex">
            <CustomButton>
              <HomeIcon />
            </CustomButton>
            <CustomButton>EXP</CustomButton>
            <CustomButton>PROJECTS</CustomButton>
            <CustomButton>CONTACT ME</CustomButton>
          </div>
          <div className="text-4xl font-bebas">ANDREW SEBASTIAN HARDIANTA</div>
        </div>
      </div>
      <div className="border-black border-b-4"></div>
    </>
  );
};

export default Navbar;
