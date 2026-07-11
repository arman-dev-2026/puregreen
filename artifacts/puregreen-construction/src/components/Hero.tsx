import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { fadeIn, slideInLeft } from '@/lib/animations';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear hover:scale-105"
          style={{ 
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: 'center 40%'
          }}
        />
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={slideInLeft} className="mb-4">
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-sm font-semibold uppercase tracking-widest font-display mb-4">
              Greater Toronto Area
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase font-display tracking-wide">
            Built on <span className="text-primary">Trust.</span><br />
            Powered by <span className="text-primary">Experience.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Call for your free quote for all your construction needs! We bring 20 years of expertise to every foundation, addition, and renovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:6479601307"
              className="w-full sm:w-auto flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider px-8 py-4 text-base font-semibold transition-all hover:-translate-y-1 active:translate-y-0"
            >
              <Phone className="w-5 h-5 mr-3" />
              Get a Free Quote
            </a>
            <button 
              onClick={scrollToServices}
              className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white font-display uppercase tracking-wider px-8 py-4 text-base font-semibold transition-all"
            >
              Our Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center cursor-pointer text-white/50 hover:text-white transition-colors"
        onClick={scrollToServices}
      >
        <span className="text-xs uppercase tracking-widest font-display mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
