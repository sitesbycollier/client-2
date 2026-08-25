import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  FacebookLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  Phone,
  Heart,
} from "@phosphor-icons/react";

const navLinks = [
  { label: "About AIM", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "The Gathering Place", to: "/gathering-center" },
  { label: "Capital Campaign", to: "/campaign" },
  { label: "Get Involved", to: "/get-involved" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-background/40 mb-1.5 font-sans">
                Nonprofit Organization
              </p>
              <h2 className="font-heading text-2xl text-background leading-snug">
                Art in Motion
              </h2>
              <p className="text-[10px] uppercase tracking-widest text-background/40 mt-1 font-sans">
                Hot Springs &amp; Garland County, AR
              </p>
            </div>
            <p className="text-sm text-background/65 leading-relaxed max-w-xs font-sans">
              Improving quality of life for adults through wellness, arts,
              education, social connection, and community engagement.
            </p>
            <div className="border border-background/15 px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest text-background/35 font-sans mb-1">
                Hero Project
              </p>
              <p className="font-heading text-base text-background leading-tight">
                The Gathering Place
              </p>
              <p className="text-xs text-background/45 font-sans mt-0.5">
                Capital Campaign &nbsp;·&nbsp; $1,500,000 Goal
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61591778121648"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors duration-200"
              >
                <FacebookLogo size={20} weight="duotone" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/40 hover:text-background transition-colors duration-200"
              >
                <InstagramLogo size={20} weight="duotone" />
              </a>
              <a
                href="mailto:info@artsinmotion.org"
                aria-label="Email"
                className="text-background/40 hover:text-background transition-colors duration-200"
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-[10px] uppercase tracking-widest text-background/40">
              Navigate
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/65 hover:text-background transition-colors duration-200 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + dance quick-ref */}
          <div className="flex flex-col gap-5">
            <h3 className="font-sans text-[10px] uppercase tracking-widest text-background/40">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <EnvelopeSimple
                  size={15}
                  weight="duotone"
                  className="text-background/40 mt-0.5 shrink-0"
                />
                <a
                  href="mailto:info@artsinmotion.org"
                  className="text-sm text-background/65 hover:text-background transition-colors duration-200 font-sans"
                >
                  info@artsinmotion.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  weight="duotone"
                  className="text-background/40 mt-0.5 shrink-0"
                />
                <a
                  href="tel:+15015550100"
                  className="text-sm text-background/65 hover:text-background transition-colors duration-200 font-sans"
                >
                  (501) 555-0100
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  weight="duotone"
                  className="text-background/40 mt-0.5 shrink-0"
                />
                <span className="text-sm text-background/65 font-sans">
                  Hot Springs, Arkansas
                </span>
              </li>
            </ul>

            <div className="border border-background/15 p-4 mt-1">
              <p className="text-[10px] uppercase tracking-widest text-background/40 mb-3 font-sans">
                Monthly Dances
              </p>
              <p className="text-sm text-background/65 font-sans">
                2nd Sunday &nbsp;·&nbsp; 3:00 – 5:30 pm
              </p>
              <p className="text-sm text-background/65 font-sans">
                4th Thursday &nbsp;·&nbsp; 6:30 – 9:00 pm
              </p>
              <p className="text-sm text-background mt-2 font-sans font-medium">
                $15 at the door &nbsp;·&nbsp; Hors d&#39;oeuvres served
              </p>
            </div>
          </div>
        </div>

        <Separator className="bg-background/15 mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/35 tracking-wide font-sans">
            © {new Date().getFullYear()} Art in Motion. All rights reserved.
            &nbsp;·&nbsp; 501(c)(3) Nonprofit Organization
          </p>
          <p className="text-xs text-background/35 tracking-wide flex items-center gap-1.5 font-sans">
            <Heart size={11} weight="fill" className="text-accent" />
            Serving Hot Springs &amp; Garland County
          </p>
        </div>
      </div>
    </footer>
  );
}
