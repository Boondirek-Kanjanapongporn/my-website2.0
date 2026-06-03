import { useState } from "react";
import { projects } from "@/data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/data/projectsData";

const categories = [
  "All",
  "AI/ML",
  "Web",
  "Game",
  "Computer Vision",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) =>
          p.category.includes(activeCategory as Project["category"][number]),
        );

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
        What I've built
      </p>
      <h1 className="mb-12 text-4xl font-bold tracking-tight">Projects 🚀</h1>

      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-sm border px-4 py-1.5 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "border-transparent text-white"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            }`}
            style={activeCategory === cat ? { backgroundColor: "#5e3023" } : {}}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
