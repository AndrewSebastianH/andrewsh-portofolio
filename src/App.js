// App.js

import "./global.scss";
import React, { useState, useRef } from "react";
import Navbar, { navbarHeight } from "./components/Navbar";
import ExpCarousel from "./components/ExpCarousel";
import InfiniteProjectSection from "./components/InfiniteProjectSection";
import ProjectSlider from "./components/ProjectsSlider";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import Spline from "@splinetool/react-spline";
import ContactMeContent from "./components/ContactMeContent";

gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase);

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const scrollToFormContainer = () => {
    const formContainer = document.getElementById("form-container");

    if (formContainer) {
      formContainer.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    // Wrapper
    <div className="min-w-max md:h-screen flex flex-col ">
      <Navbar onHeightChange={setNavbarHeight} />
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {/* 1st Sect - Home*/}
        <section id="home" className="home-section relative shrink-0 p-8 ">
          <div className="mainContainer absolute -z-40 top-0 left-0 right-0 h-full background " />
          <div className="absolute">
            <Spline scene="https://prod.spline.design/t3Gpmaewj-TjBQTp/scene.splinecode" />
          </div>
          <div className="w-full rounded-2xl shadow sm:p-8 border-black border-4 bg-white">
            <div className="font-jockey text-4xl md:-rotate-12">
              <p className="font-outline-3 text-black pl-5 md:pl-0 md:absolute xl:left-1 bottom-1 xl:bottom-5 xl:-translate-y-1/2">
                HELLO!
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="flex-1 p-5 md:pt-28">
                <p className="font-bebas text-2xl">
                  THANK YOU FOR VISITING MY PAGE!
                </p>
                <br></br>
                <p className="font-bebas text-2xl md:max-w-lg">
                  I’M ANDREW, A STUDENT MAJORING IN INFORMATION TECHNOLOGY. I
                  CREATED THIS PORTFOLIO WEBSITE AS A FUN LEARNING PROJECT AND
                  TO SHARE MY EXPERIENCES WITH OTHER PEOPLE.
                </p>
              </div>
              <div className="justify-items-center">
                <img
                  className="portrait md:visible md:w-[67%] align-center hover:animate-wiggle "
                  src="./assets/Portrair.png"
                  alt="Portrait"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2nd Sect - Experience*/}
      <section
        id="experience"
        className="exp-section background2 shrink-0 bg-black"
      >
        <div className="flex justify-end">
          <div className="text-white font-jockey font-outline-2-white text-4xl pr-10">
            EXPERIENCES / EDUCATION
          </div>
        </div>
        <div className="">
          <ExpCarousel />
        </div>
      </section>

      {/* 3rd Sect - Projects*/}
      <section
        id="project"
        className="projects-section relative shrink-0 p-8 bg-black "
      >
        <div className="overflow-y-hidden ">
          <div className="flex flex-row">
            <div className="leading-snug w-[40%]">
              <InfiniteProjectSection text="PROJECTS" />
            </div>
            <div className="flex-initial grow-0 flex-row md:h-[500px] w-fit">
              <ProjectSlider className="z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 4th Sect - Contact me*/}
      <section
        id="contact-me"
        className="contact-section shrink-0 z-30 background3 bg-white p-8 pt-10"
      >
        <div className="h-full w-full aspect-[16/9] overflow-hidden">
          <div className="bg-black h-full  grid place-content-center ">
            <div className="text-white font-black text-9xl">CONTACT ME!</div>
            <div className="w-full">
              <ContactMeContent textColor="white" />
            </div>
          </div>

          {/* <div className="diff-resizer"></div>
          <div className="diff-item-1">
            <div className="bg-black text-white text-9xl grid place-content-center">
              CONTACT ME!
            </div>
            <ContactMeContent textColor="white" />
          </div>
          <div className="diff-item-2">
            <div className="bg-white text-9xl grid place-content-center">
              CONTACT ME!
            </div>
            <ContactMeContent className="z-50 absolute" textColor="black" />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default App;
