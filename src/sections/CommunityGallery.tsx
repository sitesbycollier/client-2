import { Images, CalendarBlank, MapPin } from "@phosphor-icons/react";

const galleryItems = [
  {
    id: 1,
    url: "https://c.animaapp.com/mq5kpwlakJjW7m/img/generated-image-1781223616856.png",
    alt: "Diverse adults laughing and dancing joyfully at an AIM community social event",
    caption: "Monthly Dance Social",
    date: "May 2025",
    size: "large",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    alt: "Adults in an arts and crafts workshop — creative community programming",
    caption: "The Gathering Place Vision",
    date: "April 2025",
    size: "small",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=1200&q=80",
    alt: "Warm outdoor community gathering — neighbors connecting at a festive evening event",
    caption: "Arts &amp; Cultural Programming",
    date: "March 2025",
    size: "small",
  },
];

const featuredFlyer = {
  label: "Upcoming Event",
  title: "June Dance Social",
  date: "Sunday, June 14, 2025",
  time: "3:00 – 5:30 PM",
  admission: "$15 at the door",
  note: "Heavy Hors d'Oeuvres served",
  recurring: "2nd Sunday each month · 4th Thursday 6:30–9 PM",
};

export default function CommunityGallery() {
  return (
    <section
      id="community-gallery"
      className="bg-card py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Intro block */}
        <div className="mb-12 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-sans">
            Gallery
          </p>
          <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground mb-4">
            Community Moments in Motion
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A curated look at the dances, gatherings, and shared joy that define
            Art in Motion. Each event is a step toward our vision of a
            permanent community arts and event center.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large featured image — spans 2 columns on lg */}
          <div className="group lg:col-span-2 relative overflow-hidden border border-border rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={galleryItems[0].url}
                alt={galleryItems[0].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-background/80 border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-heading text-sm leading-snug text-foreground">
                {galleryItems[0].caption}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <CalendarBlank weight="duotone" size={12} />
                {galleryItems[0].date}
              </p>
            </div>
            {/* Always-visible date badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-background/90 border border-border text-foreground text-xs px-2 py-1 uppercase tracking-wide font-sans">
                {galleryItems[0].date}
              </span>
            </div>
          </div>

          {/* Small image 1 */}
          <div className="group relative overflow-hidden border border-border rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={galleryItems[1].url}
                alt={galleryItems[1].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-background/80 border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-heading text-sm leading-snug text-foreground">
                {galleryItems[1].caption}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <CalendarBlank weight="duotone" size={12} />
                {galleryItems[1].date}
              </p>
            </div>
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-background/90 border border-border text-foreground text-xs px-2 py-1 uppercase tracking-wide font-sans">
                {galleryItems[1].date}
              </span>
            </div>
          </div>

          {/* Event flyer feature card */}
          <div className="group border border-primary rounded-sm bg-muted p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md">
            <div>
              <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 uppercase tracking-wide font-sans mb-4">
                {featuredFlyer.label}
              </span>
              <h3 className="font-heading text-xl md:text-2xl leading-snug text-foreground mb-3">
                {featuredFlyer.title}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CalendarBlank
                    weight="duotone"
                    size={16}
                    className="text-foreground shrink-0"
                  />
                  {featuredFlyer.date}
                </li>
                <li className="flex items-center gap-2">
                  <Images
                    weight="duotone"
                    size={16}
                    className="text-foreground shrink-0"
                  />
                  {featuredFlyer.time}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin
                    weight="duotone"
                    size={16}
                    className="text-foreground shrink-0"
                  />
                  {featuredFlyer.admission}
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide leading-relaxed">
                {featuredFlyer.note}
              </p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {featuredFlyer.recurring}
              </p>
            </div>
          </div>

          {/* Small image 2 */}
          <div className="group relative overflow-hidden border border-border rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={galleryItems[2].url}
                alt={galleryItems[2].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-background/80 border-t border-border translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-heading text-sm leading-snug text-foreground">
                {galleryItems[2].caption}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <CalendarBlank weight="duotone" size={12} />
                {galleryItems[2].date}
              </p>
            </div>
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-background/90 border border-border text-foreground text-xs px-2 py-1 uppercase tracking-wide font-sans">
                {galleryItems[2].date}
              </span>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-muted-foreground text-center uppercase tracking-widest">
          More photos coming soon — community moments captured at every event
        </p>
      </div>
    </section>
  );
}
