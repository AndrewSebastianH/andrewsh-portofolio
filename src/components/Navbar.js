// Navbar.jsx

import React, { useState, useEffect, useRef } from "react";
import CustomButton from "./CustomButton";
import "../styles/navbar.scss";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { constants } from "./constants/constants";
import Typewriter from "typewriter-effect";

const firstLine = constants?.marqueeContents[0];

const Marquee = () => {
  const [currentMarqueeContent, setCurrentMarqueeContent] = useState(firstLine);

  const handleAnimationIteration = () => {
    const randomIndex = Math.floor(
      Math.random() * constants.marqueeContents.length
    );
    setCurrentMarqueeContent(constants.marqueeContents[randomIndex]);
  };

  return (
    <div className="marquee-container">
      <div
        className="tracking-widest marquee-content font-jockey flex"
        onAnimationIteration={handleAnimationIteration}
      >
        <p>{currentMarqueeContent}</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${height}px`
    );
  }, []);

  return (
    <div
      ref={navbarRef}
      className="max-h-[140px] max-w-[100vw] sticky z-50 top-0 left-0 right-0 bg-white"
    >
      <div className="m-5">
        <div className="flex bg-white items-center justify-between">
          <div className="buttons gap-3 flex">
            <CustomButton>
              <HomeIcon />
            </CustomButton>
            <CustomButton>EXP</CustomButton>
            <CustomButton>PROJECTS</CustomButton>
            <CustomButton>CONTACT ME</CustomButton>
          </div>
          <div className="text-2.5xl font-bebas">
            <Typewriter
              options={{
                strings: [
                  "Andrew Sebastian Hardianta",
                  "IT Student",
                  "Hardworker",
                  "Programmer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 3500,
              }}
            />
          </div>
        </div>
      </div>
      <div className="border-black border-b-4"></div>
      <div className="bg-yellow-200 border-black border-b-4">
        <Marquee />
      </div>
    </div>
  );
};

export default Navbar;
