import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Heart,
  Handshake,
  CalendarBlank,
  EnvelopeSimple,
  Buildings,
  Users,
} from "@phosphor-icons/react";

const ways = [
  {
    icon: Heart,
    title: "Donate",
    subtitle: "Support the Capital Campaign",
    body: "Your gift helps build The Gathering Place — a permanent home for community programming, arts, wellness, and celebration in Hot Springs. Every dollar moves us closer to $1,500,000.",
    cta: "Support the Campaign",
    to: "/campaign",
  },
  {
    icon: CalendarBlank,
    title: "Attend a Dance",
    subtitle: "Join us monthly",
    body: "Come as you are. No experience required. Our monthly community dances are open to everyone — just $15 at the door, with heavy hors d&#39;oeuvres served at every event.",
    cta: "See the Schedule",
    to: "/programs",
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
    cta: "Sign Up Below",
    to: "#contact",
  },
];

export default function GetInvolvedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <a href={to}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-sm font-sans text-xs tracking-wide border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {cta} <ArrowRight size={12} weight="bold" />
                  </Button>
                </a>
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

          {submitted ? (
            <div className="bg-white border border-primary p-10 text-center">
              <Heart
                size={36}
                weight="duotone"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="font-heading text-2xl text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-base text-muted-foreground font-sans">
                We&#39;ve received your message and will be in touch soon.
                We&#39;re glad you&#39;re here.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-border p-8 md:p-10 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-widest text-muted-foreground font-sans"
                    htmlFor="name"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-widest text-muted-foreground font-sans"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-widest text-muted-foreground font-sans"
                    htmlFor="phone"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm"
                    placeholder="(501) 555-0100"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-widest text-muted-foreground font-sans"
                    htmlFor="interest"
                  >
                    I&#39;m interested in…
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="donate">Donating to the Campaign</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="attend">Attending a Dance</option>
                    <option value="partner">Organizational Partnership</option>
                    <option value="updates">
                      Staying Connected / Email Updates
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs uppercase tracking-widest text-muted-foreground font-sans"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="border border-border bg-background px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-sm resize-none"
                  placeholder="Tell us how you&#39;d like to get involved, or ask us anything…"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans tracking-wide w-full md:w-auto self-start flex items-center gap-2"
              >
                Send Message <ArrowRight size={16} weight="bold" />
              </Button>
            </form>
          )}
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
