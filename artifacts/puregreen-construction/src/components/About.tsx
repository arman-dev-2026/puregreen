import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, FileText } from 'lucide-react';
import { fadeIn, slideInLeft, slideInRight } from '@/lib/animations';
import aboutImg from '@/assets/about-contractor.jpg';

const pillars = [
  {
    icon: Clock,
    title: '20 Years Experience',
    description: 'Serving the Greater Toronto Area since 2004 with proven expertise.'
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    description: 'SAB liability insurance, so you and your property are completely protected.'
  },
  {
    icon: Award,
    title: 'Licensed Plumber',
    description: 'Certified trade expertise on every job, ensuring code-compliant work.'
  },
  {
    icon: FileText,
    title: 'Free Quotations',
    description: 'No-cost, no-obligation estimates for every prospective project.'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card border-y border-card-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full border-l-4 border-b-4 border-primary p-4">
              <div 
                className="absolute inset-4 bg-cover bg-center grayscale contrast-125"
                style={{ backgroundImage: `url(${aboutImg})` }}
              />
              {/* Decorative overlay element */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-border p-6 shadow-2xl z-10 hidden md:block">
                <p className="font-display uppercase text-primary font-bold text-4xl mb-1">2004</p>
                <p className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Established</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-wider">
              Why Choose <span className="text-primary">PureGreen</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-8" />
            
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              We are a serious, experienced trade business. Run by Imran "Tony" Khan and Michelle Coloma, we bring 20 years of hands-on experience to every project. No nonsense — homeowners trust us because we've seen it all and we build it right.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <Icon className="w-6 h-6 text-primary mr-3" />
                      <h4 className="text-white font-bold font-display uppercase tracking-wide text-lg">{pillar.title}</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
