import { motion } from 'framer-motion';
import { CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

const benefits = [
  'Fast approval process',
  'Manageable monthly payments',
  'Financing link sent after your quote',
  'No obligation to proceed'
];

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
          <div className="flex flex-col md:flex-row">

            {/* Green accent strip */}
            <div className="bg-[#166534] md:w-2 shrink-0 h-2 md:h-auto" />

            <div className="flex flex-col md:flex-row items-center gap-10 p-10 md:p-14 w-full">

              {/* Icon block */}
              <div className="bg-[#166534] p-6 text-white shrink-0 self-start md:self-center">
                <CreditCard className="w-14 h-14" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-[#166534] uppercase tracking-wide mb-4">
                  Flexible Financing Available
                </h2>
                <p className="text-gray-700 text-base md:text-lg mb-6 font-sans leading-relaxed">
                  Don't let budget constraints delay your project. We've partnered with{' '}
                  <strong className="text-gray-900">FinanceIt</strong> — Canada's leading home improvement
                  financing platform. Once you receive your quote, we'll send the financing application directly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-gray-700 font-sans text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-[#166534] shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>

                <a
                  href="tel:6479601307"
                  className="inline-flex items-center gap-2 bg-[#166534] hover:bg-[#104d26] text-white font-display font-bold uppercase tracking-wider px-7 py-3.5 text-sm transition-colors group"
                >
                  Ask About Financing
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
