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
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const updateHeight = () => {
      const height = navbarRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      onHeightChange(height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [onHeightChange]);

  return (
    <div ref={navbarRef} className="fixed z-30 top-0 left-0 right-0 bg-white">
      <div className="px-4 py-2 md:m-5 md:py-0">
        <div className="flex bg-white items-center justify-between">
          <div className="buttons flex gap-2 md:gap-3">
            <CustomButton onClick={() => scrollTo("home")} className="icon-button">
              <HomeIcon className="icon w-5 md:w-7" />
            </CustomButton>
            <CustomButton onClick={() => scrollTo("experience")}>EXP</CustomButton>
            <CustomButton onClick={() => scrollTo("project")}>PROJECTS</CustomButton>
            <CustomButton onClick={() => scrollTo("languages")}>TOOLS</CustomButton>
            <CustomButton onClick={() => scrollTo("contact-me")}>
              <span className="hidden sm:inline">CONTACT ME</span>
              <span className="sm:hidden">CONTACT</span>
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
      <div className="border-black border-b-4" />
      <div className="sticky bg-[#222222] border-black border-b-4">
        <Marquee />
      </div>
    </div>
  );
};

export default Navbar;
