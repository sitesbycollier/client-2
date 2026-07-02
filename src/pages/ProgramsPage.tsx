import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Buildings,
  Handshake,
  MusicNote,
  CalendarBlank,
} from "@phosphor-icons/react";

const programs = [
  {
    icon: Heart,
    number: "01",
    title: "Wellness and Active Living",
    subtitle: "Move, thrive, and age well",
    body: "Programs designed to promote physical health, mobility, balance, fitness, and healthy aging. From dance classes to wellness workshops, we meet adults where they are and help them build stronger, healthier lives.",
    examples: [
      "Community dance classes",
      "Wellness workshops",
      "Balance and mobility programs",
      "Fitness and active aging activities",
    ],
    accentBg: "bg-rose-50",
    accentBorder: "border-rose-200",
    accentText: "text-rose-600",
    accentDot: "bg-rose-400",
  },
  {
    icon: MusicNote,
    number: "02",
    title: "Arts and Cultural Engagement",
    subtitle: "Create, express, and participate",
    body: "Experiences that encourage creativity, artistic expression, cultural appreciation, and community participation. The arts are for everyone — and AIM is committed to making them accessible.",
    examples: [
      "Monthly community dances",
      "Arts classes and workshops",
      "Cultural events and performances",
      "Creative expression programs",
    ],
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    accentText: "text-violet-600",
    accentDot: "bg-violet-400",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Education and Lifelong Learning",
    subtitle: "Grow, learn, and stay curious",
    body: "Classes, workshops, seminars, and learning opportunities that support personal and professional growth. Learning doesn&#39;t stop at any age — and AIM creates space for adults to keep expanding their horizons.",
    examples: [
      "Educational workshops",
      "Skills development classes",
      "Seminars and speakers",
      "Personal growth programming",
    ],
    accentBg: "bg-amber-50",
    accentBorder: "border-amber-200",
    accentText: "text-amber-600",
    accentDot: "bg-amber-400",
  },
  {
    icon: Users,
    number: "04",
    title: "Community Connection",
    subtitle: "Connect, belong, and participate",
    body: "Programs and events that strengthen relationships, reduce social isolation, and encourage civic participation. Community is at the heart of everything Art in Motion does.",
    examples: [
      "Monthly social dances",
      "Community gatherings",
      "Volunteer opportunities",
      "Civic engagement events",
    ],
    accentBg: "bg-teal-50",
    accentBorder: "border-teal-200",
    accentText: "text-teal-600",
    accentDot: "bg-teal-400",
  },
  {
    icon: Handshake,
    number: "05",
    title: "Community Partnerships",
    subtitle: "Collaborate, amplify, and scale impact",
    body: "Collaborative initiatives that support nonprofits, community groups, educational institutions, businesses, and public organizations. AIM believes we go further together.",
    examples: [
      "Nonprofit partnerships",
      "Business collaborations",
      "Educational institution programs",
      "Civic organization initiatives",
    ],
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-200",
    accentText: "text-sky-600",
    accentDot: "bg-sky-400",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="What We Do"
        title="Our Programs"
        description="Art in Motion brings together five interconnected program pillars — each addressing a dimension of what it means to truly thrive: physical wellness, creative expression, intellectual growth, civic engagement, and the kind of social connection that makes a community feel like home."
        backgroundImage="https://c.animaapp.com/mq5kpwlakJjW7m/img/generated-image-1781223616856.png"
      />

      {/* Program pillars */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="flex flex-col gap-20">
          {programs.map(
            (
              {
                icon: Icon,
                number,
                title,
                subtitle,
                body,
                examples,
                accentBg,
                accentBorder,
                accentText,
                accentDot,
              },
              index,
            ) => (
              <div
                key={title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-muted-foreground font-sans tracking-widest">
                      {number}
                    </span>
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${accentBg} border ${accentBorder}`}
                    >
                      <Icon size={20} weight="duotone" className={accentText} />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight mb-2">
                    {title}
                  </h2>
                  <p
                    className={`text-sm uppercase tracking-wide font-sans mb-5 ${accentText}`}
                  >
                    {subtitle}
                  </p>
                  <p
                    className="text-base text-muted-foreground leading-relaxed font-sans mb-6"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                  <ul className="flex flex-col gap-2.5">
                    {examples.map((ex) => (
                      <li
                        key={ex}
                        className="flex items-center gap-3 text-sm text-muted-foreground font-sans"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${accentDot} shrink-0`}
                        />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`border border-border p-3 bg-white shadow-sm ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                          : index === 1
                            ? "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80"
                            : index === 2
                              ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                              : index === 3
                                ? "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                                : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                      }
                      alt={title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Monthly dance spotlight */}
      <div className="bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
                Current Programming
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight mb-5">
                Monthly Community Dances
              </h2>
              <p className="text-base text-muted-foreground font-sans mb-6 leading-relaxed">
                Our flagship program — open to all adults, no experience
                required. Held twice monthly, these gatherings are the heartbeat
                of Art in Motion: joyful, welcoming, and community-centered.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-border p-4 flex flex-col gap-1">
                  <CalendarBlank
                    size={18}
                    weight="duotone"
                    className="text-primary mb-1"
                  />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                    2nd Sunday
                  </p>
                  <p className="font-heading text-base text-foreground">
                    3:00 – 5:30 pm
                  </p>
                </div>
                <div className="bg-white border border-border p-4 flex flex-col gap-1">
                  <CalendarBlank
                    size={18}
                    weight="duotone"
                    className="text-primary mb-1"
                  />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-sans">
                    4th Thursday
                  </p>
                  <p className="font-heading text-base text-foreground">
                    6:30 – 9:00 pm
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-sans">
                $15 at the door &nbsp;·&nbsp; Heavy hors d&#39;oeuvres served at
                every event
              </p>
            </div>
            <div className="border border-border p-3 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src="https://c.animaapp.com/mq5kpwlakJjW7m/img/generated-image-1781223616856.png"
                  alt="Adults dancing joyfully at a community social"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link to Gathering Place */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <Buildings
            size={36}
            weight="duotone"
            className="text-white/50 mx-auto mb-4"
          />
          <h2 className="font-heading text-2xl md:text-3xl text-white mb-4">
            Programs Growing Into a Permanent Home
          </h2>
          <p className="text-base text-white/75 font-sans mb-8 max-w-xl mx-auto">
            The Gathering Place will give every program pillar a permanent,
            dedicated home — creating a regional destination where adults can
            pursue wellness, learning, creativity, and connection all under one
            roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gathering-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-sm font-sans flex items-center gap-2"
              >
                The Gathering Place <ArrowRight size={16} weight="bold" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-white/35 text-white hover:bg-white/10 rounded-sm font-sans"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
