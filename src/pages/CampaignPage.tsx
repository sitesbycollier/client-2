import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  CheckCircle,
  Buildings,
  Wrench,
  Users,
  TrendUp,
  Handshake,
} from "@phosphor-icons/react";

const priorities = [
  "Facility Acquisition",
  "Building Renovation and Restoration",
  "Accessibility Improvements",
  "Safety and Infrastructure Upgrades",
  "HVAC, Electrical, Plumbing, and Facility Systems",
  "Program and Event Space Enhancements",
  "Technology and Audio-Visual Improvements",
  "Furniture, Fixtures, and Equipment",
  "Community Programming Development",
  "Operating Sustainability and Reserve Funds",
];

const impacts = [
  {
    icon: Users,
    title: "Expand Access",
    body: "Increase access to wellness, educational, and arts opportunities for adults throughout Garland County.",
  },
  {
    icon: Buildings,
    title: "Community Hub",
    body: "Expand community gathering and engagement opportunities — creating a permanent home for shared experiences.",
  },
  {
    icon: Handshake,
    title: "Strengthen Partnerships",
    body: "Strengthen partnerships among nonprofits, businesses, and community organizations.",
  },
  {
    icon: TrendUp,
    title: "Healthy Aging",
    body: "Reduce social isolation and promote healthy aging through regular programming and events.",
  },
  {
    icon: Wrench,
    title: "Economic Activity",
    body: "Support local economic activity through events, programming, visitation, and employment.",
  },
  {
    icon: CheckCircle,
    title: "Lasting Asset",
    body: "Create a sustainable community asset serving residents throughout Garland County for generations.",
  },
];

const donateUrl = import.meta.env.VITE_STRIPE_DONATE_URL || "";

export default function CampaignPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Capital Campaign · Art in Motion"
        title="Building a Place for Community"
        description="Art in Motion is launching The Gathering Place Capital Campaign to establish a permanent, welcoming destination where adults come together to connect, learn, celebrate, create, and thrive — and where community is built to last."
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
        overlayOpacityClassName="opacity-[0.08]"
        afterTitle={
          <div className="inline-block bg-white/8 border border-white/15 px-6 py-5 mb-8">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-1 font-sans">
              Campaign Goal
            </p>
            <p className="font-heading text-5xl md:text-6xl text-accent">
              $1,500,000
            </p>
          </div>
        }
      />

      {/* Case for Support */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Case for Support
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-6">
              Why This Campaign, Why Now
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-5">
              The Gathering Place is more than a building. It is an investment
              in what makes a community worth staying in — and worth building.
              Hot Springs has a deep history as a place of restoration and
              gathering, and the need for accessible, permanent spaces where
              adults can connect, learn, and engage has never been greater.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-5">
              The campaign will fund the acquisition, restoration,
              modernization, and long-term sustainability of The Gathering
              Center — creating a destination where adults feel genuinely
              welcome, and where meaningful programming touches every dimension
              of a well-lived life: physical wellness, creative expression,
              intellectual growth, civic engagement, and social belonging.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Through this investment, funders help build something rare: a
              lasting community asset that strengthens the cultural, economic,
              and social fabric of Hot Springs and Garland County — and gives
              adults a place to truly thrive.
            </p>
          </div>
          <div className="border border-border p-3 bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Grand community event hall — The Gathering Place vision"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center uppercase tracking-wide font-sans">
              The Gathering Place — Hot Springs, Arkansas
            </p>
          </div>
        </div>
      </div>

      {/* Campaign Priorities */}
      <div className="bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Where Funds Go
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Campaign Priorities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {priorities.map((priority, i) => (
              <div
                key={priority}
                className="flex items-center gap-4 bg-white border border-border p-4 hover:border-primary transition-colors duration-200"
              >
                <span className="text-xs text-muted-foreground font-sans tracking-widest w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CheckCircle
                  size={16}
                  weight="duotone"
                  className="text-primary shrink-0"
                />
                <p className="text-sm font-sans text-foreground">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Impact */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
            Expected Outcomes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            Community Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border border-border p-6 bg-white hover:border-primary transition-colors duration-200"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary mb-4">
                <Icon size={20} weight="duotone" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Vision */}
      <div className="bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-sans">
            Campaign Vision
          </p>
          <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed">
            &#8220;The Gathering Place will be a welcoming destination where
            adults gather to learn, celebrate, create, connect, and thrive. As a
            center for wellness, arts, education, culture, and community
            engagement, The Gathering Place will strengthen the cultural,
            economic, and social fabric of the region — supporting local
            organizations, attracting visitors, encouraging investment, and
            serving as a lasting asset for Hot Springs and Garland
            County.&#8221;
          </blockquote>
        </div>
      </div>

      {/* Donate CTA */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-sans">
            Make a Difference
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-5">
            Support the Campaign Today
          </h2>
          <p className="text-base text-white/75 font-sans mb-8 max-w-xl mx-auto">
            Every gift — of any size — helps build a place where adults can
            connect, learn, create, celebrate, and belong. Contact us to learn
            about naming opportunities, grants, and ways to give.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {donateUrl ? (
              <a href={donateUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-sm font-sans flex items-center gap-2"
                >
                  Donate Now <ArrowRight size={16} weight="bold" />
                </Button>
              </a>
            ) : (
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-sm font-sans flex items-center gap-2"
                >
                  Donate or Pledge <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
            )}
            <Link to="/gathering-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white/35 text-white hover:bg-white/10 rounded-sm font-sans"
              >
                Learn About the Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
