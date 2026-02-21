import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const techBadges = [
  "Vite",
  "TypeScript",
  "React",
  "Java",
  "Spring Boot",
  "SQL",
  "Python",
  "Git",
];

export default function MainPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* ── HERO ── */}
      <section
        id="home"
        className="flex min-h-[90vh] flex-col justify-center gap-8 border-b py-24"
      >
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
          Graduate Software Engineer I · JP Morgan Chase
        </p>
        <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-7xl">
          Hi, I'm
          <br />
          <span>Boondirek K.</span>
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
          Building scalable software solutions for multinational financial industry.
          Passionate about software engineering, finance, and technology.
          Exploring MSc programmes in financial technology.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/projects">
              View Projects <ArrowRight size={15} className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline">
            <Download size={15} className="mr-2" /> Resume
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </section>

      {/* About, Skills, Education sections will go here next */}
    </div>
  );
}
