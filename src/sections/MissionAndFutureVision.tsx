import { Badge } from "@/components/ui/badge";
import { Users, MusicNote, Buildings } from "@phosphor-icons/react";

const statementPanels = [
  {
    icon: Users,
    label: "Community Dance Education",
    headline: "Learning to move, together",
    body: "Arts in Motion brings structured, welcoming dance instruction to the community — no experience required. Classes are designed to meet people where they are, building confidence, coordination, and connection through movement.",
  },
  {
    icon: MusicNote,
    label: "Monthly Social Dances",
    headline: "Second Sundays and fourth Thursdays",
    body: "Twice a month, the community gathers to dance, share a spread of heavy hors d'oeuvres, and simply enjoy each other's company. Doors open on the 2nd Sunday from 3–5:30 pm and the 4th Thursday from 6:30–9 pm. Admission is $15 at the door.",
  },
  {
    icon: Buildings,
    label: "Future Event Center Vision",
    headline: "A permanent home for celebration",
    body: "The long-term vision for Arts in Motion is a dedicated event center — a beautiful, community-owned space capable of hosting weddings, receptions, and milestone gatherings. Every dance and class today is a step toward that future.",
  },
];

export default function MissionAndFutureVision() {
  return (
    <section
      id="mission-and-future-vision"
      className="bg-muted py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Title block */}
        <Badge className="mb-6 text-xs uppercase tracking-wide rounded-sm bg-background text-muted-foreground border border-border px-3 py-1">
          Our Mission
        </Badge>

        <h2 className="font-heading text-3xl md:text-4xl tracking-tight leading-tight text-foreground text-center mb-6">
          Teaching dance, building community, and growing toward a welcoming
          event space
        </h2>

        <p className="text-base md:text-lg text-muted-foreground text-center max-w-prose mb-16 leading-relaxed">
          Arts in Motion is a local nonprofit rooted in the belief that dance
          belongs to everyone. What begins on the dance floor grows into
          something larger — a community, a tradition, and one day, a place to
          call home.
        </p>

        {/* Statement panels — present-day mission */}
        <div className="w-full flex flex-col gap-6 mb-16">
          {statementPanels
            .slice(0, 2)
            .map(({ icon: Icon, label, headline, body }) => (
              <div
                key={label}
                className="bg-background border border-border rounded-sm p-6 md:p-8 flex flex-col gap-3 transition-all duration-300 hover:border-primary"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon
                    weight="duotone"
                    size={22}
                    className="text-primary shrink-0"
                  />
                  <span className="text-xs uppercase tracking-wide text-muted-foreground font-sans">
                    {label}
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl leading-snug text-foreground">
                  {headline}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                  {body}
                </p>
              </div>
            ))}
        </div>

        {/* Framed photo module — grounding the story in real community moments */}
        <div className="w-full mb-16">
          <div className="border border-border bg-background p-3 rounded-sm">
            <div className="aspect-video w-full overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
                alt="Live music performance on stage with warm stage lighting — arts and culture"
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300 hover:brightness-105"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center tracking-wide uppercase">
              Arts in Motion — where creativity and community meet
            </p>
          </div>
        </div>

        {/* Future vision panel — visually separated */}
        <div className="w-full">
          <div className="w-full flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-border" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-sans whitespace-nowrap">
              Looking ahead
            </span>
            <div className="flex-1 border-t border-border" />
          </div>

          {(() => {
            const { icon: Icon, label, headline, body } = statementPanels[2];
            return (
              <div className="bg-background border-2 border-primary rounded-sm p-6 md:p-8 flex flex-col gap-3 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-3 mb-1">
                  <Icon
                    weight="duotone"
                    size={22}
                    className="text-primary shrink-0"
                  />
                  <span className="text-xs uppercase tracking-wide text-muted-foreground font-sans">
                    {label}
                  </span>
                  <Badge className="ml-auto text-xs rounded-sm bg-primary text-primary-foreground border-0 px-2 py-0.5">
                    Vision
                  </Badge>
                </div>
                <h3 className="font-heading text-xl md:text-2xl leading-snug text-foreground">
                  {headline}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
                  {body}
                </p>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
