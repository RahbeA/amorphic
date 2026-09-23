import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="bg-ink-950">
      <PageHeader
        label="Stay Connected"
        title={
          <>
            Get In <span className="text-gradient-rust">Touch</span>
          </>
        }
        subtitle="Join the mailing list for early access to tickets, new music, and exclusive content."
      />

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rust-900/20 rounded-full blur-[160px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-ink-300 max-w-xl mx-auto text-lg leading-relaxed">
            Get early access to tickets, new music announcements, and exclusive content
            delivered straight to your inbox. No spam, ever.
          </p>

          {/* Form */}
          <div className="mt-10 max-w-md mx-auto">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 animate-fade-in">
                <CheckCircle2 size={48} className="text-rust-500" />
                <p className="text-ink-100 font-display uppercase tracking-wider">
                  You're On The List
                </p>
                <p className="text-ink-300 text-sm">
                  Check your inbox for a confirmation message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-ink-850 border border-ink-600 text-ink-100 placeholder-ink-400 pl-12 pr-4 py-3.5 font-body focus:outline-none focus:border-rust-600 transition-colors"
                    />
                  </div>
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                {error && <p className="text-rust-400 text-sm text-left">{error}</p>}
              </form>
            )}
          </div>

          {/* Booking contact */}
          <div className="mt-16 pt-10 border-t border-ink-700">
            <p className="text-ink-400 text-sm font-display uppercase tracking-wider">
              Booking & Press
            </p>
            <a
              href="mailto:booking@amorphicband.com"
              className="text-rust-400 hover:text-rust-300 transition-colors text-lg mt-2 inline-block"
            >
              booking@amorphicband.com
            </a>
          </div>

          {/* Management */}
          <div className="mt-8 pt-8 border-t border-ink-800">
            <p className="text-ink-400 text-sm font-display uppercase tracking-wider">
              Management
            </p>
            <a
              href="mailto:management@amorphicband.com"
              className="text-rust-400 hover:text-rust-300 transition-colors text-lg mt-2 inline-block"
            >
              management@amorphicband.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
