import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { eventsSignupPath } from "@/data/externalLinks";
import {
  ArrowRight,
  BookOpen,
  CalendarBlank,
  EnvelopeSimple,
  Handshake,
  Heart,
  MusicNote,
  Users,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const programPillars = [
  {
    icon: Heart,
    title: "Wellness and Active Living",
    body: "Dance classes, wellness workshops, balance, mobility, fitness, and active aging programs.",
  },
  {
    icon: MusicNote,
    title: "Arts and Cultural Engagement",
    body: "Creative expression, cultural events, performances, and community-centered arts experiences.",
  },
  {
    icon: BookOpen,
    title: "Education and Lifelong Learning",
    body: "Workshops, classes, seminars, speakers, and skill-building opportunities for adults.",
  },
  {
    icon: Users,
    title: "Community Connection",
    body: "Monthly dances, gatherings, volunteer opportunities, and events that help people belong.",
  },
  {
    icon: Handshake,
    title: "Community Partnerships",
    body: "Collaborations with nonprofits, businesses, schools, civic groups, and local organizations.",
  },
];

const defaultAirtableCalendarEmbedUrl =
  "https://airtable.com/embed/appb50vmImhXrjoQo/shrUNlCPURTOIPgWg";
const airtableCalendarEmbedUrl =
  import.meta.env.VITE_AIRTABLE_EVENTS_EMBED_URL || defaultAirtableCalendarEmbedUrl;

export default function EventsPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Programs & Events"
        title="Art in Motion Programs and Events"
        description="Explore AIM's upcoming calendar, monthly community dances, and program pillars hosted by Art in Motion in Hot Springs."
        backgroundImage="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Calendar
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Upcoming Events
            </h2>
          </div>
          <Link to={eventsSignupPath}>
            <Button
              variant="outline"
              className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
            >
              <EnvelopeSimple size={16} weight="duotone" />
              Get Event Updates
            </Button>
          </Link>
        </div>

        {airtableCalendarEmbedUrl ? (
          <div className="border border-border bg-white shadow-sm overflow-hidden">
            <iframe
              title="Art in Motion events calendar"
              src={airtableCalendarEmbedUrl}
              className="w-full min-h-[760px]"
              frameBorder="0"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="border border-border bg-muted p-8 text-center">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Events Calendar Coming Soon
            </h3>
            <p className="text-sm text-muted-foreground font-sans max-w-xl mx-auto">
              The Airtable events calendar is ready to connect once the public
              calendar view embed URL is added to the site build settings.
            </p>
          </div>
        )}
      </section>

      <section className="bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
                Current Programming
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-5">
                Monthly Community Dances
              </h2>
              <p className="text-base text-muted-foreground font-sans mb-6 leading-relaxed">
                AIM's flagship program is open to all adults, with no dance
                experience required. These twice-monthly gatherings are joyful,
                welcoming, and community-centered.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                    3:00 - 5:30 pm
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
                    6:30 - 9:00 pm
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
                  src="/assets/images/monthly-3.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              What We Do
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Program Pillars
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-xl">
            AIM brings together wellness, arts, lifelong learning, community
            connection, and partnerships so adults have more ways to connect,
            learn, engage, and thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
          {programPillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="border border-border bg-white p-5 hover:border-primary transition-colors duration-200"
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
      </section>
    </div>
  );
}
