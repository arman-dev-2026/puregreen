import { motion } from 'framer-motion';
import {
  Wrench,
  Home,
  Layers,
  HardHat,
  Hammer,
  Bath,
  ArrowDownToLine
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Licensed Plumbing',
    description: 'Interior rough-in and finish plumbing by a licensed plumber — code-compliant every time.'
  },
  {
    icon: Home,
    title: 'Home Additions',
    description: 'Structural additions, framing, and interior finish to seamlessly expand your living space.'
  },
  {
    icon: Layers,
    title: 'Basement Renovations',
    description: 'Full basement development, finishing, and waterproofing for suites or recreation rooms.'
  },
  {
    icon: HardHat,
    title: 'Foundation Work',
    description: 'Poured concrete foundations, beam installation, and structural support executed with precision.'
  },
  {
    icon: Hammer,
    title: 'Concrete Work',
    description: 'Driveways, walkways, patios, slabs, and retaining walls — durable and built to last.'
  },
  {
    icon: Bath,
    title: 'Kitchen & Bathroom Renovations',
    description: 'Full gut-and-rebuild, custom tile, fixtures, and finish carpentry for your key spaces.'
  },
  {
    icon: ArrowDownToLine,
    title: 'Basement Underpinning',
    description: 'Lower your basement floor to increase ceiling height and property value with structural integrity.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' as const }
  })
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#166534] uppercase tracking-wide mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#166534] mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-sans">
            Comprehensive construction and renovation solutions for the Greater Toronto Area.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLastOdd = index === services.length - 1 && services.length % 2 !== 0;
            return (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 flex gap-6 items-start group ${
                  isLastOdd ? 'md:col-span-2 md:max-w-lg md:mx-auto w-full' : ''
                }`}
              >
                <div className="w-14 h-14 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-sans text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
