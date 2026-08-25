import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { EnvelopeSimple } from "@phosphor-icons/react";

const emailSignupUrl = import.meta.env.VITE_BREVO_SIGNUP_URL || "";
const defaultAirtableCalendarEmbedUrl =
  "https://airtable.com/embed/appb50vmImhXrjoQo/shrUNlCPURTOIPgWg";
const airtableCalendarEmbedUrl =
  import.meta.env.VITE_AIRTABLE_EVENTS_EMBED_URL || defaultAirtableCalendarEmbedUrl;

export default function EventsPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Events"
        title="Upcoming Art in Motion Events"
        description="Find dances, classes, community gatherings, fundraisers, and special events hosted by Art in Motion in Hot Springs."
        backgroundImage="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1600&q=80"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Schedule
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              What&#39;s Coming Up
            </h2>
          </div>
          {emailSignupUrl && (
            <a href={emailSignupUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
              >
                <EnvelopeSimple size={16} weight="duotone" />
                Get Event Updates
              </Button>
            </a>
          )}
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
    </div>
  );
}
