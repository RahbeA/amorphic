import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Music2, Disc3 } from 'lucide-react';
import { NAV_LINKS } from '@/data/band';

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Spotify', href: '#', icon: Disc3 },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'Bandcamp', href: '#', icon: Music2 },
  { label: 'Twitter', href: '#', icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-ink-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h3 className="font-display font-bold uppercase tracking-[0.2em] text-3xl">
                <span className="text-ink-100">AMOR</span>
                <span className="text-rust-500">PH</span>
                <span className="text-ink-100">IC</span>
              </h3>
            </Link>
            <p className="text-ink-400 text-sm mt-4 max-w-xs leading-relaxed">
              Post-metal / atmospheric rock from Portland, Oregon. Loud, layered, and
              uncompromising.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-rust-400 text-xs font-display uppercase tracking-[0.3em] mb-4">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-ink-300 hover:text-rust-400 transition-colors text-sm font-display uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-rust-400 text-xs font-display uppercase tracking-[0.3em] mb-4">
              Follow
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center border border-ink-700 text-ink-300 hover:border-rust-600 hover:text-rust-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(154,43,43,0.3)]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-400 text-xs">
            © {new Date().getFullYear()} AMORPHIC. All rights reserved.
          </p>
          <p className="text-ink-400 text-xs font-display uppercase tracking-wider">
            Made with noise in Portland, OR
          </p>
        </div>
      </div>
    </footer>
  );
}
