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
        className="tracking-widest marquee-content font-jockey flex text-white"
        onAnimationIteration={handleAnimationIteration}
      >
        <p>{currentMarqueeContent}</p>
      </div>
    </div>
  );
};

const Navbar = ({ onHeightChange }) => {
  const navbarRef = useRef(null);

  const scrollTo = (sectionId) => {
    const targetContainer = document.getElementById(sectionId);
    console.log(targetContainer);

    if (targetContainer) {
      targetContainer.scrollIntoView({ behavior: "smooth" });
      // const y =
      //   targetContainer.getBoundingClientRect().top + window.scrollY + yOffset;
      // window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const height = navbarRef.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${height}px`
    );
    const handleResize = () => {
      onHeightChange(height);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onHeightChange]);

  return (
    <>
      <div ref={navbarRef} className="fixed z-30 top-0 left-0 right-0 bg-white">
        <div className="m-5">
          <div className="flex bg-white items-center justify-between">
            <div className="buttons w-full justify-between md:justify-normal gap-3 flex">
              <CustomButton
                onClick={() => scrollTo("home", 0)}
                className="icon-button"
              >
                <HomeIcon className="icon w-5 md:w-8" />
              </CustomButton>
              <CustomButton onClick={() => scrollTo("experience", 0)}>
                EXP
              </CustomButton>
              <CustomButton onClick={() => scrollTo("project", 0)}>
                PROJECTS
              </CustomButton>
              <CustomButton onClick={() => scrollTo("contact-me", 0)}>
                CONTACT ME
              </CustomButton>
            </div>
            <div className="hidden md:flex text-2.5xl font-bebas whitespace-nowrap">
              <Typewriter
                options={{
                  strings: [
                    "Andrew Sebastian Hardianta",
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
        <div className="sticky bg-[#222222] border-black border-b-4">
          <Marquee />
        </div>
      </div>
    </>
  );
};

export default Navbar;
