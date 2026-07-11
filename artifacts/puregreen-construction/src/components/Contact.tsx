import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/animations';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-3xl md:text-5xl font-bold text-white mb-4 font-display uppercase tracking-wider"
          >
            Ready to <span className="text-primary">Build?</span>
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
            Contact us today for a free quote for all your construction needs.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {/* Phone */}
          <motion.a 
            variants={fadeIn}
            href="tel:6479601307"
            className="flex flex-col items-center p-8 bg-background border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <Phone className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-display uppercase tracking-wide text-xl mb-2">Call Us</h3>
            <p className="text-gray-400 mb-4 text-center">Available for your inquiries</p>
            <p className="text-primary font-bold text-2xl font-display tracking-wider">647-960-1307</p>
          </motion.a>

          {/* Email */}
          <motion.a 
            variants={fadeIn}
            href="mailto:puregreen.construction@yahoo.com"
            className="flex flex-col items-center p-8 bg-background border border-border hover:border-primary/50 transition-colors group"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <Mail className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-white font-display uppercase tracking-wide text-xl mb-2">Email Us</h3>
            <p className="text-gray-400 mb-4 text-center">Send us project details</p>
            <p className="text-primary font-bold text-sm sm:text-base break-all">puregreen.construction@yahoo.com</p>
          </motion.a>

          {/* Location */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center p-8 bg-background border border-border group"
          >
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-white font-display uppercase tracking-wide text-xl mb-2">Service Area</h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Proudly serving the Greater Toronto Area and surrounding communities.
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
