import React from "react";
import CustomButton from "./CustomButton";
import "../styles/navbar.scss";
import { ReactComponent as HomeIcon } from "../icons/home.svg";

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content font-jockey">
        ANDREW SEBASTIAN HARDIANTA ♦ IT STUDENT ♠ ASPIRING SOFTWARE DEVELOPER
      </div>
    </div>
  );
};

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
      <div className=" container bg-yellow-200 border-black border-b-4">
        <Marquee />
      </div>
    </>
  );
};

export default Navbar;
