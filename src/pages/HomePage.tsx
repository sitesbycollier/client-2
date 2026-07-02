import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Heart,
  BookOpen,
  Handshake,
  MusicNote,
  CalendarBlank,
  MapPin,
} from "@phosphor-icons/react";

const pillars = [
  { icon: Heart, label: "Wellness & Active Living" },
  { icon: MusicNote, label: "Arts & Cultural Engagement" },
  { icon: BookOpen, label: "Education & Lifelong Learning" },
  { icon: Users, label: "Community Connection" },
  { icon: Handshake, label: "Community Partnerships" },
];

export default function HomePage() {
  return (
    <section className="bg-white">
      {/* ── MAIN HERO ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[hsl(212,65%,22%)] text-white min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
          style={{
            backgroundImage:
              "url('https://c.animaapp.com/mq5kpwlakJjW7m/img/generated-image-1781223616856.png')",
          }}
          aria-hidden="true"
        />
        {/* Subtle diagonal accent */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-primary/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-7">
              <MapPin size={13} weight="duotone" className="text-accent" />
              <p className="text-xs uppercase tracking-widest text-white/50 font-sans">
                Hot Springs, Arkansas · Community Nonprofit
              </p>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-7 text-white">
              Connect. Learn.
              <br />
              <em className="text-accent/90 not-italic">Thrive.</em> Together.
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-xl leading-relaxed mb-3 font-sans">
              Art in Motion is a nonprofit organization dedicated to helping
              adults live fuller, healthier, more connected lives — through
              wellness, arts, lifelong learning, and meaningful community
              experiences.
            </p>
            <p className="text-sm text-white/50 font-sans mb-10 uppercase tracking-widest">
              Hot Springs & Garland County, AR
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gathering-center">
                <Button
                  size="lg"
                  className="bg-white text-foreground hover:bg-white/90 rounded-none font-sans font-medium tracking-wide flex items-center gap-2 px-8 py-6 text-base shadow-lg"
                >
                  The Gathering Place <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
              <Link to="/campaign">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-none font-sans tracking-wide px-8 py-6 text-base"
                >
                  $1.5M Capital Campaign
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── PILLARS STRIP ── */}
      <div className="bg-primary text-white overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-stretch divide-x divide-white/20 min-w-max md:min-w-0 w-full">
            {pillars.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 py-4 px-5 md:px-6 flex-1 justify-center"
              >
                <Icon
                  size={15}
                  weight="duotone"
                  className="text-white/60 shrink-0"
                />
                <span className="text-xs font-sans text-white/75 tracking-wide whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHAT IS AIM ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4 font-sans">
              What is AIM?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight text-foreground mb-6">
              A Nonprofit Built for Community
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-5 font-sans">
              Art in Motion is <em>not</em> a dance organization, a senior
              center, or an event company. We are a community-based nonprofit
              dedicated to helping adults connect, learn, engage, and thrive —
              through wellness, arts, education, recreation, and social
              connection.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 font-sans">
              Everything we do — from our monthly community dances to The
              Gathering Place capital campaign — flows from one belief: that
              when people have meaningful places to gather, learn, create, and
              belong, entire communities grow stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/about">
                <Button
                  variant="outline"
                  className="rounded-none font-sans tracking-wide border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                >
                  Our Mission & Story <ArrowRight size={14} weight="bold" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button
                  variant="ghost"
                  className="rounded-none font-sans tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
                >
                  Our Programs <ArrowRight size={14} weight="bold" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="border border-border p-3 bg-white shadow-md">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                {/* <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Diverse adults laughing and connecting at a community gathering"
                  className="w-full h-full object-cover"
                  loading="lazy"
                /> */}
                <img
                  src="/assets/images/home-group.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center uppercase tracking-wide font-sans">
                Movement & Joy — Art in Motion
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2.5 shadow-md hidden md:block">
              <p className="text-xs font-sans font-medium tracking-wide uppercase">
                Hot Springs, AR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MISSION BAND ── */}
      <div className="bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-primary mb-5 font-sans">
            Mission Statement
          </p>
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed italic">
            “Art in Motion strengthens communities by creating opportunities
            for adults to connect, learn, engage, and thrive through wellness,
            arts, lifelong learning, and meaningful community experiences.
            Through innovative programming, strategic partnerships, and
            stewardship of The Gathering Place, we foster connection and
            contribute to the long-term vitality of Hot Springs and Garland
            County.”
          </blockquote>
          <div className="flex justify-center mt-8">
            <Link to="/about">
              <Button
                variant="outline"
                size="sm"
                className="rounded-none font-sans text-xs tracking-widest border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-1.5"
              >
                Read our full story <ArrowRight size={12} weight="bold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── The Gathering Place FEATURE ── */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="border border-white/15 p-3">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80"
                  alt="Elegant ballroom event hall with warm lighting — The Gathering Place vision"
                  className="w-full h-full object-cover opacity-85"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-white/35 mt-2 text-center uppercase tracking-wide font-sans">
                The Gathering Place — vision for Hot Springs
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent mb-4 font-sans">
                Hero Project
              </p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight text-white mb-6">
                The Gathering Place
              </h2>
              <p className="text-base text-white/70 leading-relaxed mb-5 font-sans">
                A permanent, welcoming destination where adults gather to learn,
                celebrate, create, connect, and thrive. The Gathering Place
                will strengthen the cultural, economic, and social fabric of the
                region — serving Hot Springs and Garland County for generations.
              </p>
              <p className="text-base text-white/70 leading-relaxed mb-8 font-sans">
                Operated by Art in Motion, the facility will provide flexible
                space for wellness programs, lifelong learning, arts and
                cultural experiences, nonprofit partnerships, special events,
                and civic engagement that together build a more vibrant,
                resilient community.
              </p>
              <div className="bg-white/8 border border-white/15 px-6 py-5 mb-8 inline-block">
                <p className="text-xs uppercase tracking-widest text-accent mb-1 font-sans">
                  Capital Campaign Goal
                </p>
                <p className="font-heading text-4xl text-accent">$1,500,000</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/gathering-center">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white rounded-none font-sans tracking-wide flex items-center gap-2"
                  >
                    Learn About the Project{" "}
                    <ArrowRight size={16} weight="bold" />
                  </Button>
                </Link>
                <Link to="/campaign">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white/25 text-white hover:bg-white/10 rounded-none font-sans tracking-wide"
                  >
                    View the Campaign
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DANCE SCHEDULE ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border border-border p-8 md:p-12 bg-muted/30">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Current Programming
            </p>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight text-foreground mb-4">
              Monthly Community Dances
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-6">
              Our regular community dances are open to everyone — no experience
              required. Every event features heavy hors d&#39;oeuvres and a
              welcoming atmosphere where neighbors become friends. Come move,
              connect, and belong.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-border p-5 flex flex-col gap-1">
                <CalendarBlank
                  size={18}
                  weight="duotone"
                  className="text-primary mb-1"
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                  2nd Sunday
                </p>
                <p className="font-heading text-xl text-foreground">
                  3:00 – 5:30 pm
                </p>
              </div>
              <div className="bg-white border border-border p-5 flex flex-col gap-1">
                <CalendarBlank
                  size={18}
                  weight="duotone"
                  className="text-primary mb-1"
                />
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                  4th Thursday
                </p>
                <p className="font-heading text-xl text-foreground">
                  6:30 – 9:00 pm
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans">
              $15 at the door · Heavy hors d&#39;oeuvres served at every event
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="bg-accent text-white p-6 w-full">
              <p className="text-xs uppercase tracking-widest text-white/65 mb-1 font-sans">
                Next Dance
              </p>
              <p className="font-heading text-2xl text-white">June 14, 2025</p>
              <p className="text-sm text-white/75 font-sans mt-1">
                Sunday · 3:00 – 5:30 pm
              </p>
            </div>
            <Link to="/get-involved" className="w-full">
              <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-none font-sans tracking-wide py-5">
                Get Event Updates
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── VALUES SNAPSHOT ── */}
      <div className="border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              What Guides Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Community", sub: "Relationships strengthen us" },
              { label: "Wellness", sub: "Body, mind & spirit" },
              { label: "Accessibility", sub: "Welcoming to all" },
              { label: "Lifelong Learning", sub: "Curiosity & growth" },
              { label: "Stewardship", sub: "Responsible impact" },
              { label: "Collaboration", sub: "Better together" },
            ].map(({ label, sub }) => (
              <div
                key={label}
                className="border border-border p-5 text-center hover:border-primary transition-colors duration-200 bg-muted/20"
              >
                <h3 className="font-heading text-base text-foreground mb-1">
                  {label}
                </h3>
                <p className="text-xs text-muted-foreground font-sans leading-snug">
                  {sub}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about">
              <Button
                variant="outline"
                className="rounded-none font-sans text-xs tracking-widest border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-1.5 mx-auto"
              >
                About Art in Motion <ArrowRight size={12} weight="bold" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA BAND ── */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="border-r-0 md:border-r border-white/15 pr-0 md:pr-8">
              <p className="text-xs uppercase tracking-widest text-white/45 mb-2 font-sans">
                Attend
              </p>
              <p className="font-heading text-xl text-white mb-2">
                Join a Community Dance
              </p>
              <p className="text-sm text-white/65 font-sans mb-4">
                Monthly gatherings open to all. $15 at the door.
              </p>
              <Link to="/programs">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent rounded-none font-sans text-xs tracking-wide border-white/25 text-white hover:bg-white/10 flex items-center gap-1.5 mx-auto md:mx-0"
                >
                  See Schedule <ArrowRight size={12} weight="bold" />
                </Button>
              </Link>
            </div>
            <div className="border-r-0 md:border-r border-white/15 px-0 md:px-8">
              <p className="text-xs uppercase tracking-widest text-white/45 mb-2 font-sans">
                Donate
              </p>
              <p className="font-heading text-xl text-white mb-2">
                Support the Capital Campaign
              </p>
              <p className="text-sm text-white/65 font-sans mb-4">
                Help us build The Gathering Place for Hot Springs.
              </p>
              <Link to="/campaign">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent rounded-none font-sans text-xs tracking-wide border-white/25 text-white hover:bg-white/10 flex items-center gap-1.5 mx-auto md:mx-0"
                >
                  $1.5M Campaign <ArrowRight size={12} weight="bold" />
                </Button>
              </Link>
            </div>
            <div className="pl-0 md:pl-8">
              <p className="text-xs uppercase tracking-widest text-white/45 mb-2 font-sans">
                Connect
              </p>
              <p className="font-heading text-xl text-white mb-2">
                Get Involved with AIM
              </p>
              <p className="text-sm text-white/65 font-sans mb-4">
                Volunteer, partner, or stay connected with our work.
              </p>
              <Link to="/get-involved">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent rounded-none font-sans text-xs tracking-wide border-white/25 text-white hover:bg-white/10 flex items-center gap-1.5 mx-auto md:mx-0"
                >
                  Get Involved <ArrowRight size={12} weight="bold" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
