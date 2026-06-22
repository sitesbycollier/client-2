import { Calendar, Clock, CurrencyDollar, Star } from "@phosphor-icons/react";

const scheduleItems = [
  {
    id: "sunday-dance",
    label: "Recurring Schedule",
    title: "2nd Sunday Each Month",
    time: "3:00 – 5:30 pm",
    icon: "Calendar",
    featured: false,
    description:
      "Join us every second Sunday for an afternoon of community dancing open to all skill levels.",
  },
  {
    id: "thursday-dance",
    label: "Recurring Schedule",
    title: "4th Thursday Each Month",
    time: "6:30 – 9:00 pm",
    icon: "Calendar",
    featured: false,
    description:
      "An evening gathering that brings neighbors together through movement and music on the fourth Thursday.",
  },
  {
    id: "admission",
    label: "Admission & Refreshments",
    title: "$15 at the Door",
    time: null,
    icon: "CurrencyDollar",
    featured: false,
    description:
      "Heavy hors d'oeuvres are always served. No reservation needed — simply arrive and enjoy.",
  },
];

const featuredDate = {
  label: "Upcoming Dance",
  title: "June 14 — Mark Your Calendar",
  description:
    "Our next community dance is Sunday, June 14. Come as you are, bring a friend, and experience what Arts in Motion is all about.",
  time: "3:00 – 5:30 pm",
};

export default function MonthlyDances() {
  return (
    <section
      id="monthly-dances"
      className="bg-muted py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-3xl mx-auto">
        {/* Title block */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans mb-3 block">
            Community Events
          </span>
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground">
            Monthly Community Dances
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-prose">
            Arts in Motion hosts regular dances throughout the month — welcoming
            dancers of every background into a warm, social setting. All are
            invited.
          </p>
        </div>

        {/* Schedule list */}
        <div className="flex flex-col">
          {scheduleItems.map((item, index) => (
            <div key={item.id}>
              <div className="group flex items-start gap-5 py-6 transition-all duration-300 cursor-default">
                <div className="mt-0.5 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-border bg-background text-foreground">
                  {item.icon === "Calendar" && (
                    <Calendar size={20} weight="duotone" />
                  )}
                  {item.icon === "CurrencyDollar" && (
                    <CurrencyDollar size={20} weight="duotone" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                    {item.label}
                  </span>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-heading text-lg md:text-xl leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.time && (
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={13} weight="duotone" />
                        {item.time}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-muted-foreground max-w-prose">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < scheduleItems.length - 1 && (
                <div className="border-t border-border" />
              )}
            </div>
          ))}
        </div>

        {/* Divider before featured */}
        <div className="border-t border-border mt-2 mb-10" />

        {/* Featured date callout */}
        <div className="group border border-border bg-background transition-all duration-300 hover:border-primary">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image module */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&q=80"
                alt="Couple dancing together joyfully at a social dance event"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-95"
              />
            </div>

            {/* Callout text */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} weight="duotone" className="text-primary" />
                  <span className="text-xs uppercase tracking-widest text-primary font-sans">
                    {featuredDate.label}
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl leading-snug text-foreground mb-3">
                  {featuredDate.title}
                </h3>
                <p className="text-base text-muted-foreground max-w-prose mb-5">
                  {featuredDate.description}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground border-t border-border pt-4">
                <Clock size={14} weight="duotone" />
                <span>{featuredDate.time}</span>
                <span className="mx-2 text-border">·</span>
                <CurrencyDollar size={14} weight="duotone" />
                <span>$15 at the door</span>
              </div>
            </div>
          </div>

          {/* Sparse caption */}
          <div className="border-t border-border px-6 py-3">
            <p className="text-xs text-muted-foreground tracking-wide">
              Arts in Motion — Community Dance, June 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
