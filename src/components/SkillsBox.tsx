import { useState, useEffect, useRef } from "react";
import { skillGroups } from "@/data/skillsData";
import { useTheme } from "@/components/ThemeProvider";

type Skill = { name: string; icon: string };
type SkillGroup = { category: string; skills: Skill[] };

// Icons that need a white version in dark mode
const darkModeWhiteIcons = ["apachekafka", "express", "next"];

function SkillIcon({ skillName }: { skillName: string }) {
  const { theme } = useTheme();
  const fileName = skillName
    .toLowerCase()
    .replace(/\.js/g, "")
    .replace(/\s+/g, "");
  const needsWhite = theme === "dark" && darkModeWhiteIcons.includes(fileName);
  const src = `/src/assets/icons/${fileName}${needsWhite ? "-white" : ""}.png`;

  return (
    <img
      src={src}
      alt={skillName}
      width={40}
      height={40}
      style={{ width: "40px", height: "40px", objectFit: "contain" }}
    />
  );
}

export default function SkillsBox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = skillGroups.length;

  const goTo = (i: number) => {
    setActiveIndex(Math.max(0, Math.min(total - 1, i)));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  const group = skillGroups[activeIndex] as SkillGroup;

  return (
    <div className="flex w-full items-stretch gap-4">
      {/* Scrollable box */}
      <div
        ref={containerRef}
        className="bg-card w-full"
        style={{ height: "420px", cursor: "ns-resize" }}
      >
        {/* Header */}
        <div className="px-8 py-5">
          <h3 className="text-lg font-semibold">{group.category}</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            {activeIndex + 1} / {total}
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 gap-5 px-8 sm:grid-cols-4 md:grid-cols-5">
          {group.skills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="border-border hover:bg-accent flex flex-col items-center justify-center gap-3 border p-6 transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "hsl(var(--skill-tile))" }}
            >
              <SkillIcon skillName={skill.name} />
              <span className="text-center text-xs font-semibold tracking-wide uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: vertical dash nav */}
      <div className="flex flex-col items-center justify-center gap-4 px-8 py-2">
        {skillGroups.map((_: SkillGroup, i: number) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={(skillGroups[i] as SkillGroup).category}
            className="flex items-center justify-center"
          >
            <div
              className={`w-[4px] rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "h-12 bg-[#5e3023]"
                  : "h-6 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
