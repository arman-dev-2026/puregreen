import React, { useState, useEffect } from 'react';
import { Phone, Mail, Hammer, Home, Wrench, Droplets, HardHat, Pickaxe, PaintRoller, ShieldCheck, CheckCircle2, ChevronRight, Menu, X, ArrowRight, Banknote } from 'lucide-react';

export default function WarmConcrete() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Droplets, title: "Licensed Plumbing", desc: "Complete plumbing solutions for new installations, upgrades, and complex renovations." },
    { icon: Home, title: "Home Additions", desc: "Expand your living footprint seamlessly with thoughtfully integrated structural additions." },
    { icon: Hammer, title: "Basement Renovations", desc: "Unlock hidden potential by transforming unfinished basements into premium living spaces." },
    { icon: HardHat, title: "Foundation Work", desc: "Securing your home's structural integrity with professional foundation services." },
    { icon: Pickaxe, title: "Concrete Work", desc: "Precision concrete pouring and finishing for driveways, walkways, and structural supports." },
    { icon: PaintRoller, title: "Kitchen & Bath", desc: "Bespoke remodeling to elevate functionality and aesthetic appeal in your core rooms." },
    { icon: Wrench, title: "Basement Underpinning", desc: "Expert excavation and underpinning to maximize your basement ceiling height and value." }
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2926] font-['Inter'] selection:bg-[#6b8f71] selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#faf8f5]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#6b8f71] flex items-center justify-center rounded-sm text-white">
              <Home className="w-6 h-6" />
            </div>
            <span className={`font-['Montserrat'] font-bold text-xl tracking-tight ${isScrolled ? 'text-[#2d2926]' : 'text-white'}`}>
              PureGreen <span className="font-light">Construction</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
            <a href="#services" className={`${isScrolled ? 'text-[#2d2926]/80 hover:text-[#6b8f71]' : 'text-white/90 hover:text-white'} transition-colors`}>Services</a>
            <a href="#about" className={`${isScrolled ? 'text-[#2d2926]/80 hover:text-[#6b8f71]' : 'text-white/90 hover:text-white'} transition-colors`}>About Us</a>
            <a href="#financing" className={`${isScrolled ? 'text-[#2d2926]/80 hover:text-[#6b8f71]' : 'text-white/90 hover:text-white'} transition-colors`}>Financing</a>
            <a href="#contact" className={`px-5 py-2.5 rounded-sm flex items-center gap-2 transition-colors ${isScrolled ? 'bg-[#6b8f71] text-white hover:bg-[#58785e]' : 'bg-white text-[#2d2926] hover:bg-[#faf8f5]'}`}>
              <Phone className="w-4 h-4" />
              <span>647-960-1307</span>
            </a>
          </div>

          <button className={`md:hidden ${isScrolled ? 'text-[#2d2926]' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#faf8f5] pt-24 px-6 md:hidden flex flex-col gap-6 font-['Montserrat'] text-xl">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="border-b border-[#2d2926]/10 pb-4">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="border-b border-[#2d2926]/10 pb-4">About Us</a>
          <a href="#financing" onClick={() => setMobileMenuOpen(false)} className="border-b border-[#2d2926]/10 pb-4">Financing</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-[#6b8f71]">
            <Phone className="w-6 h-6" />
            <span>647-960-1307</span>
          </a>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img src="/__mockup/images/hero-bg.jpg" alt="Construction Site" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-20 container mx-auto px-6 md:px-12">
          <div className="max-w-2xl bg-[#faf8f5]/95 backdrop-blur-md p-10 md:p-16 shadow-2xl rounded-sm border-l-4 border-[#6b8f71]">
            <div className="inline-block px-3 py-1 bg-[#6b8f71]/10 text-[#6b8f71] font-semibold tracking-wider text-sm mb-6 rounded-sm uppercase">
              General Contractor
            </div>
            <h1 className="font-['Montserrat'] text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#2d2926]">
              Building the GTA's <br/><span className="text-[#6b8f71]">Future, Today.</span>
            </h1>
            <p className="text-[#2d2926]/80 text-lg md:text-xl mb-8 leading-relaxed font-light">
              Premium renovations, seamless additions, and expert foundation work. With 20 years of experience, we bring architectural vision to life with uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-[#6b8f71] text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#58785e] transition-colors shadow-lg shadow-[#6b8f71]/20">
                Get an Estimate <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-transparent border border-[#2d2926]/20 text-[#2d2926] px-8 py-4 rounded-sm font-semibold flex items-center justify-center hover:bg-[#2d2926]/5 transition-colors">
                Explore Services
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 pt-8 border-t border-[#2d2926]/10">
              <div className="flex flex-col">
                <span className="font-bold text-2xl font-['Montserrat']">20+</span>
                <span className="text-sm text-[#2d2926]/60 font-medium">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-[#2d2926]/10"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-10 h-10 text-[#6b8f71]" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm font-['Montserrat'] uppercase tracking-wide">Fully Insured</span>
                  <span className="text-xs text-[#2d2926]/60">SAB Liability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-6 text-[#2d2926]">
              Mastery in Every Detail.
            </h2>
            <p className="text-lg text-[#2d2926]/70 leading-relaxed font-light max-w-2xl">
              From licensed plumbing to comprehensive basement underpinning, our suite of services covers every structural and aesthetic need for your property.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div key={idx} className="group bg-[#f4efe8] p-10 rounded-sm hover:shadow-xl transition-all duration-300 border border-[#e8dfd1] hover:border-[#6b8f71]/30 hover:-translate-y-1">
                <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm text-[#6b8f71] group-hover:scale-110 transition-transform duration-300">
                  <srv.icon className="w-7 h-7" />
                </div>
                <h3 className="font-['Montserrat'] text-xl font-bold mb-3">{srv.title}</h3>
                <p className="text-[#2d2926]/70 leading-relaxed text-sm">{srv.desc}</p>
              </div>
            ))}
            
            {/* CTA Card inside grid */}
            <div className="group bg-[#6b8f71] text-white p-10 rounded-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-start lg:col-span-2 xl:col-span-1">
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-4">Have a custom project in mind?</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Let's discuss your vision and how our 20 years of expertise can bring it to life.</p>
              <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-white group-hover:gap-4 transition-all">
                Contact our team <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Trust */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-[#6b8f71] translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/__mockup/images/about-contractor.jpg" 
                alt="Contractor on site" 
                className="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-xl grayscale-[20%] sepia-[10%] contrast-[1.1]"
              />
              <div className="absolute -bottom-8 -left-8 z-20 bg-[#f4efe8] p-8 rounded-sm shadow-xl border border-[#e8dfd1] max-w-[250px] hidden md:block">
                <p className="font-['Montserrat'] font-bold text-xl mb-2">"Quality is never an accident."</p>
                <p className="text-sm text-[#2d2926]/70">— PureGreen Promise</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-[#6b8f71]/10 text-[#6b8f71] font-semibold tracking-wider text-sm mb-6 rounded-sm uppercase">
                Our Legacy
              </div>
              <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-8 text-[#2d2926]">
                Rooted in Toronto, Built to Last.
              </h2>
              <div className="space-y-6 text-[#2d2926]/80 text-lg font-light leading-relaxed mb-10">
                <p>
                  At PureGreen Construction Inc., we don't just build structures; we build trust. With over two decades of experience navigating the complexities of GTA real estate and building codes, we've established ourselves as the premier choice for discerning homeowners.
                </p>
                <p>
                  Whether it's a delicate bathroom remodel or a complex basement underpinning project, our team approaches every task with the same level of rigorous professionalism and artisanal care.
                </p>
              </div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#6b8f71] w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-lg">20 Years of Unbroken GTA Excellence</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#6b8f71] w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-lg">Fully Insured with SAB Liability</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#6b8f71] w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-lg">Transparent Pricing & Timeline Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="py-20 bg-[#2d2926] text-[#faf8f5]">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <Banknote className="w-16 h-16 text-[#6b8f71] mx-auto mb-6" />
          <h2 className="font-['Montserrat'] text-4xl font-bold mb-6">
            Dream Now, Pay Later.
          </h2>
          <p className="text-xl text-white/70 mb-10 font-light leading-relaxed">
            Don't let budget constraints delay your home's potential. We offer flexible, accessible financing options through FinanceIt to make your renovation dreams a reality today.
          </p>
          <button className="bg-[#6b8f71] text-white px-10 py-4 rounded-sm font-semibold hover:bg-[#58785e] transition-colors text-lg shadow-lg shadow-[#6b8f71]/20 inline-flex items-center gap-2">
            Explore Financing Options <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold mb-6 text-[#2d2926]">
                Let's Start Building.
              </h2>
              <p className="text-lg text-[#2d2926]/70 leading-relaxed font-light mb-12">
                Reach out to schedule a comprehensive consultation. Our experts are ready to evaluate your space, discuss your goals, and provide a detailed estimate.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f4efe8] rounded-sm flex items-center justify-center flex-shrink-0 text-[#6b8f71]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-lg mb-1">Call Us Directly</h4>
                    <p className="text-[#2d2926]/70 mb-1">Available Mon-Sat, 8am - 6pm</p>
                    <a href="tel:647-960-1307" className="text-xl font-semibold text-[#6b8f71] hover:underline">647-960-1307</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f4efe8] rounded-sm flex items-center justify-center flex-shrink-0 text-[#6b8f71]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-[#2d2926]/70 mb-1">We aim to respond within 24 hours</p>
                    <a href="mailto:puregreen.construction@yahoo.com" className="text-lg font-medium text-[#6b8f71] hover:underline">puregreen.construction@yahoo.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-sm shadow-xl border border-[#e8dfd1]">
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2d2926]">First Name</label>
                    <input type="text" className="w-full bg-[#faf8f5] border border-[#e8dfd1] rounded-sm px-4 py-3 focus:outline-none focus:border-[#6b8f71] focus:ring-1 focus:ring-[#6b8f71] transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#2d2926]">Last Name</label>
                    <input type="text" className="w-full bg-[#faf8f5] border border-[#e8dfd1] rounded-sm px-4 py-3 focus:outline-none focus:border-[#6b8f71] focus:ring-1 focus:ring-[#6b8f71] transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2d2926]">Email Address</label>
                  <input type="email" className="w-full bg-[#faf8f5] border border-[#e8dfd1] rounded-sm px-4 py-3 focus:outline-none focus:border-[#6b8f71] focus:ring-1 focus:ring-[#6b8f71] transition-all" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2d2926]">Service Needed</label>
                  <select className="w-full bg-[#faf8f5] border border-[#e8dfd1] rounded-sm px-4 py-3 focus:outline-none focus:border-[#6b8f71] focus:ring-1 focus:ring-[#6b8f71] transition-all text-[#2d2926]">
                    <option>Basement Renovation</option>
                    <option>Home Addition</option>
                    <option>Foundation Work</option>
                    <option>Plumbing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#2d2926]">Project Details</label>
                  <textarea rows={4} className="w-full bg-[#faf8f5] border border-[#e8dfd1] rounded-sm px-4 py-3 focus:outline-none focus:border-[#6b8f71] focus:ring-1 focus:ring-[#6b8f71] transition-all" placeholder="Tell us a bit about your timeline and vision..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#2d2926] text-white py-4 rounded-sm font-semibold hover:bg-[#6b8f71] transition-colors mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2926] text-[#faf8f5]/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-[#6b8f71]" />
            <span className="font-['Montserrat'] font-bold text-lg text-white">
              PureGreen <span className="font-light">Construction</span>
            </span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} PureGreen Construction Inc. All rights reserved. Serving the GTA.
          </div>
        </div>
      </footer>
    </div>
  );
}
