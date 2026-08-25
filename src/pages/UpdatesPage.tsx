import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarBlank,
  EnvelopeSimple,
  Heart,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const updateTopics = [
  {
    icon: CalendarBlank,
    title: "Event Reminders",
    body: "Monthly dances, classes, fundraisers, and community gatherings.",
  },
  {
    icon: EnvelopeSimple,
    title: "Program News",
    body: "New opportunities to connect, learn, volunteer, and participate.",
  },
  {
    icon: Heart,
    title: "Campaign Updates",
    body: "Progress on The Gathering Place and ways to support AIM.",
  },
];

export default function UpdatesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Stay Connected"
        title="Get Art in Motion Event Updates"
        description="Join the AIM email list for event reminders, program updates, and campaign news from Art in Motion in Hot Springs."
        backgroundImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&q=80"
      />

      <section className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
            Email List
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight mb-5">
            Hear About Upcoming Events
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed font-sans">
            Sign up to receive reminders and announcements from Art in Motion.
            AIM uses this list for event updates, program news, and capital
            campaign information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {updateTopics.map(({ icon: Icon, title, body }) => (
            <div key={title} className="border border-border bg-muted p-5">
              <Icon
                size={20}
                weight="duotone"
                className="text-primary mb-3"
              />
              <h3 className="font-heading text-base text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-border bg-white shadow-sm p-4 md:p-6">
          <iframe
            title="Art in Motion email updates signup form"
            width="540"
            height="760"
            src="https://37a3dbcd.sibforms.com/v2/serve/MUIFANrgnL_wFGfjXU_WRf81G4XSqvRsJu7qE3n4xmliHSq56Ky5jpOlCZg0MUSlECSyDYhmpL0Rz4BSx30E2CjMnmmGhayiwXyejL_DQvZW9WdBwLBDjWhugX5obALJRfo81T4Dl4judkNLKdZdg7yTydBVRAO0uETGd0INAB6X8k3ZD8Z-4Mc9-g4up1qFODPhhDLmr8MiHXk4gg=="
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
            }}
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link to="/events">
            <Button
              variant="outline"
              className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
            >
              View Events <ArrowRight size={14} weight="bold" />
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button
              variant="ghost"
              className="rounded-sm font-sans text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2"
            >
              Get Involved <ArrowRight size={14} weight="bold" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
