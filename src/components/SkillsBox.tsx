import { useRef, useState, useEffect } from "react";
import * as Si from "react-icons/si";
import { skillGroups } from "@/data/portfolioData";

type SkillGroup = {
  category: string;
  skills: { name: string; icon: string }[];
};

function SkillIcon({ iconName }: { iconName: string }) {
  const IconComponent = (
    Si as Record<
      string,
      React.ComponentType<{ size?: number; className?: string }>
    >
  )[iconName];
  if (!IconComponent) return <div className="bg-muted h-10 w-10 rounded" />;
  return <IconComponent size={40} />;
}

export default function SkillsBox() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active section on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.scrollTop;
      let current = 0;
      sectionRefs.current.forEach((ref, i) => {
        if (ref && ref.offsetTop - 40 <= containerTop) {
          current = i;
        }
      });
      setActiveIndex(current);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Click dash to jump to section
  const jumpTo = (i: number) => {
    const ref = sectionRefs.current[i];
    if (ref && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: ref.offsetTop - 16,
        behavior: "smooth",
      });
    }
    setActiveIndex(i);
  };

  return (
    <div className="flex gap-6">
      {/* Left: vertical dash nav */}
      <div className="flex flex-col items-center gap-3 pt-2">
        {skillGroups.map((group: SkillGroup, i: number) => (
          <button
            key={group.category}
            onClick={() => jumpTo(i)}
            className="group flex flex-col items-center gap-1"
            title={group.category}
          >
            <div
              className={`w-[3px] rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "bg-foreground h-10"
                  : "bg-muted-foreground/40 group-hover:bg-muted-foreground h-6"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Right: scrollable icon grid */}
      <div
        ref={scrollRef}
        className="border-border bg-card flex-1 overflow-y-auto border"
        style={{ height: "420px" }}
      >
        {skillGroups.map((group: SkillGroup, i: number) => (
          <div
            key={group.category}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            className="p-8"
          >
            {/* Category header */}
            <h3 className="text-foreground mb-6 text-lg font-semibold">
              {group.category}
            </h3>

            {/* Icon grid */}
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="border-border bg-background hover:bg-accent flex flex-col items-center justify-center gap-3 border p-4 transition-colors"
                >
                  <SkillIcon iconName={skill.icon} />
                  <span className="text-center text-xs font-semibold tracking-wide uppercase">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
