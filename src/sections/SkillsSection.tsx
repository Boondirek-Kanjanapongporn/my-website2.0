import { Wrench } from "lucide-react";
import SkillsBox from "@/components/SkillsBox";

export default function SkillsSection() {
  return (
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
  );
}
