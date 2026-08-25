import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "The Gathering Place", to: "/gathering-center" },
  { label: "Capital Campaign", to: "/campaign" },
  { label: "Get Involved", to: "/get-involved" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-[4.5rem] gap-4">
          {/* Wordmark */}
          <Link
            to="/"
            className="flex-shrink-0 flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="font-heading text-xl md:text-2xl tracking-tight text-foreground leading-tight">
              Art in Motion
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight font-sans">
              Hot Springs, AR &nbsp;·&nbsp; Nonprofit
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1 justify-center"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm font-sans tracking-wide rounded-sm transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link to="/campaign">
              <Button
                variant="outline"
                size="sm"
                className="rounded-sm text-xs tracking-wide border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Support the Campaign
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                size="sm"
                className="rounded-sm text-xs tracking-wide bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
              >
                Get Involved
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/get-involved">
              <Button
                size="sm"
                className="rounded-sm text-xs tracking-wide bg-primary text-white hover:bg-primary/90"
              >
                Get Involved
              </Button>
            </Link>
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileNavOpen}
              className="p-2 text-foreground hover:text-muted-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {mobileNavOpen ? (
                <X size={22} weight="bold" />
              ) : (
                <List size={22} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileNavOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-3 text-sm font-sans tracking-wide border-b border-border last:border-b-0 transition-colors duration-200 rounded-sm ${
                    isActive
                      ? "text-primary font-medium bg-primary/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
              <Link to="/campaign" onClick={() => setMobileNavOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full rounded-sm text-xs tracking-wide border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Support the Campaign
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
