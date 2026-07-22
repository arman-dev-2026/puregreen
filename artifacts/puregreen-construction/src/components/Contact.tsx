import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Phone',
    value: '647-960-1307',
    href: 'tel:6479601307',
    sub: 'Call or text for a free quote'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'puregreen.construction@yahoo.com',
    href: 'mailto:puregreen.construction@yahoo.com',
    sub: 'Send us your project details'
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Toronto & the GTA',
    href: null,
    sub: 'Serving all Greater Toronto communities'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24">
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#166534] mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-xl mx-auto font-sans">
            Ready to start your next project? Contact us today for a free consultation and estimate.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="w-14 h-14 bg-gray-100 flex items-center justify-center text-[#166534] mb-5 shrink-0 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-gray-900 uppercase tracking-wide text-lg mb-1">
                  {item.label}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{item.sub}</p>
                <p className="font-semibold text-[#166534] text-base md:text-lg break-all text-center leading-snug">
                  {item.value}
                </p>
              </>
            );

            const sharedClass =
              'group flex flex-col items-center p-8 bg-white border border-gray-200 hover:border-[#166534] hover:shadow-md transition-all text-center';

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                {item.href ? (
                  <a href={item.href} className={sharedClass}>
                    {inner}
                  </a>
                ) : (
                  <div className={sharedClass}>
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-16 bg-[#166534] text-white p-10 md:p-14 text-center max-w-5xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wide mb-3">
            Ready to Build? Call Us Today.
          </h3>
          <p className="text-gray-200 mb-6 font-sans text-base max-w-xl mx-auto">
            We offer free, no-obligation quotes on all projects. New financing options coming soon.
          </p>
          <a
            href="tel:6479601307"
            className="inline-flex items-center gap-3 bg-white text-[#166534] hover:bg-gray-100 font-display font-bold uppercase tracking-wider px-8 py-4 text-sm transition-colors"
          >
            <Phone className="w-5 h-5" />
            647-960-1307
          </a>
        </motion.div>

      </div>
    </section>
  );
}
