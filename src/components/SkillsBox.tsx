import { useState, useEffect, useRef } from "react";
import { skillGroups } from "@/data/skillsData";
import { useTheme } from "@/components/ThemeProvider";

type Skill = { name: string; icon: string };
type SkillGroup = { category: string; skills: Skill[] };

const darkModeWhiteIcons = ["apachekafka", "express", "next"];

function SkillIcon({ skillName }: { skillName: string }) {
  const { theme } = useTheme();
  const fileName = skillName
    .toLowerCase()
    .replace(/\.js/g, "")
    .replace(/\s+/g, "");
  const needsWhite = theme === "dark" && darkModeWhiteIcons.includes(fileName);
  const src = `/assets/icons/${fileName}${needsWhite ? "-white" : ""}.png`;

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
    <div className="flex w-full items-stretch">
      {/* Scrollable box */}
      <div
        ref={containerRef}
        className="bg-card min-w-0 flex-1"
        style={{ cursor: "ns-resize" }}
      >
        {/* Header */}
        <div className="px-4 py-4 sm:px-8 sm:py-5">
          <h3 className="text-base font-semibold sm:text-lg">
            {group.category}
          </h3>
          <p className="text-muted-foreground mt-1 text-xs">
            Page {activeIndex + 1} of {total}
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 gap-2 px-4 pb-4 sm:gap-5 sm:px-8 sm:pb-8 md:grid-cols-4 lg:grid-cols-5">
          {group.skills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="border-border hover:bg-accent flex flex-col items-center justify-center gap-2 border p-3 transition-all duration-200 hover:scale-105 sm:gap-3 sm:p-6"
              style={{ backgroundColor: "hsl(var(--skill-tile))" }}
            >
              <SkillIcon skillName={skill.name} />
              <span className="text-center text-[10px] font-semibold tracking-wide uppercase sm:text-xs">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: vertical dash nav */}
      <div className="flex flex-col items-center justify-center gap-3 px-3 py-2 sm:gap-4 sm:px-8">
        {skillGroups.map((_: SkillGroup, i: number) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={(skillGroups[i] as SkillGroup).category}
            className="flex cursor-pointer items-center justify-center"
          >
            <div
              className={`w-[3px] rounded-full transition-all duration-300 sm:w-[4px] ${
                activeIndex === i
                  ? "h-10 bg-[#5e3023] sm:h-12"
                  : "h-5 bg-gray-400 hover:bg-gray-500 sm:h-6"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
