import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X, MapPin } from "@phosphor-icons/react";

const navLinks = [
  { label: "Monthly Dances", href: "#monthly-dances" },
  { label: "Gallery", href: "#community-gallery" },
  { label: "Our Mission", href: "#mission-and-future-vision" },
];

const scheduleNote = "2nd Sun 3–5:30 pm · 4th Thu 6:30–9 pm · $15 at door";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header
      id="header"
      className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border"
    >
      {/* Framed divider accent — one restrained gallery-wall detail */}
      <div className="h-px w-full bg-muted" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Wordmark */}
          <a
            href="#top"
            className="flex-shrink-0 flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="font-heading text-lg tracking-tight text-foreground leading-tight">
              Art in Motion
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground leading-tight">
              Community Dance &amp; Arts
            </span>
          </a>

          {/* Desktop nav — centered */}
          <nav
            className="hidden md:flex items-center gap-6 flex-1 justify-center"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-heading tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: schedule note + CTAs */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <span className="text-xs text-muted-foreground tracking-wide border-r border-border pr-3 whitespace-nowrap">
              {scheduleNote}
            </span>
            <a
              href="#mission-and-future-vision"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <Button
                variant="outline"
                size="sm"
                className="rounded-sm text-xs tracking-wide border-border hover:bg-muted hover:text-foreground transition-colors duration-300"
              >
                Donate
              </Button>
            </a>
            <a
              href="#footer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <Button
                size="sm"
                className="rounded-sm text-xs tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300"
              >
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile: action + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#footer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              <Button
                size="sm"
                className="rounded-sm text-xs tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300"
              >
                Get in Touch
              </Button>
            </a>
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {mobileNavOpen ? (
                <X size={20} weight="duotone" />
              ) : (
                <List size={20} weight="duotone" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileNavOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav
            className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="py-3 text-sm font-heading tracking-wide text-muted-foreground hover:text-foreground border-b border-border last:border-b-0 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-start gap-2 text-xs text-muted-foreground tracking-wide">
                <MapPin
                  size={14}
                  weight="duotone"
                  className="mt-0.5 flex-shrink-0"
                />
                <span>{scheduleNote}</span>
              </div>
              <a
                href="#mission-and-future-vision"
                onClick={() => setMobileNavOpen(false)}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-sm text-xs tracking-wide border-border hover:bg-muted hover:text-foreground transition-colors duration-300"
                >
                  Donate
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Bottom framed-divider accent */}
      <div className="h-px w-full bg-muted" aria-hidden="true" />
    </header>
  );
}
