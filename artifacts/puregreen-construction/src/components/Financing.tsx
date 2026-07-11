import { motion } from 'framer-motion';
import { Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeIn, slideInLeft, staggerContainer } from '@/lib/animations';

export function Financing() {
  const benefits = [
    "Fast approval process",
    "Manageable monthly payments",
    "Financing application sent after your quote",
    "No obligation to proceed"
  ];

  return (
    <section id="financing" className="py-24 bg-background relative overflow-hidden scroll-mt-20">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-card border border-border p-8 md:p-12 lg:p-16">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="w-full lg:w-3/5"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-3 py-1 mb-6">
                <Landmark className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-semibold uppercase tracking-widest font-display">
                  Project Funding
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display uppercase tracking-wider leading-tight">
                Flexible <span className="text-primary">Financing</span> Available
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Don't let budget stand in the way of your project. We offer flexible financing through FinanceIt — Canada's leading home improvement financing platform. Once you receive your quote, we'll send you a financing application directly.
              </p>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
              >
                {benefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <a 
                href="tel:6479601307"
                className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-display uppercase tracking-wider px-8 py-4 text-base font-semibold transition-all group"
              >
                Ask About Financing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <div className="bg-background border border-border p-10 w-full max-w-sm flex flex-col items-center justify-center space-y-6">
                {/* FinanceIt Logo representation since we can't reliably load external logo images without them breaking */}
                <div className="text-center w-full">
                  <div className="text-4xl font-bold text-white flex items-center justify-center mb-2">
                    finance<span className="text-primary">it</span>
                  </div>
                  <div className="h-px w-full bg-border my-4" />
                  <p className="text-muted-foreground text-sm uppercase tracking-widest font-display">
                    Official Partner
                  </p>
                </div>
                
                <div className="w-full bg-card/50 p-4 border border-border text-center">
                  <p className="text-white font-semibold font-display text-xl mb-1">Get Pre-Approved</p>
                  <p className="text-muted-foreground text-sm">Ask us for the application link</p>
                </div>
              </div>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
