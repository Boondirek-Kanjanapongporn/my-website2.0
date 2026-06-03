import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { experience } from "@/data/experienceData";

const PAGE_SIZE = 3;

type ExperienceItem = (typeof experience)[0];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const logo = theme === "dark" ? item.logoDark : item.logoLight;

  return (
    <div className="border-border bg-card border transition-all duration-200">
      <div className="flex items-start gap-4 p-6">
        {/* Company logo */}
        <div className="flex-shrink-0">
          <div className="bg-background border-border h-16 w-16 overflow-hidden rounded-lg">
            <img
              src={logo}
              alt={item.company}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">{item.role}</h3>
              <p className="text-muted-foreground text-sm font-medium">
                {item.company}
              </p>
            </div>
            <Badge variant="secondary" className="w-fit flex-shrink-0 text-xs">
              {item.type}
            </Badge>
          </div>

          <div className="text-muted-foreground flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {item.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {item.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {item.skills.map((s) => (
              <span
                key={s}
                className="border-border text-muted-foreground rounded-sm border px-2 py-0.5 text-xs"
              >
                {s}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-1 text-xs transition-colors cursor-pointer"
          >
            {expanded ? (
              <>
                <ChevronUp size={13} /> Hide details
              </>
            ) : (
              <>
                <ChevronDown size={13} /> Show details
              </>
            )}
          </button>

          {expanded && (
            <ul className="border-border mt-1 flex flex-col gap-2 border-l-3 pl-4">
              {item.bullets.map((b, i) => (
                <li
                  key={i}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  • {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(experience.length / PAGE_SIZE);
  const paged = experience.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE,
  );
  const goTo = (i: number) => setPage(Math.max(0, Math.min(totalPages - 1, i)));

  return (
    <section id="experience" className="border-b py-24">
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
        Where I've worked
      </p>

      <div className="mb-12 flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight md:text-4xl">
          Experience <Briefcase size={32} />
        </h2>
        <span className="text-muted-foreground text-sm">
          Page {page + 1} of {totalPages}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {paged.map((item) => (
          <ExperienceCard key={item.company + item.date} item={item} />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-end gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => goTo(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft size={14} />
        </Button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <Button
            key={i}
            size="icon"
            className={`h-8 w-8 text-xs transition-colors ${
              page === i
                ? "bg-[#5e3023] text-white hover:bg-[#4a2419]"
                : "text-muted-foreground hover:bg-accent hover:text-foreground bg-transparent"
            }`}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => goTo(page + 1)}
          disabled={page === totalPages - 1}
        >
          <ChevronRight size={14} />
        </Button>
      </div>
    </section>
  );
}
