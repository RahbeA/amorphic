import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/band';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const showSolid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-700 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="font-display font-bold uppercase tracking-[0.2em] text-xl sm:text-2xl">
            <span className="text-ink-100">A</span>
            <span className="text-rust-500">MOR</span>
            <span className="text-ink-100">PH</span>
            <span className="text-rust-500">IC</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `font-display uppercase tracking-wider text-sm transition-colors duration-300 relative group ${
                    isActive ? 'text-rust-400' : 'text-ink-200 hover:text-rust-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-rust-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/tour" className="hidden lg:inline-flex btn-primary !px-6 !py-2.5 !text-xs">
          Get Tickets
        </Link>

        <button
          className="lg:hidden text-ink-100 hover:text-rust-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-ink-900/98 backdrop-blur-md border-t border-ink-700 px-6 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `block font-display uppercase tracking-wider text-lg transition-colors ${
                    isActive ? 'text-rust-400' : 'text-ink-100 hover:text-rust-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/tour" className="btn-primary w-full mt-2">
              Get Tickets
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
