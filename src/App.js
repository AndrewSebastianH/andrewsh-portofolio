// App.js

import "./global.scss";
import Navbar, { navbarHeight } from "./components/Navbar";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Spline from "@splinetool/react-spline";

gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase);

function App() {
  return (
    // Wrapper
    <div className="min-w-max md:h-screen flex flex-col ">
      <Navbar />
      <div className="mainContainer absolute -z-40 top-0 left-0 right-0 h-full background" />
      {/* 1st Sect */}
      <section className="shrink-0 p-8">
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
                CREATED THIS PORTFOLIO WEBSITE AS A FUN LEARNING PROJECT AND TO
                SHARE MY EXPERIENCES WITH OTHER PEOPLE.
              </p>
            </div>
            <div className="flex-1justify-center">
              <img
                className="w-[67%] align-center "
                src="./assets/Portrair.png"
                alt="Portrait"
              />
            </div>
          </div>

          <div className="absolute top-48 right-0 ">
            <Spline scene="https://prod.spline.design/t3Gpmaewj-TjBQTp/scene.splinecode" />
          </div>
        </div>
      </section>
      {/* 2nd Sect */}
      <section className="shrink-0 p-8">wahuu nigga</section>
      {/* 3rd Sect */}
      <section className="shrink-0 p-8">3</section>
    </div>
  );
}

export default App;
