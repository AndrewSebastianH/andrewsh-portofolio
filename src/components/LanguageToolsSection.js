// components/LanguagesToolsSection.jsx
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiGo,
  SiPhp,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiSass,
  SiMaterialdesign,
  SiAntdesign,
  SiMongodb,
} from "react-icons/si";

const tools = [
  // FRONTEND

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
  {
    name: "Sass",
    icon: SiSass,
    color: "#CC6699",
    division: "frontend",
  },
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

  // BACKEND
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", division: "backend" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E", division: "backend" },
  { name: "Go", icon: SiGo, color: "#00ADD8", division: "backend" },
  // { name: "PHP", icon: SiPhp, color: "#777BB4", division: "backend" },

  // DATABASE
  { name: "MySQL", icon: SiMysql, color: "#4479A1", division: "database" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    division: "database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    division: "database",
  },
];

const Column = ({ title, items, cols = 3 }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-white font-jockey text-xl md:text-2xl mb-8">{title}</h3>

    {/* Icon grid */}
    <div
      className={`grid gap-14 place-items-center`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {items.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
        >
          <Icon size={72} style={{ color }} className="drop-shadow-lg" />
          <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function LanguagesToolsSection() {
  return (
    <div className="mt-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
        <Column
          title="Frontend"
          items={tools.filter((t) => t.division === "frontend")}
          cols={4}
        />
        <Column
          title="Backend"
          items={tools.filter((t) => t.division === "backend")}
        />
        <Column
          title="Database"
          items={tools.filter((t) => t.division === "database")}
        />
      </div>
    </div>
  );
}
