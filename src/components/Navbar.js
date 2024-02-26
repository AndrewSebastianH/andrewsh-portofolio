import React from "react";
import CustomButton from "./CustomButton";
import { ReactComponent as HomeIcon } from "../icons/home.svg";

const Navbar = () => {
  return (
    <>
      <div className="border-b-5 ">
        <div className="m-5 flex items-center justify-between">
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
    </>
  );
};

export default Navbar;
