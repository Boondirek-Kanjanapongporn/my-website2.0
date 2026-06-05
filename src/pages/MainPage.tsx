import HeroSection from "@/sections/HeroSection";
import ExperienceSection from "@/sections/ExperienceSection";
import SkillsSection from "@/sections/SkillsSection";
import EducationSection from "@/sections/EducationSection";

export default function MainPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}
