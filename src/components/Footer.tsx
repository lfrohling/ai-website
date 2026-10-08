import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export default function Footer() {
  const handleEmailClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const user = "Contact";
    const domain = "LukeFrohling.com";
    const subject = encodeURIComponent("An Inquiry From Your Website");
    window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-12">
          
          <div className="space-y-4 lg:col-span-1 border-r border-zinc-100 pr-8">
            <Link to="/" className="text-lg font-bold tracking-tight text-zinc-900 group flex items-center gap-2">
              {SITE_DATA.name}
              <span className="text-teal-700 font-serif italic text-sm">AI</span>
            </Link>
            <p className="text-sm text-zinc-600 max-w-xs leading-relaxed font-serif">
              Applied AI, prototypes, and practical systems.
              <br />
              Based in Perth, Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Navigation</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li><Link to="/" className="hover:text-teal-700 transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-teal-700 transition-colors">Projects</Link></li>
                <li><Link to="/services" className="hover:text-teal-700 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-teal-700 transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Connect</h3>
              <ul className="space-y-3 text-sm text-zinc-600">
                <li><Link to="/contact" className="hover:text-teal-700 transition-colors">Contact</Link></li>
                <li><a href="#" onClick={handleEmailClick} className="hover:text-teal-700 transition-colors">Email</a></li>
                <li><Link to="/settings" className="hover:text-teal-700 transition-colors">FTP Settings</Link></li>
                <li>
                  <a 
                    href={SITE_DATA.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink size={12} className="text-zinc-400" />
                  </a>
                </li>
                <li>
                  <a 
                    href={SITE_DATA.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>GitHub</span>
                    <ExternalLink size={12} className="text-zinc-400" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="bg-zinc-50 p-6 border border-zinc-200">
                <h3 className="text-xs font-semibold text-zinc-900 mb-2 uppercase tracking-widest">Availability</h3>
                <div className="text-sm font-serif text-zinc-600 mb-6">
                  Currently open to new opportunities.
                </div>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.</p>
          <p>Built as a static prototype.</p>
        </div>
      </div>
    </footer>
  );
}
