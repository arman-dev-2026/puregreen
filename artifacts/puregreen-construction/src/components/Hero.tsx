import { motion } from 'framer-motion';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[85vh] min-h-[580px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction site Toronto"
          className="w-full h-full object-cover object-center"
        />
        {/* Forest green gradient overlay — strong left, fades right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#166534]/95 via-[#166534]/75 to-[#166534]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-block bg-white text-[#166534] font-bold px-4 py-1.5 mb-6 text-xs uppercase tracking-widest font-display">
            General Contractor — Greater Toronto Area
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] mb-6 uppercase">
            <span className="text-white">Building Trust.</span><br />
            <span className="text-[#a7f3d0]">Building Excellence.</span>
          </h1>

          {/* Sub-copy */}
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl leading-relaxed font-sans font-light">
            With 10+ years of GTA experience, we deliver superior construction, renovation, and structural services. Fully insured. Fully committed.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:6479601307"
              className="flex items-center justify-center gap-3 bg-white text-[#166534] hover:bg-gray-100 font-display font-bold uppercase tracking-wider px-8 py-4 text-sm transition-colors"
            >
              <Phone className="w-5 h-5" />
              Get a Free Quote
            </a>
            <button
              onClick={scrollToServices}
              className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-display font-bold uppercase tracking-wider px-8 py-4 text-sm transition-colors"
            >
              Our Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-6 text-white/90 text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#a7f3d0] rounded-full" /> 10+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#a7f3d0] rounded-full" /> Fully Insured (SAB Liability)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#a7f3d0] rounded-full" /> Licensed Professionals
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer text-white/60 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-display mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
