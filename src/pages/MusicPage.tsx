import { Play, Music2, Disc3, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { RELEASES } from '@/data/band';

export default function MusicPage() {
  return (
    <div className="bg-ink-950">
      <PageHeader
        label="Discography"
        title={
          <>
            The <span className="text-gradient-rust">Records</span>
          </>
        }
        subtitle="Four releases spanning a decade. Stream everything on your platform of choice."
      />

      <section className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-rust-900/20 rounded-full blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {RELEASES.map((release, i) => (
              <div
                key={release.title}
                className="group relative bg-ink-850 border border-ink-700 hover:border-rust-700 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      className="w-14 h-14 rounded-full bg-rust-600/90 backdrop-blur-sm flex items-center justify-center hover:bg-rust-500 hover:scale-110 transition-all duration-300"
                      aria-label="Play"
                    >
                      <Play size={20} fill="white" className="text-white ml-0.5" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-ink-950/80 backdrop-blur-sm px-3 py-1">
                    {release.type === 'Full-Length Album' ? (
                      <Disc3 size={12} className="text-rust-400" />
                    ) : (
                      <Music2 size={12} className="text-rust-400" />
                    )}
                    <span className="text-[10px] font-display uppercase tracking-wider text-ink-200">
                      {release.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-lg uppercase tracking-wide text-ink-100 group-hover:text-rust-400 transition-colors">
                      {release.title}
                    </h3>
                    <span className="text-ink-400 text-sm font-display">{release.year}</span>
                  </div>
                  <p className="text-ink-300 text-sm mt-2 leading-relaxed">
                    {release.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-700">
                    <span className="text-ink-400 text-xs">{release.tracks} tracks</span>
                    <a
                      href={release.spotifyUrl}
                      className="text-ink-300 hover:text-rust-400 transition-colors text-xs font-display uppercase tracking-wider flex items-center gap-1"
                    >
                      Stream <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
                <span className="absolute -top-3 -right-3 font-display font-bold text-5xl text-ink-700 group-hover:text-rust-900 transition-colors duration-500 pointer-events-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
