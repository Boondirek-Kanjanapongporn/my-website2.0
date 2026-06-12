import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";
import { techBadges } from "@/data/heroData";
import ContactIcons from "@/components/ContactIcons";
import myPhoto from "/assets/me.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[90vh] flex-col justify-center gap-8 border-b py-24 md:flex-row md:items-center"
    >
      <div className="flex flex-1 flex-col gap-8">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
          Graduate Software Engineer I · JPMorgan Chase & Co.
        </p>
        <h1 className="text-5xl leading-tight font-bold tracking-tight md:text-7xl">
          Hi, I'm
          <br />
          <span>
            {"<"}Boondirek K.{">"}
          </span>
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
          Software Engineer I in the Asset & Wealth Management division at
          JPMorgan Chase & Co. Working at the intersection of engineering and
          finance, preparing to pursue a Master of Finance (M.Fin.) to pioneer
          the next generation of FinTech, AI, and quantitative finance.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="flex w-fit items-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[hsl(var(--skill-tile))]"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              View Projects <ArrowRight size={15} />
            </a>

            <a
              href="https://drive.google.com/file/d/1nhfgAUE6rK5Xas0dlIk3xT71U2n8ovD5/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="flex w-fit cursor-pointer items-center gap-2 rounded-sm border px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[hsl(var(--skill-tile))]"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <Download size={15} /> Resume
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
        <ContactIcons />
      </div>

      <div className="photo-wrapper">
        <div className="photo-title">./me.jpg</div>
        <div className="photo-clip">
          <img src={myPhoto} alt="Boondirek K." />
        </div>
      </div>
    </section>
  );
}
