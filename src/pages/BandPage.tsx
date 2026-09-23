import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { MEMBERS } from '@/data/band';

export default function BandPage() {
  return (
    <div className="bg-ink-950">
      <PageHeader
        label="The Roster"
        title={
          <>
            The <span className="text-gradient-rust">Band</span>
          </>
        }
        subtitle="Four musicians, four distinct voices, one unified sound."
      />

      <section className="relative py-20 sm:py-28 bg-ink-950 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {MEMBERS.map((member) => (
              <div key={member.name} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-ink-850">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-rust-400 text-xs font-display uppercase tracking-[0.2em] mb-1">
                      {member.role}
                    </p>
                    <h3 className="font-display font-semibold text-xl uppercase tracking-wide text-ink-100">
                      {member.name}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-ink-200 text-sm leading-relaxed text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-ink-900 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="heading-3">
            Want To See Us <span className="text-gradient-rust">Live?</span>
          </h2>
          <Link to="/tour" className="btn-primary mt-8">
            View Tour Dates <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
