import { useState } from "react";
import { contactLinks } from "@/data/heroData";
import { SiGithub, SiWhatsapp, SiLine } from "react-icons/si";
import { Mail, Linkedin as LinkedIn } from "lucide-react";

type ContactLink = (typeof contactLinks)[0];

const ICON_SIZE = 24;

const iconMap: Record<string, React.ReactNode> = {
  github: <SiGithub size={ICON_SIZE} />,
  linkedin: <LinkedIn size={ICON_SIZE} />,
  whatsapp: <SiWhatsapp size={ICON_SIZE} />,
  line: <SiLine size={ICON_SIZE} />,
  email: <Mail size={ICON_SIZE} />,
};

function ContactIcon({ link }: { link: ContactLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={link.label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`text-muted-foreground inline-flex items-center justify-center transition-all duration-200 ease-out ${
        hovered
          ? "text-foreground -translate-y-3 scale-170"
          : "translate-y-0 scale-100"
      }`}
    >
      {iconMap[link.icon]}
    </a>
  );
}

export default function ContactIcons() {
  return (
    <div
      className="w-fit rounded-lg px-6 py-1"
      style={{ backgroundColor: "hsl(var(--skill-tile))" }}
    >
      <div className="flex items-center justify-center gap-6 py-2">
        {contactLinks.map((link: ContactLink) => (
          <ContactIcon key={link.label} link={link} />
        ))}
      </div>
    </div>
  );
}
