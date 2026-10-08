import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Server } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-lg font-bold tracking-tight text-zinc-900 group flex items-center gap-2">
            {SITE_DATA.name}
            <span className="text-teal-700 font-serif italic text-sm">AI</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-teal-700 ${
                    isActive ? 'text-zinc-900 border-b-2 border-teal-700 pb-0.5' : 'text-zinc-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex h-9 items-center justify-center bg-zinc-900 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-zinc-800"
          >
            Discuss a project
          </Link>
          
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-zinc-600 hover:text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-6 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors hover:text-teal-700 ${
                    isActive ? 'text-teal-700' : 'text-zinc-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-6 mt-2 border-t border-zinc-100 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center bg-zinc-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Discuss a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
