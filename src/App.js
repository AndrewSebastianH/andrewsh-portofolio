import "./global.scss";
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import ExpCarousel from "./components/ExpCarousel";
import InfiniteProjectSection from "./components/InfiniteProjectSection";
import ProjectSlider from "./components/ProjectsSlider";
import LanguagesToolsSection from "./components/LanguageToolsSection";
import ContactMeContent from "./components/ContactMeContent";
import CorporatePage from "./components/CorporatePage";
import { constants } from "./components/constants/constants";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [theme, setTheme] = useState("creative");
  const [homeTilt, setHomeTilt] = useState({ x: 0, y: 0 });
  const scrollContainerRef = useRef(null);

  const handleHomeMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
    setHomeTilt({ x, y });
  };

  // Reset scroll position on theme switch
  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [theme]);

  // Convert vertical wheel to horizontal scroll on desktop
  useEffect(() => {
    if (theme !== "creative") return;
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (window.innerWidth < 768) return;
      if (Math.abs(e.deltaX) > 0) return; // already a horizontal gesture
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [theme]);

  return (
    <div data-theme={theme}>
      {/* Theme toggle pill — always visible, outside the fade wrapper */}
      <div className="fixed bottom-5 right-5 z-50">
        <div
          className={`flex rounded-full overflow-hidden font-jockey text-[11px] tracking-widest shadow-xl transition-all duration-300 ${
            theme === "creative"
              ? "border-4 border-black"
              : "border border-slate-300"
          }`}
        >
          <button
            onClick={() => setTheme("creative")}
            className={`px-3 py-2 transition-colors duration-150 ${
              theme === "creative"
                ? "bg-black text-white"
                : "bg-white text-slate-400 hover:bg-slate-50"
            }`}
          >
            CREATIVE
          </button>
          <button
            onClick={() => setTheme("corporate")}
            className={`px-3 py-2 transition-colors duration-150 ${
              theme === "corporate"
                ? "bg-[#1e40af] text-white"
                : "bg-[#1a1a1a] text-slate-400 hover:bg-[#333]"
            }`}
          >
            CORP
          </button>
        </div>
      </div>

      {/* key causes remount + CSS fade-in on every theme switch */}
      <div key={theme} className="theme-fade">
        {theme === "creative" ? (
          <div
            ref={scrollContainerRef}
            className="creative-scroll-container w-full flex flex-col md:flex-row md:overflow-x-auto md:overflow-y-hidden md:snap-x md:snap-mandatory md:h-screen"
          >
            <Navbar onHeightChange={setNavbarHeight} theme={theme} />

            {/* Mobile-only spacer: pushes sections below fixed navbar */}
            <div
              className="md:hidden"
              style={{ height: navbarHeight, flexShrink: 0 }}
            />

            {/* 1 — Home */}
            <section
              id="home"
              className="home-section background relative shrink-0 md:snap-start md:w-screen md:overflow-hidden"
              onMouseMove={handleHomeMouse}
              onMouseLeave={() => setHomeTilt({ x: 0, y: 0 })}
            >
              <div
                className="w-full h-full flex items-center justify-center p-5 md:p-12"
                style={{ perspective: "1200px" }}
              >
                {/* ── 3D ID Card ──────────────────────────── */}
                <div
                  style={{
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${homeTilt.y}deg) rotateY(${homeTilt.x}deg)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  {/* Depth layer 2 — furthest back */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-6px",
                      borderRadius: "22px",
                      background: "rgba(255,255,255,0.06)",
                      transform: "translateZ(-16px)",
                    }}
                  />
                  {/* Depth layer 1 */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-3px",
                      borderRadius: "19px",
                      background: "rgba(255,255,255,0.11)",
                      transform: "translateZ(-8px)",
                    }}
                  />

                  {/* Card face */}
                  <div className="w-[88vw] max-w-[440px] md:w-[440px] border-4 border-black rounded-2xl overflow-hidden bg-white">
                    {/* Header strip */}
                    <div className="bg-black px-6 py-3 flex justify-between items-center">
                      <span className="font-jockey text-white text-xs tracking-[0.25em]">
                        PORTFOLIO PASS
                      </span>
                      <span className="font-jockey text-white text-[10px] opacity-40">
                        #2025-001
                      </span>
                    </div>
                    {/* Gradient accent line */}
                    <div
                      className="h-[3px]"
                      style={{
                        background:
                          "linear-gradient(90deg,#60a5fa,#a78bfa,#f472b6,#fb923c)",
                      }}
                    />

                    {/* Card body */}
                    <div className="p-6">
                      {/* Photo + name/title */}
                      <div className="flex gap-5 items-start">
                        <img
                          className="w-24 h-[116px] object-cover object-top border-2 border-black rounded shrink-0"
                          src="./assets/id_portrait.png"
                          alt="Andrew Sebastian Hardianta"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-bebas text-2xl leading-tight">
                            ANDREW SEBASTIAN
                          </div>
                          <div className="font-bebas text-2xl leading-tight mb-2">
                            HARDIANTA
                          </div>
                          <div className="border-t border-gray-300 pt-2 space-y-1">
                            <div className="font-jockey text-[11px] tracking-[0.12em] text-gray-600">
                              FULL STACK DEVELOPER
                            </div>
                            {/* <div className="font-jockey text-[9px] tracking-[0.1em] text-gray-400">IT FRESH GRADUATE · 2025</div> */}
                          </div>
                        </div>
                      </div>

                      {/* Dashed divider */}
                      <div className="border-t-2 border-dashed border-gray-200 my-5" />

                      {/* Bio */}
                      <p className="font-bebas text-sm leading-snug text-gray-700">
                        THANK YOU FOR VISITING! I'M AN IT FRESH GRADUATE WHO
                        BUILT THIS PORTFOLIO AS A FUN LEARNING PROJECT TO SHARE
                        MY JOURNEY AND EXPERIENCES.
                      </p>

                      {/* Barcode */}
                      <div className="mt-5 flex h-7">
                        {constants.barcode.map((w, i) => (
                          <div
                            key={i}
                            style={{
                              flex: w,
                              background: i % 2 === 0 ? "#000" : "transparent",
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-center font-mono text-[7px] text-gray-400 mt-1 tracking-widest">
                        0101 0110 0010 1100 0011 1001
                      </p>
                    </div>
                  </div>

                  {/* Gloss highlight — angle shifts with mouse */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "16px",
                      background: `linear-gradient(${125 + homeTilt.x * 3}deg, rgba(255,255,255,0.18) 0%, transparent 55%)`,
                      transform: "translateZ(2px)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </section>

            {/* 2 — Experience */}
            <section
              id="experience"
              className="exp-section background2 shrink-0 bg-black md:snap-start md:w-screen md:overflow-hidden"
            >
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
            <section
              id="project"
              className="projects-section relative md:shrink-0 md:p-8 bg-black md:snap-start md:w-screen md:overflow-hidden"
            >
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
            <section
              id="languages"
              className="languages-section shrink-0 p-4 md:p-8 bg-black md:snap-start md:w-screen md:overflow-y-auto"
            >
              <div className="flex justify-end">
                <div className="text-white font-jockey font-outline-1-white md:font-outline-2-white text-2xl md:text-4xl pr-2 md:pr-10">
                  LANGUAGES & TOOLS
                </div>
              </div>
              <LanguagesToolsSection />
            </section>

            {/* 5 — Contact */}
            <section
              id="contact-me"
              className="contact-section shrink-0 background3 bg-white md:snap-start md:w-screen md:overflow-hidden"
            >
              {/* p-4/p-8 here (not on the section) so it's visible below the navbar */}
              <div className="h-full flex flex-col p-4 md:p-8">
                <div className="flex-1 bg-black grid place-content-center px-6 py-8 md:py-0">
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
        ) : (
          <CorporatePage />
        )}
      </div>
    </div>
  );
}

export default App;
