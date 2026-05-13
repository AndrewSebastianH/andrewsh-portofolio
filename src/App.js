import "./global.scss";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ExpCarousel from "./components/ExpCarousel";
import InfiniteProjectSection from "./components/InfiniteProjectSection";
import ProjectSlider from "./components/ProjectsSlider";
import LanguagesToolsSection from "./components/LanguageToolsSection";
import ContactMeContent from "./components/ContactMeContent";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <div className="w-full md:h-screen flex flex-col">
      <Navbar onHeightChange={setNavbarHeight} />
      <div style={{ paddingTop: `${navbarHeight}px` }}>

        {/* 1 — Home */}
        <section id="home" className="home-section relative shrink-0 p-3 md:p-8">
          <div className="mainContainer absolute -z-40 top-0 left-0 right-0 h-full background" />
          <div className="w-full h-full rounded-2xl shadow border-black border-4 bg-white overflow-hidden flex flex-col">

            {/* HELLO! — rotated label on desktop, inline on mobile */}
            <div className="font-jockey text-2xl md:text-4xl md:-rotate-12 md:relative shrink-0">
              <p className="font-outline-1 md:font-outline-3 text-black pl-4 pt-3 md:pl-0 md:pt-0 md:absolute md:left-1 md:bottom-5 md:-translate-y-1/2">
                HELLO!
              </p>
            </div>

            {/* Content area */}
            <div className="flex flex-col md:flex-row flex-1 min-h-0 md:gap-5">

              {/* Portrait — mobile (circular, above text) */}
              <div className="flex md:hidden justify-center items-center py-4">
                <img
                  className="w-[42%] max-w-[148px] rounded-full border-4 border-black object-cover hover:animate-wiggle"
                  src="./assets/Portrair.png"
                  alt="Andrew Sebastian Hardianta"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col md:justify-center px-5 pb-5 md:p-5 md:max-w-[50%] text-center md:text-left">
                <p className="font-bebas text-xl md:text-2xl">
                  THANK YOU FOR VISITING MY PAGE!
                </p>
                <br />
                <p className="font-bebas text-base md:text-2xl leading-snug">
                  I'M ANDREW, AN INFORMATION TECHNOLOGY FRESH GRADUATE. I
                  CREATED THIS PORTFOLIO WEBSITE AS A FUN LEARNING PROJECT AND
                  TO SHARE MY EXPERIENCES WITH OTHER PEOPLE.
                </p>
              </div>

              {/* Portrait — desktop (large, right side) */}
              <div className="hidden md:flex w-[90%] justify-center items-center">
                <img
                  className="portrait hover:animate-wiggle w-[60%]"
                  src="./assets/Portrair.png"
                  alt="Andrew Sebastian Hardianta"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2 — Experience */}
      <section id="experience" className="exp-section background2 shrink-0 bg-black">
        <div className="flex justify-end">
          <div className="text-white font-jockey font-outline-1-white md:font-outline-2-white text-2xl md:text-4xl pr-6 md:pr-10 pt-2 md:pt-0">
            EXPERIENCES & EDUCATION
          </div>
        </div>
        <div className="md:flex h-[85%]">
          <ExpCarousel />
        </div>
      </section>

      {/* 3 — Projects */}
      <section id="project" className="projects-section relative md:shrink-0 md:p-8 bg-black">
        <div className="flex flex-col md:flex-row h-full overflow-y-hidden">
          <div className="flex pl-5 pt-2 md:hidden text-white text-2xl font-jockey">
            PROJECTS
          </div>
          <div className="hidden md:flex leading-snug w-[40%]">
            <InfiniteProjectSection text="PROJECTS" />
          </div>
          <div className="h-full p-5 md:p-0 md:h-full w-fit md:flex">
            <ProjectSlider className="z-0" />
          </div>
        </div>
      </section>

      {/* 4 — Languages & Tools */}
      <section id="languages" className="languages-section shrink-0 p-4 md:p-8 bg-black">
        <div className="flex justify-end">
          <div className="text-white font-jockey font-outline-1-white md:font-outline-2-white text-2xl md:text-4xl pr-2 md:pr-10">
            LANGUAGES & TOOLS
          </div>
        </div>
        <LanguagesToolsSection />
      </section>

      {/* 5 — Contact */}
      <section id="contact-me" className="contact-section shrink-0 z-30 background3 bg-white p-4 md:p-8 md:pt-10">
        {/* On mobile: fill available height. On desktop: 16/9 box centered in the section. */}
        <div className="h-full w-full md:aspect-[16/9] md:overflow-hidden">
          <div className="bg-black h-full grid place-content-center px-6 py-10 md:py-0">
            <div className="text-white font-black text-4xl md:text-9xl text-center">
              CONTACT ME!
            </div>
            <div className="w-full mt-2">
              <ContactMeContent textColor="white" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
