import { useState, useEffect, useRef } from "react";
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
    color: "#FFFFFF",
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

const CATEGORY_CONFIG = {
  frontend: { accent: "#38BDF8", cols: 3 },
  backend: { accent: "#4ADE80", cols: 3 },
  database: { accent: "#FB923C", cols: 3 },
};

const ToolIcon = ({ name, icon: Icon, color, delay, inView }) => (
  <div
    className="group flex flex-col items-center cursor-default"
    style={{ "--glow-color": color }}
  >
    <div
      className="flex flex-col items-center gap-1 md:gap-2 transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <Icon
        style={{ color, display: "block" }}
        className="text-[38px] md:text-[58px] transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_16px_var(--glow-color)]"
      />
      <span className="text-white font-jockey text-[9px] md:text-[11px] tracking-wide text-center leading-tight opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </span>
    </div>
  </div>
);

const Column = ({ category, title }) => {
  const { accent, cols } = CATEGORY_CONFIG[category];
  const items = tools.filter((t) => t.division === category);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center w-full rounded-xl p-4 md:p-6 transition-all duration-700"
      style={{
        border: `1px solid ${accent}35`,
        boxShadow: inView
          ? `0 0 28px 2px ${accent}22, inset 0 0 16px 0px ${accent}0a`
          : "none",
      }}
    >
      {/* Title with glowing gradient underline */}
      <div className="relative mb-5 md:mb-8 text-center w-full">
        <h3 className="text-white font-jockey text-xl md:text-2xl tracking-widest">
          {title}
        </h3>
        <div
          className="h-px mt-2 rounded-full"
          style={{
            background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
            boxShadow: `0 0 8px 1px ${accent}90`,
          }}
        />
      </div>

      {/* Icon grid — same cols on mobile and desktop, icon size differs via text-* */}
      <div
        className="grid gap-5 md:gap-10 place-items-center w-full"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {items.map((tool, i) => (
          <ToolIcon key={tool.name} {...tool} delay={i * 65} inView={inView} />
        ))}
      </div>
    </div>
  );
};

export default function LanguagesToolsSection() {
  return (
    <div className="mt-6 md:mt-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        <Column category="frontend" title="Frontend" />
        <Column category="backend" title="Backend" />
        <Column category="database" title="Database" />
      </div>
    </div>
  );
}
