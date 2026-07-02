import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import {
  ArrowRight,
  Buildings,
  Users,
  BookOpen,
  Heart,
  Handshake,
  MapPin,
} from "@phosphor-icons/react";

const pillars = [
  {
    icon: Heart,
    number: "01",
    title: "Wellness and Active Living",
    body: "Programs designed to promote physical health, mobility, balance, fitness, and healthy aging.",
  },
  {
    icon: Users,
    number: "02",
    title: "Arts and Cultural Engagement",
    body: "Experiences that encourage creativity, artistic expression, cultural appreciation, and community participation.",
  },
  {
    icon: BookOpen,
    number: "03",
    title: "Education and Lifelong Learning",
    body: "Classes, workshops, seminars, and learning opportunities that support personal and professional growth.",
  },
  {
    icon: Buildings,
    number: "04",
    title: "Community Connection",
    body: "Programs and events that strengthen relationships, reduce social isolation, and encourage civic participation.",
  },
  {
    icon: Handshake,
    number: "05",
    title: "Community Partnerships",
    body: "Collaborative initiatives that support nonprofits, community groups, educational institutions, businesses, and public organizations.",
  },
];

export default function GatheringCenterPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Hero Project &amp;nbsp;·&amp;nbsp; Art in Motion"
        eyebrowClassName="text-accent"
        title="The Gathering Place"
        description="A permanent, welcoming destination where adults come together to learn, celebrate, create, connect, and thrive — strengthening the cultural, economic, and social fabric of Hot Springs and Garland County."
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&amp;q=80"
      >
        <Link to="/campaign">
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 rounded-none font-sans font-medium tracking-wide flex items-center gap-2 px-8 py-6"
          >
            Support the Capital Campaign <ArrowRight size={16} weight="bold" />
          </Button>
        </Link>
      </PageHero>

      {/* Facility Vision */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Facility Vision
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-6">
              A Welcoming Destination for the Entire Community
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed font-sans mb-6">
              The Gathering Place will be a place where adults feel genuinely
              welcome — to move their bodies, stretch their minds, express their
              creativity, deepen friendships, and engage with their community in
              ways that matter. It will be a destination built not around a
              single activity, but around a shared belief: that people flourish
              when they have meaningful places to gather.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Operated by Art in Motion, the facility will serve as a regional
              hub for adult wellness, lifelong learning, arts and cultural
              engagement, nonprofit collaboration, civic programming, and
              community celebration — with flexible space designed to serve the
              full range of human connection.
            </p>
          </div>
          <div className="border border-border p-3 bg-white shadow-sm">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                alt="Beautiful restored venue interior with elegant architecture — Gathering Place vision"
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

      {/* Facility Purpose */}
      <div className="bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 font-sans">
            Facility Purpose
          </p>
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
            &#8220;The Gathering Place will be a welcoming destination where
            adults gather to learn, celebrate, create, connect, and thrive. As a
            center for wellness, arts, education, culture, and community
            engagement, The Gathering Place will strengthen quality of life,
            support local organizations, attract visitors, encourage investment,
            and serve as a lasting community asset for Hot Springs and Garland
            County.&#8221;
          </blockquote>
        </div>
      </div>

      {/* Program Pillars */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
            What Will Happen Here
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            Program Pillars
          </h2>
          <p className="text-base text-muted-foreground font-sans mt-4 max-w-2xl mx-auto">
            The Gathering Place will be home to five interconnected program
            areas — each one addressing a dimension of what it means to truly
            thrive: body, mind, spirit, creativity, and community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, number, title, body }) => (
            <div
              key={title}
              className="border border-border p-6 md:p-8 bg-white hover:border-primary transition-colors duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-xs text-muted-foreground font-sans tracking-widest mt-1">
                  {number}
                </span>
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                  <Icon size={20} weight="duotone" />
                </div>
              </div>
              <h3 className="font-heading text-lg text-foreground mb-3">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {body}
              </p>
            </div>
          ))}
          {/* Long-term outcome */}
          <div className="border-2 border-primary p-6 md:p-8 bg-primary/5 md:col-span-2 lg:col-span-1">
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Long-Term Outcome
            </p>
            <p className="font-heading text-base text-foreground leading-relaxed">
              A lasting destination where adults connect, learn, create, and
              belong — strengthening the cultural, economic, and social fabric
              of Hot Springs and Garland County for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Service area */}
      <div className="bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <MapPin
              size={22}
              weight="duotone"
              className="text-primary shrink-0"
            />
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-1 font-sans">
                Service Area
              </p>
              <h3 className="font-heading text-xl text-foreground">
                Serving Hot Springs and Garland County, Arkansas
              </h3>
            </div>
          </div>
          <p className="text-base text-muted-foreground font-sans max-w-2xl leading-relaxed">
            Hot Springs has long been a city people come to in search of
            restoration, connection, and renewal. The Gathering Place will
            honor that legacy — creating a lasting, accessible destination where
            residents and visitors alike can find community, purpose, and
            belonging at the heart of the city.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-sans">
            Capital Campaign
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-5">
            Building a Place for Community
          </h2>
          <p className="text-base text-white/75 font-sans mb-8 max-w-xl mx-auto">
            We are raising $1,500,000 to acquire, restore, and sustain The
            Gathering Place. Every gift helps build something lasting for Hot
            Springs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/campaign">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-sm font-sans flex items-center gap-2"
              >
                View the Campaign <ArrowRight size={16} weight="bold" />
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
