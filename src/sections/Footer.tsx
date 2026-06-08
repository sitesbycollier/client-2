import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  Phone,
  CalendarBlank,
} from "@phosphor-icons/react";

const navLinks = [
  { label: "Monthly Dances", href: "#monthly-dances" },
  { label: "Gallery", href: "#community-gallery" },
  { label: "Our Mission", href: "#mission-and-future-vision" },
];

const danceSchedule = [
  { label: "2nd Sunday", time: "3:00 – 5:30 pm" },
  { label: "4th Thursday", time: "6:30 – 9:00 pm" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left — Organization note */}
          <div className="flex flex-col gap-5">
            <div>
              <Badge
                variant="outline"
                className="text-xs uppercase tracking-wide mb-3 border-border text-muted-foreground"
              >
                Nonprofit Organization
              </Badge>
              <h2 className="font-heading text-xl tracking-tight text-foreground leading-snug">
                Art in Motion
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A local nonprofit dedicated to community dance and arts education.
              We are building toward a future event center that can host
              weddings, celebrations, and the arts for years to come.
            </p>
            {/* Framed event photo thumbnail — gallery echo */}
            <div className="border border-border p-1.5 w-fit">
              <div className="aspect-[4/3] w-40 overflow-hidden">
                <img
                  src="https://c.animaapp.com/mq5kpwlakJjW7m/img/ai_2.png"
                  alt="Dance social gathering with refreshments"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 tracking-wide uppercase">
                Monthly Dance Social
              </p>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              <a
                href="#top"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <FacebookLogo size={20} weight="duotone" />
              </a>
              <a
                href="#top"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <InstagramLogo size={20} weight="duotone" />
              </a>
              <a
                href="mailto:info@artsinmotion.org"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Center — Contact details */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-base uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <EnvelopeSimple
                  size={18}
                  weight="duotone"
                  className="text-muted-foreground mt-0.5 shrink-0"
                />
                <a
                  href="mailto:info@artsinmotion.org"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  info@artsinmotion.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  weight="duotone"
                  className="text-muted-foreground mt-0.5 shrink-0"
                />
                <a
                  href="tel:+15555550100"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  (555) 555-0100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  weight="duotone"
                  className="text-muted-foreground mt-0.5 shrink-0"
                />
                <span className="text-sm text-muted-foreground">
                  Serving the local community and surrounding area
                </span>
              </li>
            </ul>
            {/* Nav links */}
            <div className="mt-2">
              <h3 className="font-heading text-base uppercase tracking-wide text-foreground mb-3">
                Navigate
              </h3>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Involvement and dance schedule */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading text-base uppercase tracking-wide text-foreground">
              Join the Community
            </h3>
            <div className="border border-border p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CalendarBlank
                  size={16}
                  weight="duotone"
                  className="text-muted-foreground shrink-0"
                />
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  Monthly Dance Schedule
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {danceSchedule.map((item) => (
                  <li key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-sm font-heading text-foreground leading-snug">
                      {item.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
              <Separator className="bg-border" />
              <div className="flex flex-col gap-1">
                <span className="text-sm text-foreground">$15 at the door</span>
                <span className="text-sm text-muted-foreground">
                  Heavy hors d'oeuvres served
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-1">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-none"
              >
                <a href="#monthly-dances">Attend a Dance</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-border text-foreground hover:bg-muted transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-none"
              >
                <a href="#mission-and-future-vision">Get Involved</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="bg-border mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground tracking-wide">
            © Art in Motion. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wide uppercase">
            Community Dance &amp; Arts Education
          </p>
        </div>
      </div>
    </footer>
  );
}
