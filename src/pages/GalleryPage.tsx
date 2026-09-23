import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { galleryAlbums } from "@/data/gallery";
import type { GalleryPhoto } from "@/data/gallery";
import {
  ArrowRight,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  Images,
  UploadSimple,
  X,
} from "@phosphor-icons/react";

const galleryUploadUrl = import.meta.env.VITE_GALLERY_UPLOAD_URL || "";
const galleryEmbedUrl = import.meta.env.VITE_GALLERY_EMBED_URL || "";

export default function GalleryPage() {
  const photos = useMemo(
    () =>
      galleryAlbums.flatMap((album) =>
        album.photos.map((photo) => ({
          ...photo,
          albumTitle: album.title,
          albumDate: album.date,
        })),
      ),
    [],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + photos.length) % photos.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % photos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, photos.length]);

  const openPhoto = (photo: GalleryPhoto) => {
    const index = photos.findIndex((item) => item.id === photo.id);
    setActiveIndex(index >= 0 ? index : null);
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + photos.length) % photos.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % photos.length,
    );
  };

  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Gallery"
        title="Community Photos"
        description="A look inside Art in Motion dances, gatherings, and community moments in Hot Springs."
        backgroundImage={galleryAlbums[0]?.cover || "/assets/images/monthly-3.jpg"}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
              Photo Albums
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
              Recent AIM Moments
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            {galleryUploadUrl ? (
              <a href={galleryUploadUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-sm font-sans flex items-center gap-2">
                  <UploadSimple size={16} weight="duotone" />
                  Submit Photos
                </Button>
              </a>
            ) : null}
            <Link to="/events">
              <Button
                variant="outline"
                className="rounded-sm font-sans border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
              >
                View Events <ArrowRight size={14} weight="bold" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {galleryAlbums.map((album) => (
            <a
              key={album.slug}
              href={`#${album.slug}`}
              className="group border border-border bg-white block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={album.cover}
                  alt={`${album.title} album cover`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl text-foreground mb-1">
                    {album.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans flex items-center gap-2">
                    <CalendarBlank size={15} weight="duotone" />
                    {album.date}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-widest text-primary font-sans whitespace-nowrap pt-1">
                  {album.photos.length} photos
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-16">
          {galleryAlbums.map((album) => (
            <section key={album.slug} id={album.slug} className="scroll-mt-28">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
                    {album.date}
                  </p>
                  <h2 className="font-heading text-3xl text-foreground leading-tight">
                    {album.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-2 max-w-2xl">
                    {album.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                  <Images size={17} weight="duotone" className="text-primary" />
                  {album.photos.length} photos
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {album.photos.map((photo) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => openPhoto(photo)}
                    className="group aspect-square overflow-hidden bg-muted border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <img
                      src={photo.thumb}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {galleryEmbedUrl ? (
        <section className="bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-primary mb-3 font-sans">
                Community Uploads
              </p>
              <h2 className="font-heading text-3xl text-foreground leading-tight">
                Shared Photo Submissions
              </h2>
            </div>
            <div className="border border-border bg-white shadow-sm overflow-hidden">
              <iframe
                title="Art in Motion community gallery submissions"
                src={galleryEmbedUrl}
                className="w-full min-h-[760px]"
                frameBorder="0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      ) : null}

      {activePhoto ? (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 text-white flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 w-11 h-11 border border-white/25 bg-white/10 hover:bg-white/20 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close photo viewer"
          >
            <X size={22} weight="bold" />
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 md:left-6 w-11 h-11 border border-white/25 bg-white/10 hover:bg-white/20 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous photo"
          >
            <CaretLeft size={24} weight="bold" />
          </button>

          <figure className="w-full max-w-6xl">
            <img
              src={activePhoto.full}
              alt={activePhoto.alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-heading text-xl text-white">
                {activePhoto.albumTitle}
              </p>
              <p className="text-sm text-white/60 font-sans">
                {activePhoto.albumDate}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 md:right-6 w-11 h-11 border border-white/25 bg-white/10 hover:bg-white/20 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next photo"
          >
            <CaretRight size={24} weight="bold" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
