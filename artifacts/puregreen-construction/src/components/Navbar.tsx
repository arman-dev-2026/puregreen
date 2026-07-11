import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    // Wait for the mobile menu close animation to finish before scrolling,
    // otherwise the collapsing menu shifts the layout and the target is wrong.
    const delay = isMobileMenuOpen ? 350 : 0;
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, delay);
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Financing', id: 'financing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          className="flex flex-col cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-baseline font-display text-2xl md:text-3xl tracking-wide uppercase">
            <span className="font-normal text-white">Pure</span>
            <span className="font-bold text-primary ml-1">Green</span>
          </div>
          <span className="text-muted-foreground text-[10px] md:text-xs font-sans tracking-widest uppercase mt-[-4px]">
            Construction Inc.
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors uppercase tracking-wider font-display"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="tel:6479601307"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 mr-2" />
            Get a Free Quote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-left py-3 text-lg font-medium text-white hover:text-primary transition-colors border-b border-border/50 uppercase font-display tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <a 
                href="tel:6479601307"
                className="mt-4 flex items-center justify-center bg-primary text-white font-display uppercase tracking-wider px-6 py-4 text-base font-semibold w-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 647-960-1307
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
