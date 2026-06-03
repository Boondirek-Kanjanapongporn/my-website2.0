import { useEffect, useState } from "react";
import { X, Github, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projectsData";
import { useTheme } from "@/components/ThemeProvider";

interface Props {
  project: Project;
  onClose: () => void;
}

function MediaCarousel({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);

  // Build media list: video first, then images
  const media: { type: "video" | "image"; src: string }[] = [];

  if (project.hasVideo) {
    media.push({
      type: "video",
      src: `/src/assets/projects/${project.id}/walkthrough.mp4`,
    });
  }

  for (let i = 1; i <= project.imageCount; i++) {
    media.push({
      type: "image",
      src: `/src/assets/projects/${project.id}/${i}.jpg`,
    });
  }

  if (media.length === 0) return null;

  const current = media[index];
  const total = media.length;

  return (
    <div className="relative w-full">
      {/* Media display */}
      <div className="bg-muted h-64 w-full overflow-hidden md:h-80">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            controls
            className="h-full w-full object-contain"
          />
        ) : (
          <img
            key={current.src}
            src={current.src}
            alt={`${project.title} ${index}`}
            className="h-full w-full object-contain"
          />
        )}
      </div>

      {/* Navigation — only show if more than 1 media item */}
      {total > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-muted-foreground text-xs">
            {index + 1} / {total}
          </span>
          <button
            onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
            disabled={index === total - 1}
            className="text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectModal({ project, onClose }: Props) {
  const { theme } = useTheme();
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="border-border relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto border"
        style={{
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground absolute top-4 right-4 z-10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Media carousel */}
        <MediaCarousel project={project} />

        {/* Content */}
        <div className="flex flex-col gap-4 p-6">
          {/* Title + category */}
          <div className="flex items-start justify-between gap-3 pr-6">
            <h2 className="text-xl leading-snug font-bold">{project.title}</h2>
            <div className="flex flex-wrap justify-end gap-1">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="flex-shrink-0 rounded-sm px-2 py-0.5 text-xs text-white"
                  style={{ backgroundColor: "#5e3023" }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1">
            {project.badges.map((b) => (
              <span
                key={b}
                className="border-border text-muted-foreground rounded-sm border px-2 py-0.5 text-xs"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Description — preserve paragraphs */}
          <div className="flex flex-col gap-3">
            {project.description
              .trim()
              .split("\n\n")
              .map((para, i) => (
                <p
                  key={i}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {para}
                </p>
              ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-200"
                style={{ backgroundColor: "hsl(var(--skill-tile))" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "hsl(var(--accent))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "hsl(var(--skill-tile))")
                }
              >
                <Github size={15} />
                View on GitHub
              </a>
            )}
            {project.dissertationLink && (
              <a
                href={project.dissertationLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
                style={{ backgroundColor: "#5e3023" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4a2419")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#5e3023")
                }
              >
                <FileText size={15} />
                Read Dissertation
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
