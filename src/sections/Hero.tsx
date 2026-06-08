import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarBlank, MapPin, CurrencyDollar } from "@phosphor-icons/react";

const scheduleItems = [
  {
    label: "2nd Sunday",
    time: "3:00 – 5:30 pm",
    icon: CalendarBlank,
  },
  {
    label: "4th Thursday",
    time: "6:30 – 9:00 pm",
    icon: CalendarBlank,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-card text-foreground py-16 md:py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 md:gap-16 items-center">
        {/* Left: Text Block */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Badge className="w-fit text-xs uppercase tracking-wide px-3 py-1 rounded-sm bg-muted text-muted-foreground border border-border font-sans">
              Nonprofit Community Arts
            </Badge>
            <h1 className="font-heading text-3xl md:text-5xl tracking-tight leading-tight text-foreground">
              Art in Motion brings community together through dance, arts, and
              welcoming gatherings.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-prose leading-relaxed">
              We are a local nonprofit dedicated to creating joyful, inclusive
              spaces where neighbors connect through movement, creativity, and
              shared celebration. Everyone is welcome — no experience needed.
            </p>
          </div>

          {/* Schedule Block */}
          <div className="flex flex-col gap-3 border border-border rounded-sm p-6 bg-muted">
            <p className="text-xs uppercase tracking-wide text-muted-foreground font-sans mb-1">
              Monthly Dance Schedule
            </p>
            <div className="flex flex-col gap-3">
              {scheduleItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon
                    weight="duotone"
                    size={20}
                    className="text-primary shrink-0"
                  />
                  <span className="font-heading text-base md:text-lg text-foreground leading-snug">
                    {item.label}
                  </span>
                  <span className="text-muted-foreground text-base">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-4 border-t border-border flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <CurrencyDollar
                  weight="duotone"
                  size={20}
                  className="text-primary shrink-0"
                />
                <span className="text-base text-foreground">
                  $15 at the door
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin
                  weight="duotone"
                  size={20}
                  className="text-primary shrink-0"
                />
                <span className="text-base text-foreground">
                  Heavy hors d&apos;oeuvres served at every event
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="rounded-sm bg-primary text-primary-foreground px-6 py-3 text-base font-sans transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:opacity-90"
            >
              <a href="#monthly-dances">View Dance Schedule</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-sm border border-border text-foreground px-6 py-3 text-base font-sans transition-all duration-300 ease-out hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <a href="#mission-and-future-vision">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Right: Framed Image Module */}
        <div className="flex flex-col gap-3">
          <div className="border border-border p-3 bg-background shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <img
                src="https://c.animaapp.com/mq5kpwlakJjW7m/img/ai_1.png"
                alt="Community dance class in motion"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 ease-out hover:opacity-95"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide text-center font-sans px-1">
            Community dance — Art in Motion monthly gathering
          </p>
        </div>
      </div>
    </section>
  );
}
