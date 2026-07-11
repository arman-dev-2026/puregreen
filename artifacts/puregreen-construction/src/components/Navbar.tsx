import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const delay = isMobileMenuOpen ? 350 : 0;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, delay);
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Financing', id: 'financing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:flex justify-between items-center bg-[#166534] text-white py-2 px-6 text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Toronto &amp; GTA
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> 647-960-1307
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" /> puregreen.construction@yahoo.com
        </span>
      </div>

      {/* Main navbar */}
      <header className="bg-white border-b-4 border-[#166534] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-18 flex items-center justify-between py-4">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-[#166534] flex items-center justify-center text-white shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-display text-xl md:text-2xl font-bold text-[#166534] uppercase tracking-wide leading-none">
                PureGreen
              </span>
              <span className="text-[9px] md:text-[10px] font-sans tracking-widest uppercase text-gray-500 leading-none mt-0.5">
                Construction Inc.
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-semibold text-gray-700 hover:text-[#166534] transition-colors uppercase tracking-wider font-display"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:6479601307"
            className="hidden md:inline-flex items-center gap-2 bg-[#166534] hover:bg-[#104d26] text-white font-display uppercase tracking-wider px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4" />
            Get a Free Quote
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#166534] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="text-left py-3 text-base font-semibold text-gray-800 hover:text-[#166534] border-b border-gray-100 uppercase font-display tracking-wider transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <a
                  href="tel:6479601307"
                  className="mt-4 flex items-center justify-center gap-2 bg-[#166534] text-white font-display uppercase tracking-wider px-6 py-4 text-base font-semibold w-full"
                >
                  <Phone className="w-5 h-5" />
                  Call 647-960-1307
                </a>
                <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500">
                  <a href="mailto:puregreen.construction@yahoo.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#166534]" /> puregreen.construction@yahoo.com
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#166534]" /> Toronto &amp; Greater Toronto Area
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
