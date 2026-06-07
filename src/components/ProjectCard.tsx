import type { Project } from "@/data/projectsData";

interface Props {
  project: Project;
  onClick: () => void;
}

// Try to load first image or video thumbnail
function ProjectThumbnail({ project }: { project: Project }) {
  if (project.imageCount > 0) {
    const src = `/assets/projects/${project.id}/1.jpg`;

    return (
      <img
        src={src}
        alt={project.title}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div className="bg-muted flex h-full w-full items-center justify-center">
      <span className="text-muted-foreground text-xs">No preview</span>
    </div>
  );
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="border-border bg-card group flex cursor-pointer flex-col border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="h-44 overflow-hidden">
        <ProjectThumbnail project={project} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm leading-snug font-semibold">
            {project.title}
          </h3>
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

        <p className="text-muted-foreground text-xs leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-auto flex flex-wrap gap-1 pt-2">
          {project.badges.slice(0, 4).map((b) => (
            <span
              key={b}
              className="border-border text-muted-foreground rounded-sm border px-2 py-0.5 text-xs"
            >
              {b}
            </span>
          ))}
          {project.badges.length > 4 && (
            <span className="border-border text-muted-foreground rounded-sm border px-2 py-0.5 text-xs">
              +{project.badges.length - 4}
            </span>
          )}
        </div>

        <p className="text-muted-foreground mt-1 text-xs">View details →</p>
      </div>
    </div>
  );
}