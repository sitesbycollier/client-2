import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Users,
  Heart,
  Lightbulb,
  BookOpen,
  Handshake,
  Plant,
} from "@phosphor-icons/react";

const values = [
  {
    icon: Users,
    title: "Community",
    body: "We believe meaningful relationships strengthen individuals and communities.",
  },
  {
    icon: Heart,
    title: "Wellness",
    body: "We promote physical, emotional, and social well-being through active and healthy lifestyles.",
  },
  {
    icon: Lightbulb,
    title: "Accessibility",
    body: "We strive to create welcoming opportunities that are inclusive and accessible to all.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    body: "We encourage curiosity, personal growth, and continuous learning.",
  },
  {
    icon: Plant,
    title: "Stewardship",
    body: "We responsibly manage resources to maximize community impact and long-term sustainability.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    body: "We build partnerships that strengthen our mission and expand opportunities for those we serve.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="About Art in Motion"
        title={
          <>
            A Community Built on
            <br />
            <em className="text-accent/90 not-italic">
              Wellness, Connection &amp; Belonging
            </em>
          </>
        }
        description="Art in Motion is not a dance organization, a senior center, or an event company. We are a community-based nonprofit dedicated to helping adults connect, learn, engage, and thrive — and to building the kind of community where that is possible for everyone."
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&q=80"
      />

      {/* Mission + Vision */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Mission Statement
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight mb-5">
              Our Mission
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Art in Motion strengthens communities by creating opportunities
              for adults to connect, learn, engage, and thrive through wellness,
              arts, lifelong learning, and meaningful community experiences.
              Through innovative programming, strategic partnerships, and
              stewardship of The Gathering Place, we foster connection, enhance
              quality of life, and contribute to the long-term vitality of Hot
              Springs and Garland County.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Vision Statement
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight mb-5">
              Our Vision
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              To establish The Gathering Place as a premier community
              destination where adults come together to pursue wellness,
              creativity, education, social connection, and civic engagement
              while strengthening the cultural, economic, and social fabric of
              the region.
            </p>
          </div>
        </div>
      </div>

      {/* Core Purpose */}
      <div className="bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-sans">
            Core Purpose
          </p>
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
            &#8220;A lasting community asset — where adults connect, learn,
            create, and belong — that strengthens the cultural, economic, and
            social fabric of Hot Springs and Garland County for generations to
            come.&#8221;
          </blockquote>
        </div>
      </div>

      {/* Organizational Positioning */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Who We Are
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground leading-tight mb-6">
              Organizational Positioning
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-5">
              Art in Motion is a nonprofit organization dedicated to helping
              adults live healthier, more connected, more fulfilling lives —
              through wellness, arts, education, and community engagement.
              Through The Gathering Place, the organization is creating a
              sustainable community asset that serves as a hub for adult
              enrichment, cultural experiences, lifelong learning, nonprofit
              collaboration, special events, and civic connection.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-5">
              By expanding access to meaningful experiences and deepening
              community participation, Art in Motion contributes to a
              healthier, more vibrant, and economically resilient Hot Springs
              region — one where adults can continue to grow, contribute, and
              belong.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Based in Hot Springs, Arkansas, AIM serves adults throughout
              Garland County with programs spanning wellness, arts and culture,
              lifelong learning, social connection, and civic engagement.
            </p>
          </div>
          <div className="border border-border p-3 bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              {/* <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Diverse group of adults smiling and engaged at a community table"
                className="w-full h-full object-cover"
                loading="lazy"
              /> */}
              <img
                src="/assets/images/monthly.jpg"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center uppercase tracking-wide font-sans">
              Community in motion — monthly gathering
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              What Guides Us
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white border border-border p-6 md:p-8 hover:border-primary transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Icon size={20} weight="duotone" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 text-center">
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-5">
          Ready to Learn More?
        </h2>
        <p className="text-base text-muted-foreground font-sans mb-8 max-w-xl mx-auto">
          Explore The Gathering Place — our hero capital project — or find out
          how you can get involved in the mission.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gathering-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans flex items-center gap-2"
            >
              The Gathering Place <ArrowRight size={16} weight="bold" />
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Get Involved
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
