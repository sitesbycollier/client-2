import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { contact, donateUrl, eventsSignupPath } from "@/data/externalLinks";
import {
  ArrowRight,
  Heart,
  Handshake,
  CalendarBlank,
  EnvelopeSimple,
  Buildings,
  Users,
  Phone,
} from "@phosphor-icons/react";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    subtitle: "Support the Capital Campaign",
    body: "Your gift helps build The Gathering Place — a permanent home for community programming, arts, wellness, and celebration in Hot Springs. Every dollar moves us closer to $1,500,000.",
    cta: "Donate Now",
    to: donateUrl,
  },
  {
    icon: CalendarBlank,
    title: "Attend a Dance",
    subtitle: "Join us monthly",
    body: "Come as you are. No experience required. Our monthly community dances are open to everyone — just $15 at the door, with heavy hors d&#39;oeuvres served at every event.",
    cta: "See the Schedule",
    to: "/events",
  },
  {
    icon: Users,
    title: "Volunteer",
    subtitle: "Give your time",
    body: "Art in Motion is powered by community. Whether you can help at events, support outreach, or bring a skill to share, there&#39;s a meaningful role for you.",
    cta: "Connect with Us",
    to: "#contact",
  },
  {
    icon: Handshake,
    title: "Partner with AIM",
    subtitle: "Organizational collaboration",
    body: "Are you a nonprofit, business, educational institution, or civic organization? We welcome partnerships that expand opportunities and strengthen our shared community.",
    cta: "Explore Partnership",
    to: "#contact",
  },
  {
    icon: Buildings,
    title: "Support The Gathering Place",
    subtitle: "Name a space · Legacy gifts · Grants",
    body: "Interested in a naming opportunity, a major gift, a planned gift, or a foundation grant? Contact us to learn how your investment can be recognized and sustained.",
    cta: "Campaign Details",
    to: "/campaign",
  },
  {
    icon: EnvelopeSimple,
    title: "Stay Connected",
    subtitle: "Updates, events, and news",
    body: "Sign up to receive Art in Motion news, event reminders, and campaign updates delivered to your inbox. Be the first to hear about new programs and milestones.",
    cta: "Sign Up for Updates",
    to: "/updates",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Take Action"
        title="Get Involved with Art in Motion"
        description="There are many ways to join us — donate, volunteer, attend a dance, partner with us, or simply stay connected. Every act of support helps build a community where adults can connect, learn, celebrate, and belong."
        backgroundImage="https://c.animaapp.com/mq5kpwlakJjW7m/img/generated-image-1781223746614.png"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
            Ways to Engage
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            How You Can Help
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map(({ icon: Icon, title, subtitle, body, cta, to }) => (
            <div
              key={title}
              className="border border-border p-6 md:p-8 bg-white hover:border-primary transition-colors duration-200 flex flex-col"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary mb-4">
                <Icon size={20} weight="duotone" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-1">
                {title}
              </h3>
              <p className="text-xs uppercase tracking-wide text-primary mb-3 font-sans">
                {subtitle}
              </p>
              <p
                className="text-sm text-muted-foreground leading-relaxed font-sans mb-5 flex-1"
                dangerouslySetInnerHTML={{ __html: body }}
              />
              {to.startsWith("/") ? (
                <Link to={to}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-sm font-sans text-xs tracking-wide border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {cta} <ArrowRight size={12} weight="bold" />
                  </Button>
                </Link>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-sm font-sans text-xs tracking-wide border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-1.5 self-start"
                >
                  <a
                    href={to}
                    target={to.startsWith("https://") ? "_blank" : undefined}
                    rel={to.startsWith("https://") ? "noopener noreferrer" : undefined}
                  >
                    {cta} <ArrowRight size={12} weight="bold" />
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Reach Out
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Contact Art in Motion
            </h2>
            <p className="text-base text-muted-foreground font-sans mt-4 max-w-xl mx-auto">
              Have a question, want to volunteer, or ready to support the
              campaign? We would love to hear from you.
            </p>
          </div>

          <div className="bg-white border border-border p-8 md:p-10 mb-8 text-center">
            <EnvelopeSimple
              size={32}
              weight="duotone"
              className="text-primary mx-auto mb-4"
            />
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Join the AIM Email List
            </h3>
            <p className="text-base text-muted-foreground font-sans mb-6 max-w-xl mx-auto">
              Receive event reminders, program updates, and campaign news by
              email.
            </p>
            <Link to={eventsSignupPath}>
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans tracking-wide flex items-center gap-2 mx-auto">
                Sign Up for Updates <ArrowRight size={16} weight="bold" />
              </Button>
            </Link>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Contact AIM Directly
            </h3>
            <p className="text-base text-muted-foreground font-sans mb-6">
              For questions, volunteering, partnerships, or giving, reach us by
              email or phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans"
              >
                <a href={`mailto:${contact.email}`}>
                  <EnvelopeSimple size={18} weight="duotone" /> Email AIM
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-sm font-sans"
              >
                <a href={contact.phoneHref}>
                  <Phone size={18} weight="duotone" /> Call AIM
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mt-5 text-sm text-muted-foreground font-sans">
              <a href={`mailto:${contact.email}`} className="break-all underline underline-offset-4 hover:text-primary">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="hover:text-primary">
                {contact.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
          Want to Learn More First?
        </h2>
        <p className="text-base text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
          Explore our mission, programs, and The Gathering Place capital
          campaign — and see the full picture of what Art in Motion is building
          for Hot Springs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about">
            <Button
              variant="outline"
              className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
            >
              About AIM <ArrowRight size={14} weight="bold" />
            </Button>
          </Link>
          <Link to="/campaign">
            <Button className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans flex items-center gap-2">
              Capital Campaign <ArrowRight size={14} weight="bold" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
