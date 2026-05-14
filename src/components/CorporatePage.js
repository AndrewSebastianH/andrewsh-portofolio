import React from "react";
import Typewriter from "typewriter-effect";
import { constants } from "./constants/constants";
import { ReactComponent as LinkedInIcon } from "../icons/linkedin.svg";
import { ReactComponent as GmailIcon } from "../icons/gmail.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiGo,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiSass,
  SiMaterialdesign,
  SiAntdesign,
  SiMongodb,
  SiRedis,
} from "react-icons/si";

const tools = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    division: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    division: "frontend",
  },
  { name: "React", icon: SiReact, color: "#61DAFB", division: "frontend" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    division: "frontend",
  },
  { name: "Flutter", icon: SiFlutter, color: "#02569B", division: "frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38BDF8",
    division: "frontend",
  },
  { name: "Sass", icon: SiSass, color: "#CC6699", division: "frontend" },
  {
    name: "Material UI",
    icon: SiMaterialdesign,
    color: "#007FFF",
    division: "frontend",
  },
  {
    name: "Ant Design",
    icon: SiAntdesign,
    color: "#1677FF",
    division: "frontend",
  },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", division: "backend" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", division: "backend" },
  { name: "Go", icon: SiGo, color: "#00ADD8", division: "backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", division: "database" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    division: "database",
  },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", division: "database" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", division: "database" },
];

const SectionLabel = ({ children }) => (
  <p className="font-jockey text-[11px] tracking-[0.25em] text-slate-400 uppercase mb-1">
    {children}
  </p>
);

const SectionDivider = () => (
  <div className="w-12 h-1 bg-blue-600 rounded-full mb-12" />
);

