import { Link } from 'react-router-dom';
import { ChevronDown, Play } from 'lucide-react';
import { BAND, HERO_IMAGE, PRESS_QUOTES } from '@/data/band';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="AMORPHIC performing live"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-ink-950/30" />
      </div>

      {/* Red glow accent */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-rust-700/20 rounded-full blur-[120px] animate-pulse-glow z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="section-label animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            New Album — "Veil of Static" Out Now
          </p>

          <h1
            className="heading-1 mt-6 animate-fade-up"
            style={{ animationDelay: '0.3s', opacity: 0 }}
          >
            <span className="text-ink-100">AMOR</span>
            <span className="text-rust-500">PH</span>
            <span className="text-ink-100">IC</span>
          </h1>

          <p
            className="mt-6 text-xl sm:text-2xl text-ink-200 font-light max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            {BAND.tagline}. Four musicians. One wall of sound. No compromises.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            <Link to="/music" className="btn-primary">
              <Play size={16} fill="currentColor" />
              Listen Now
            </Link>
            <Link to="/tour" className="btn-ghost">
              Tour Dates
            </Link>
          </div>
        </div>

        {/* Press quotes */}
        <div
          className="mt-16 flex flex-wrap gap-x-12 gap-y-4 animate-fade-up"
          style={{ animationDelay: '0.9s', opacity: 0 }}
        >
          {PRESS_QUOTES.map((q) => (
            <div key={q.source} className="max-w-xs">
              <p className="text-ink-200 text-sm italic leading-relaxed">"{q.quote}"</p>
              <p className="text-rust-400 text-xs font-display uppercase tracking-wider mt-2">
                — {q.source}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="/about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-300 hover:text-rust-400 transition-colors animate-bounce"
        aria-label="Learn more about the band"
      >
        <ChevronDown size={28} />
      </Link>
    </section>
  );
}
