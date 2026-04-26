import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { education } from "@/data/educationData";

type EducationItem = (typeof education)[0];

function EducationCard({ edu }: { edu: EducationItem }) {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();
  const logo = theme === "dark" ? edu.logoDark : edu.logoLight;

  return (
    <div className="border-border bg-card border transition-all duration-200">
      <div className="flex items-start gap-4 p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="bg-background border-border h-16 w-16 overflow-hidden rounded-lg">
            <img
              src={logo}
              alt={edu.institution}
              className="h-full w-full object-fill"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3">
          {/* Top row: institution + badge */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">{edu.institution}</h3>
              <p className="text-muted-foreground text-sm">{edu.degree}</p>
            </div>
            <Badge variant="secondary" className="w-fit flex-shrink-0 text-xs">
              {edu.honour}
            </Badge>
          </div>

          {/* Location + date on same x-axis as institution */}
          <div className="text-muted-foreground flex flex-wrap gap-3 text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {edu.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} /> {edu.date}
            </span>
          </div>

          {/* Show details toggle — only if bullets exist */}
          {edu.bullets.length > 0 && (
            <>
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-1 text-xs transition-colors"
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
                  {edu.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      • {b}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
        Academic background
      </p>
      <h2 className="mb-12 flex items-center gap-3 text-3xl font-bold tracking-tight md:text-4xl">
        Education <GraduationCap size={32} />
      </h2>
      <div className="flex flex-col gap-3">
        {education.map((edu) => (
          <EducationCard key={edu.institution} edu={edu} />
        ))}
      </div>
    </section>
  );
}