// ── Navbar ────────────────────────────────────────────────
const CorporateNavbar = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const navItems = [
    ["corp-home", "ABOUT"],
    ["corp-experience", "EXPERIENCE"],
    ["corp-projects", "PERSONAL PROJECTS"],
    ["corp-skills", "SKILLS"],
    ["corp-contact", "CONTACT"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-slate-200 h-14 flex items-center px-6 md:px-12">
      <span className="font-bebas text-xl tracking-[0.2em] text-slate-800 mr-auto">
        ASH
      </span>
      <div className="hidden md:flex gap-7">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-jockey text-[11px] tracking-widest text-slate-400 hover:text-slate-900 transition-colors duration-150"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

// ── Hero ──────────────────────────────────────────────────
const CorporateHero = () => (
  <section
    id="corp-home"
    className="min-h-screen bg-[#f8fafc] flex items-center pt-14 px-6 md:px-12"
  >
    <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 py-16">
      <div className="flex-1 text-center md:text-left">
        <SectionLabel>Information Technology · Fresh Graduate</SectionLabel>
        <h1 className="font-bebas text-5xl md:text-7xl text-slate-900 leading-[0.95] mb-4">
          Andrew Sebastian
          <br />
          Hardianta
        </h1>
        <div className="font-jockey text-blue-600 text-base md:text-lg tracking-wide mb-5 h-7">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "Programmer",
                "Tech Enthusiast",
                "App Developer",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
            }}
          />
        </div>
        <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-8 mx-auto md:mx-0">
          Passionate about building clean, scalable digital experiences.
          Currently an IT Management Trainee at Momogi Group, working across
          full-stack development with Next.js and Go.
        </p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a
            href={constants.linkedinURL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-700 hover:bg-sky-600 text-white rounded-lg font-jockey text-xs tracking-widest transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LINKEDIN
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${constants.email}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-jockey text-xs tracking-widest transition-colors"
          >
            <GmailIcon className="w-4 h-4" />
            EMAIL
          </a>
          <a
            href={constants.githubURL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 hover:border-slate-400 bg-white text-slate-700 rounded-lg font-jockey text-xs tracking-widest transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GITHUB
          </a>
        </div>
      </div>

      <div className="shrink-0">
        <img
          className="w-44 h-44 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl hover:animate-wiggle"
          src="./assets/Portrair.png"
          alt="Andrew Sebastian Hardianta"
        />
      </div>
    </div>
  </section>
);

// ── Experience ────────────────────────────────────────────
const CorporateExperience = () => {
  const experiences = [...constants.experiences].sort((a, b) => b.id - a.id);
  return (
    <section id="corp-experience" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Career &amp; Education</SectionLabel>
        <h2 className="font-bebas text-4xl md:text-5xl text-slate-900 mb-2">
          Experience
        </h2>
        <SectionDivider />
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex gap-4 md:gap-6 p-5 rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-slate-50 p-1.5">
                <img
                  src={exp.icon}
                  alt={exp.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-bebas text-lg text-slate-900 leading-tight">
                      {exp.name}
                    </span>
                    <span className="mx-2 text-slate-300">·</span>
                    <span className="text-xs text-slate-400 font-jockey tracking-wide">
                      {exp.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-jockey tracking-wide whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="font-jockey text-blue-600 text-xs tracking-wide mb-2">
                  {exp.title}
                </p>
                <ul className="text-slate-500 text-sm space-y-0.5 list-disc pl-4">
                  {exp.content.split("\n").map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Projects ──────────────────────────────────────────────
const CorporateProjects = () => {
  const allProjects = constants.projects
    .flatMap((p) => p.data)
    .filter((p) => p.id !== 99);

  return (
    <section id="corp-projects" className="bg-slate-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Selected Work</SectionLabel>
        <h2 className="font-bebas text-4xl md:text-5xl text-slate-900 mb-2">
          Personal Projects
        </h2>
        <SectionDivider />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProjects.map((project) => (
            <a
              key={project.id}
              href={project.links || "#"}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-xl overflow-hidden bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              {project.bgimage ? (
                <div
                  className="w-full aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.bgimage})` }}
                />
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <span className="font-jockey text-slate-500 text-xs tracking-widest">
                    COMING SOON
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent group-hover:from-blue-900/70 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-bebas text-base leading-tight">
                  {project.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Skills ────────────────────────────────────────────────
const CorporateSkills = () => {
  const categories = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
  ];
  return (
    <section id="corp-skills" className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionLabel>Tech Stack</SectionLabel>
        <h2 className="font-bebas text-4xl md:text-5xl text-slate-900 mb-2">
          Skills &amp; Tools
        </h2>
        <SectionDivider />
        <div className="flex flex-col gap-8">
          {categories.map(({ key, label }) => (
            <div key={key}>
              <h3 className="font-jockey text-[11px] tracking-[0.2em] text-slate-400 uppercase mb-3">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {tools
                  .filter((t) => t.division === key)
                  .map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-150 cursor-default"
                    >
                      <Icon style={{ color, fontSize: "15px" }} />
                      <span className="font-jockey text-[11px] tracking-wide text-slate-600">
                        {name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Contact ───────────────────────────────────────────────
const CorporateContact = () => (
  <section id="corp-contact" className="bg-[#0f172a] py-24 px-6 md:px-12">
    <div className="max-w-2xl mx-auto text-center">
      <SectionLabel>Get in touch</SectionLabel>
      <h2 className="font-bebas text-6xl md:text-8xl text-white leading-none mb-3">
        Let's Connect
      </h2>
      <p className="text-slate-400 font-jockey text-xs tracking-widest mb-10">
        OPEN TO OPPORTUNITIES · FEEL FREE TO REACH OUT
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={constants.linkedinURL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-700 hover:bg-sky-600 text-white rounded-lg font-jockey text-xs tracking-widest transition-colors"
        >
          <LinkedInIcon className="w-5 h-5" />
          LINKEDIN
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${constants.email}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-jockey text-xs tracking-widest transition-colors"
        >
          <GmailIcon className="w-5 h-5" />
          EMAIL ME
        </a>
        <a
          href={constants.githubURL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-jockey text-xs tracking-widest transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          GITHUB
        </a>
      </div>
    </div>
  </section>
);

// ── Page root ─────────────────────────────────────────────
export default function CorporatePage() {
  return (
    <div className="bg-white">
      <CorporateNavbar />
      <CorporateHero />
      <CorporateExperience />
      <CorporateProjects />
      <CorporateSkills />
      <CorporateContact />
    </div>
  );
}
