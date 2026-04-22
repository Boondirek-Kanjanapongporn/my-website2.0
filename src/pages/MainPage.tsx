import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { techBadges } from "@/data/portfolioData";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Wrench,
} from "lucide-react";
import myPhoto from "@/assets/me.jpg";
import SkillsBox from "@/components/SkillsBox";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";

export default function MainPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* ── HERO ── */}
      <section
        id="home"
        className="flex min-h-[90vh] flex-col justify-center gap-8 border-b py-24 md:flex-row md:items-center"
      >
        <div className="flex flex-1 flex-col gap-8">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
            Graduate Software Engineer I · JP Morgan Chase
          </p>
          <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-7xl">
            Hi, I'm
            <br />
            <span>
              {"<"}Boondirek K.{">"}
            </span>
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
            Building software solutions for financial services at JP Morgan
            Chase. Passionate about the intersection of engineering and finance
            — currently exploring MSc programmes in Financial Technology.
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
        </div>

        <div className="photo-wrapper">
          <div className="photo-title">./me.jpg</div>
          <div className="photo-clip">
            <img src={myPhoto} alt="Boondirek K." />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <ExperienceSection />

      {/* ── SKILLS ── */}
      <section id="skills" className="border-b py-24">
        <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
          What I work with
        </p>
        <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold tracking-tight md:text-4xl">
          Skills <Wrench size={32} />
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          Spoken languages: Thai (Native) · English (Professional)
        </p>
        <div className="border-border border">
          <SkillsBox />
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <EducationSection />
    </div>
  );
}
