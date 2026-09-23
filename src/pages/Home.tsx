import { Link } from 'react-router-dom';
import { ArrowRight, Play, Ticket } from 'lucide-react';
import { ABOUT_IMAGE, BAND, PRESS_QUOTES, RELEASES, TOUR_DATES } from '@/data/band';
import Hero from '@/components/Hero';

const STATS = [
  { value: '10', label: 'Years' },
  { value: '4', label: 'Records' },
  { value: '120+', label: 'Shows' },
  { value: '15', label: 'Countries' },
];

export default function Home() {
  const latestRelease = RELEASES[0];
  const upcomingShows = TOUR_DATES.slice(0, 4);

  return (
    <div className="bg-ink-950">
      <Hero />

      {/* About preview */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_70%_30%,#992b2b,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ABOUT_IMAGE}
                  alt="AMORPHIC on stage"
                  className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>
            </div>
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="heading-2 mt-4">
                Sound From <br />
                <span className="text-gradient-rust">The Underground</span>
              </h2>
              <p className="mt-8 text-ink-200 text-lg leading-relaxed">{BAND.bio}</p>
              <div className="mt-10 grid grid-cols-4 gap-4 sm:gap-6">
                {STATS.map((s) => (
                  <div key={s.label} className="border-t border-ink-600 pt-4">
                    <p className="font-display font-bold text-3xl sm:text-4xl text-rust-500">
                      {s.value}
                    </p>
                    <p className="text-ink-300 text-xs font-display uppercase tracking-wider mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-ghost mt-10">
                Read Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest release */}
      <section className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-rust-900/20 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label">Latest Release</p>
              <h2 className="heading-2 mt-4">
                New <span className="text-gradient-rust">Music</span>
              </h2>
            </div>
            <Link
              to="/music"
              className="text-rust-400 hover:text-rust-300 transition-colors font-display uppercase tracking-wider text-sm flex items-center gap-2"
            >
              Full Discography <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group overflow-hidden">
              <img
                src={latestRelease.image}
                alt={latestRelease.title}
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/0 transition-all duration-500" />
            </div>
            <div>
              <p className="text-rust-400 font-display uppercase tracking-wider text-sm">
                {latestRelease.type} · {latestRelease.year}
              </p>
              <h3 className="font-display font-bold text-4xl sm:text-5xl uppercase mt-3 text-ink-100">
                {latestRelease.title}
              </h3>
              <p className="text-ink-300 text-lg mt-4 leading-relaxed">
                {latestRelease.description}
              </p>
              <p className="text-ink-400 text-sm mt-2">{latestRelease.tracks} tracks</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/music" className="btn-primary">
                  <Play size={16} fill="currentColor" />
                  Listen Now
                </Link>
                <a href="#" className="btn-ghost">
                  Stream on Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour preview */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rust-950/30 rounded-full blur-[140px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="section-label">Live</p>
              <h2 className="heading-2 mt-4">
                Upcoming <span className="text-gradient-rust">Shows</span>
              </h2>
            </div>
            <Link
              to="/tour"
              className="text-rust-400 hover:text-rust-300 transition-colors font-display uppercase tracking-wider text-sm flex items-center gap-2"
            >
              All Tour Dates <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingShows.map((show) => (
              <div
                key={`${show.date}-${show.city}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8 bg-ink-900 border border-ink-700 hover:border-rust-700/60 px-5 sm:px-8 py-5 transition-all duration-300"
              >
                <div className="flex flex-col items-center sm:items-start">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-ink-100 group-hover:text-rust-400 transition-colors">
                    {show.day}
                  </span>
                  <span className="font-display uppercase tracking-wider text-xs text-ink-400 mt-0.5">
                    {show.month}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-lg uppercase tracking-wide text-ink-100 truncate">
                    {show.city}
                  </p>
                  <p className="text-ink-300 text-sm mt-1">{show.venue}</p>
                </div>
                <Link
                  to="/tour"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-rust-600 hover:bg-rust-500 text-white font-display uppercase tracking-wider text-xs transition-all duration-300 active:scale-95"
                >
                  <Ticket size={14} />
                  Tickets
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press quotes */}
      <section className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label text-center block">Press</p>
          <h2 className="heading-2 mt-4 text-center">
            What People <span className="text-gradient-rust">Are Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {PRESS_QUOTES.map((q) => (
              <div
                key={q.source}
                className="bg-ink-850 border border-ink-700 p-8 hover:border-rust-700/50 transition-colors duration-300"
              >
                <p className="text-ink-200 text-lg leading-relaxed italic">"{q.quote}"</p>
                <p className="text-rust-400 text-sm font-display uppercase tracking-wider mt-6">
                  — {q.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rust-900/20 rounded-full blur-[160px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-2">
            Join The <span className="text-gradient-rust">Mailing List</span>
          </h2>
          <p className="text-ink-300 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Early access to tickets, new music, and exclusive content. No spam, ever.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Subscribe Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
