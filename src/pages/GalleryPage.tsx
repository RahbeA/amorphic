import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { GALLERY_IMAGES } from '@/data/band';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((p) => (p === null ? null : (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const next = () =>
    setLightbox((p) => (p === null ? null : (p + 1) % GALLERY_IMAGES.length));

  return (
    <div className="bg-ink-950">
      <PageHeader
        label="Visuals"
        title={
          <>
            Live <span className="text-gradient-rust">Gallery</span>
          </>
        }
        subtitle="Moments captured on stage and on the road. Click any photo to view full size."
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, i) => {
              const tall = i % 3 === 1;
              return (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`group relative overflow-hidden bg-ink-850 ${tall ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/0 transition-all duration-300" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-ink-100 hover:text-rust-400 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-ink-100 hover:text-rust-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={GALLERY_IMAGES[lightbox]}
            alt={`Gallery ${lightbox + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 sm:right-8 text-ink-100 hover:text-rust-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-400 font-display uppercase tracking-wider text-sm">
            {lightbox + 1} / {GALLERY_IMAGES.length}
          </span>
        </div>
      )}
    </div>
  );
}
