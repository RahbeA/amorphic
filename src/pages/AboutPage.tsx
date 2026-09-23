import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { ABOUT_IMAGE, ABOUT_IMAGE_2, BAND, PRESS_QUOTES } from '@/data/band';

const STATS = [
  { value: '10', label: 'Years' },
  { value: '4', label: 'Records' },
  { value: '120+', label: 'Shows Played' },
  { value: '15', label: 'Countries' },
];

const TIMELINE = [
  { year: '2016', text: 'Elena Cross and Marcus Vale start jamming in a Portland basement. The first demo is recorded on a borrowed four-track.' },
  { year: '2018', text: 'Dario and Sasha join, completing the lineup. The band plays its first show at a DIY venue to thirty people.' },
  { year: '2019', text: 'First West Coast tour. Six dates, one broken-down van, and a growing word-of-mouth following.' },
  { year: '2021', text: '"The Fracture" is released to critical acclaim in the underground. The album hits 50K streams in its first month.' },
  { year: '2023', text: '"Monochrome EP" strips things back. Recorded live in two days, it showcases the band\'s dynamic range.' },
  { year: '2025', text: '"Veil of Static" arrives — the most ambitious record yet. A 52-minute journey through sound and silence.' },
];

export default function AboutPage() {
  return (
    <div className="bg-ink-950">
      <PageHeader
        label="About"
        title={
          <>
            The <span className="text-gradient-rust">Band</span>
          </>
        }
        subtitle="Post-metal / atmospheric rock from Portland, Oregon. A decade of noise, texture, and uncompromising vision."
        bgImage="https://images.pexels.com/photos/894557/pexels-photo-894557.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Bio section */}
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
              <div className="absolute -bottom-12 -right-4 sm:-right-12 w-40 sm:w-56 aspect-square overflow-hidden border-4 border-ink-950 shadow-2xl hidden sm:block">
                <img
                  src={ABOUT_IMAGE_2}
                  alt="Concert crowd"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="section-label">Who We Are</p>
              <h2 className="heading-2 mt-4">
                Sound From <br />
                <span className="text-gradient-rust">The Underground</span>
              </h2>
              <p className="mt-8 text-ink-200 text-lg leading-relaxed">{BAND.bio}</p>
              <p className="mt-4 text-ink-300 leading-relaxed">
                Formed in {BAND.formed} in {BAND.origin}, the band has spent a decade touring
                relentlessly, evolving their sound from raw basement demos to the sweeping,
                cinematic records they release today.
              </p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 sm:py-32 bg-ink-900 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="section-label text-center block">History</p>
          <h2 className="heading-2 mt-4 text-center mb-16">
            The <span className="text-gradient-rust">Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-ink-700 -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-rust-600 rounded-full -translate-x-1/2 ring-4 ring-ink-900 z-10" />
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="pl-12 sm:pl-0 sm:w-1/2">
                    <p className="font-display font-bold text-2xl text-rust-500">{item.year}</p>
                    <p className="text-ink-300 mt-2 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press quotes */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label text-center block">Press</p>
          <h2 className="heading-2 mt-4 text-center mb-14">
            What People <span className="text-gradient-rust">Are Saying</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
      <section className="relative py-20 bg-ink-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-3">
            Meet The <span className="text-gradient-rust">People</span> Behind The Noise
          </h2>
          <Link to="/band" className="btn-primary mt-8">
            View The Band <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
