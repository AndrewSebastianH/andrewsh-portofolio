// App.js

import "./global.scss";
import { useState } from "react";
import Navbar, { navbarHeight } from "./components/Navbar";
import ExpCarousel from "./components/ExpCarousel";
import InfiniteProjectSection from "./components/InfiniteProjectSection";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase);

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  return (
    // Wrapper
    <div className="min-w-max md:h-screen flex flex-col ">
      {/* Ghost */}
      {/* <div className="absolute top-48 right-0 z-30">
        <Spline scene="https://prod.spline.design/t3Gpmaewj-TjBQTp/scene.splinecode" />
      </div> */}
      <Navbar onHeightChange={setNavbarHeight} />
      <div style={{ paddingTop: `${navbarHeight}px` }}>
        {/* 1st Sect */}
        <section className="shrink-0 p-8 ">
          <div className="mainContainer absolute -z-40 top-0 left-0 right-0 h-full background " />

          <div className="w-full rounded-3xl shadow sm:p-8 border-black border-4 bg-white">
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

      {/* 2nd Sect */}
      <section className="h-screen shrink-0 pt-5 bg-black border-t-4 border-black ">
        <div className="flex justify-end">
          <div className="text-white font-jockey font-outline-2-white text-4xl pr-10">
            EXPERIENCES / EDUCATION
          </div>
        </div>
        <div className="">
          <ExpCarousel />
        </div>
      </section>

      {/* 3rd Sect */}
      <section className="relative overflow-hidden flex flex-col h-screen shrink-0 p-8 bg-black border-t-4 border-black">
        <div className="absolute -top-10 leading-snug">
          <InfiniteProjectSection />
        </div>
        <div className="text-white ">kontol</div>
      </section>
      <section className="h-screen shrink-0 p-8 bg-blue-700">
        <div className="font-jockey text-3xl justi">CONTACT ME!</div>
      </section>
    </div>
  );
}

export default App;
