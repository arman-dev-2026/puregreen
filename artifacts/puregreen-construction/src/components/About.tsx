import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import aboutImg from '@/assets/about-contractor.jpg';

const reasons = [
  {
    title: '10+ Years GTA Experience',
    description: 'Deep expertise in local building codes and structural requirements across the Greater Toronto Area since 2004.'
  },
  {
    title: 'Fully Insured',
    description: 'Complete peace of mind with comprehensive SAB liability coverage on every project.'
  },
  {
    title: 'Licensed Professionals',
    description: 'From licensed plumbing to structural work, our team holds the necessary credentials to do it right.'
  },
  {
    title: 'Free Quotes',
    description: 'No-cost, no-obligation estimates for every prospective project — no pressure, just honest pricing.'
  }
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex flex-col lg:flex-row">

        {/* Left — Forest green panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-[#166534] text-white py-16 px-8 md:px-16 lg:py-24 lg:px-20 flex flex-col justify-center"
        >
          <div className="max-w-lg lg:ml-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wide mb-4">
              About PureGreen
            </h2>
            <div className="w-20 h-1 bg-[#a7f3d0] mb-8" />
            <p className="text-gray-100 text-lg leading-relaxed mb-6 font-sans font-light">
              For over two decades, PureGreen Construction Inc. has been a cornerstone of quality building and renovation across the Greater Toronto Area.
            </p>
            <p className="text-gray-100 text-lg leading-relaxed mb-10 font-sans font-light">
              Run by Imran "Tony" Khan and Michelle Coloma, we bring uncompromising standards, fully insured protection, and a commitment to completing every project on time and within budget.
            </p>
            <div className="relative">
              <img
                src={aboutImg}
                alt="PureGreen Construction team on site"
                className="w-full h-56 md:h-72 object-cover border-4 border-white shadow-xl"
              />
              <div className="absolute bottom-0 left-0 bg-white text-[#166534] px-5 py-3 shadow-lg">
                <p className="font-display font-bold text-2xl leading-none">2004</p>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mt-0.5">Established</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — White panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-white py-16 px-8 md:px-16 lg:py-24 lg:px-20 flex flex-col justify-center"
        >
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-[#166534] uppercase tracking-wide mb-4">
              Why Choose Us
            </h3>
            <div className="w-20 h-1 bg-[#166534] mb-10" />

            <div className="space-y-7">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <CheckCircle className="w-7 h-7 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-gray-900 uppercase tracking-wide text-lg mb-1">
                      {r.title}
                    </h4>
                    <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base">
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#166534] pl-5">
                <div className="text-4xl font-display font-bold text-[#166534] mb-1">20+</div>
                <div className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Years Experience</div>
              </div>
              <div className="border-l-4 border-[#166534] pl-5">
                <div className="text-4xl font-display font-bold text-[#166534] mb-1">100%</div>
                <div className="text-gray-500 font-semibold uppercase tracking-wider text-xs">Fully Insured</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
