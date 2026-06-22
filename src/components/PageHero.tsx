import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  backgroundImage: string;
  eyebrowClassName?: string;
  overlayOpacityClassName?: string;
  afterTitle?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  eyebrowClassName = "text-white/45",
  overlayOpacityClassName = "opacity-[0.07]",
  afterTitle,
  children,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-[hsl(212,65%,22%)] text-white">
      <div
        className={`absolute inset-0 bg-cover bg-center ${overlayOpacityClassName}`}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 md:py-32">
        <p
          className={`text-xs uppercase tracking-widest mb-4 font-sans ${eyebrowClassName}`}
        >
          {eyebrow}
        </p>
        <h1 className="font-heading text-5xl md:text-6xl leading-[1.1] text-white mb-6 max-w-3xl">
          {title}
        </h1>
        {afterTitle}
        <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </div>
  );
}
