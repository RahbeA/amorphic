import { Ticket, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { TOUR_DATES } from '@/data/band';

const STATUS_STYLES = {
  available: {
    badge: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
    text: 'On Sale',
  },
  'few-left': {
    badge: 'bg-amber-900/40 text-amber-300 border-amber-700/50',
    text: 'Few Left',
  },
  'sold-out': {
    badge: 'bg-rust-900/50 text-rust-300 border-rust-700/60',
    text: 'Sold Out',
  },
} as const;

export default function TourPage() {
  return (
    <div className="bg-ink-950">
      <PageHeader
        label="Live"
        title={
          <>
            Tour <span className="text-gradient-rust">Dates</span>
          </>
        }
        subtitle='The "Veil of Static" North American tour — October 2026. Tickets are moving fast.'
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rust-950/30 rounded-full blur-[140px]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="space-y-3">
            {TOUR_DATES.map((show) => {
              const status = STATUS_STYLES[show.status];
              const soldOut = show.status === 'sold-out';
              return (
                <div
                  key={`${show.date}-${show.city}`}
                  className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[120px_1fr_1fr_auto] items-center gap-4 sm:gap-8 bg-ink-900 border border-ink-700 hover:border-rust-700/60 px-5 sm:px-8 py-5 transition-all duration-300 hover:bg-ink-850"
                >
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="font-display font-bold text-3xl sm:text-4xl text-ink-100 group-hover:text-rust-400 transition-colors">
                      {show.day}
                    </span>
                    <span className="font-display uppercase tracking-wider text-xs text-ink-400 mt-0.5">
                      {show.month} 2026
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-lg uppercase tracking-wide text-ink-100 truncate">
                      {show.city}
                    </p>
                    <p className="text-ink-300 text-sm flex items-center gap-1.5 mt-1">
                      <MapPin size={12} className="text-rust-500" />
                      {show.venue}
                    </p>
                  </div>
                  <div className="hidden sm:flex">
                    <span
                      className={`px-3 py-1 text-[10px] font-display uppercase tracking-wider border ${status.badge}`}
                    >
                      {status.text}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    {soldOut ? (
                      <span className="px-4 sm:px-5 py-2.5 font-display uppercase tracking-wider text-xs text-ink-500 border border-ink-600">
                        Sold Out
                      </span>
                    ) : (
                      <a
                        href={show.ticketUrl}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-rust-600 hover:bg-rust-500 text-white font-display uppercase tracking-wider text-xs transition-all duration-300 hover:shadow-[0_0_20px_rgba(154,43,43,0.4)] active:scale-95"
                      >
                        <Ticket size={14} />
                        Tickets
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-ink-400 text-sm mt-10">
            More dates to be announced. Follow us on social media for updates.
          </p>
        </div>
      </section>
    </div>
  );
}
