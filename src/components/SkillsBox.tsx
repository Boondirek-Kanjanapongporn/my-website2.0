import { useState, useEffect, useRef } from "react";
import * as Si from "react-icons/si";
import { skillGroups } from "@/data/portfolioData";

type Skill = { name: string; icon: string };
type SkillGroup = { category: string; skills: Skill[] };

function SkillIcon({ iconName }: { iconName: string }) {
  const IconComponent = (
    Si as Record<string, React.ComponentType<{ size?: number }>>
  )[iconName];
  if (!IconComponent) return <div className="bg-muted h-10 w-10 rounded" />;
  return <IconComponent size={40} />;
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
    <div className="flex items-stretch gap-4">
      {/* Scrollable box */}
      <div
        ref={containerRef}
        className="border-border bg-card flex-1 border"
        style={{ height: "420px", cursor: "ns-resize" }}
      >
        {/* Header */}
        <div className="border-border border-b px-8 py-5">
          <h3 className="text-lg font-semibold">{group.category}</h3>
          <p className="text-muted-foreground mt-1 text-xs">
            {activeIndex + 1} / {total}
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 gap-px sm:grid-cols-4 md:grid-cols-5">
          {group.skills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="border-border bg-background hover:bg-accent flex flex-col items-center justify-center gap-3 border p-6 transition-colors"
            >
              <SkillIcon iconName={skill.icon} />
              <span className="text-center text-xs font-semibold tracking-wide uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: vertical dash nav */}
      <div className="flex flex-col items-center justify-center gap-4 py-2">
        {skillGroups.map((_: SkillGroup, i: number) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={(skillGroups[i] as SkillGroup).category}
            className="flex items-center justify-center"
          >
            <div
              className={`w-[3px] rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-foreground h-12"
                  : "bg-muted-foreground/40 hover:bg-muted-foreground/70 h-6"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
