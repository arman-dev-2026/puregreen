import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

export function Financing() {
  return (
    <section id="financing" className="py-24 bg-gray-100 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="bg-white border-4 border-[#166534] shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-16">

            {/* Icon */}
            <div className="bg-[#166534] p-6 text-white shrink-0 self-start md:self-center">
              <Clock className="w-14 h-14" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="inline-block bg-[#166534]/10 text-[#166534] font-bold px-4 py-1 text-xs uppercase tracking-widest font-display mb-4">
                Coming Soon
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#166534] uppercase tracking-wide mb-4">
                Financing Options
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 font-sans leading-relaxed">
                We're working on bringing flexible financing options to make your project more accessible. In the meantime, give us a call and we'd be happy to discuss payment options that work for your budget.
              </p>
              <a
                href="tel:6479601307"
                className="inline-flex items-center gap-2 bg-[#166534] hover:bg-[#104d26] text-white font-display font-bold uppercase tracking-wider px-7 py-3.5 text-sm transition-colors group"
              >
                Call to Discuss Options
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
