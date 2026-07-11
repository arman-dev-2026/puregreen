import { motion } from 'framer-motion';
import { 
  Wrench, 
  Home, 
  Pickaxe, 
  HardHat, 
  Hammer, 
  Bath, 
  ArrowDownToLine 
} from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

const services = [
  {
    icon: Wrench,
    title: 'Licensed Plumbing',
    description: 'Interior rough-in and finish plumbing by a licensed plumber.'
  },
  {
    icon: Home,
    title: 'Home Additions',
    description: 'Structural additions, framing, and interior finish to expand your living space.'
  },
  {
    icon: Pickaxe,
    title: 'Basement Renovations',
    description: 'Full basement development, finishing, and waterproofing.'
  },
  {
    icon: HardHat,
    title: 'Foundation Work',
    description: 'Poured concrete foundations, open-concept beam installation, LVL and steel beam support.'
  },
  {
    icon: Hammer,
    title: 'Concrete Work',
    description: 'Flatwork, foundation walls, slabs, and concrete finishing.'
  },
  {
    icon: Bath,
    title: 'Kitchen & Bathroom Renovations',
    description: 'Full gut-and-rebuild, custom tile, fixtures, and finish carpentry.'
  },
  {
    icon: ArrowDownToLine,
    title: 'Basement Underpinning',
    description: 'Bench or needle underpinning to increase ceiling height and structural depth.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-wider"
          >
            Professional <span className="text-primary">Services</span>
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="w-24 h-1 bg-primary mx-auto mb-6"
          />
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-gray-400 text-lg"
          >
            Complete construction solutions delivered with expertise and precision.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the last item span full width on large screens to avoid orphan
            const isLastOdd = index === services.length - 1 && services.length % 3 !== 0 && services.length % 4 !== 0;
            
            return (
              <motion.div
                key={service.title}
                variants={fadeIn}
                className={`bg-card border border-card-border p-8 hover:border-primary/50 transition-colors group flex flex-col items-start ${
                  isLastOdd ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="bg-primary/10 p-4 rounded-none mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
