import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "Experience", href: "/", section: "experience" },
  { label: "Skills", href: "/", section: "skills" },
  { label: "Education", href: "/", section: "education" },
  { label: "Projects", href: "/projects", section: null },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, section: string | null) => {
    if (!section) return; // let normal navigation happen for /projects

    e.preventDefault();

    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      window.location.href = `/#${section}`;
      return;
    }

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          Boondirek K.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.section ? (
              <button
                key={link.label}
                onClick={(e) => handleNavClick(e, link.section)}
                className="text-muted-foreground hover:text-foreground cursor-pointer rounded-sm px-3 py-1.5 text-sm transition-colors"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "hsl(var(--skill-tile))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground rounded-sm px-3 py-1.5 text-sm transition-colors"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "hsl(var(--skill-tile))")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {link.label}
              </Link>
            ),
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Toggle theme"
            className="cursor-pointer"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "hsl(var(--skill-tile))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Link
            to="/contact"
            className="rounded-sm border px-4 py-1.5 text-sm font-medium transition-colors duration-200"
            style={{ borderColor: "hsl(var(--border))" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "hsl(var(--skill-tile))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Contact
          </Link>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="cursor-pointer"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "hsl(var(--skill-tile))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-background border-t px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.section ? (
                <button
                  key={link.label}
                  onClick={(e) => handleNavClick(e, link.section)}
                  className="text-muted-foreground hover:text-foreground cursor-pointer rounded-sm px-3 py-1.5 text-sm"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "hsl(var(--skill-tile))")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground rounded-sm px-3 py-1.5 text-sm"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "hsl(var(--skill-tile))")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}