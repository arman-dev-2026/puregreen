import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Menu, 
  ArrowRight,
  HardHat,
  Droplets,
  Home,
  Hammer
} from 'lucide-react';

export default function LightBold() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 font-['Inter'] selection:bg-green-500 selection:text-white">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-zinc-100 py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-sm font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <a href="tel:647-960-1307" className="flex items-center gap-2 hover:text-green-400 transition-colors">
            <Phone className="w-4 h-4 text-green-500" />
            647-960-1307
          </a>
          <a href="mailto:puregreen.construction@yahoo.com" className="hidden md:flex items-center gap-2 hover:text-green-400 transition-colors">
            <Mail className="w-4 h-4 text-green-500" />
            puregreen.construction@yahoo.com
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-500" />
          Serving the Greater Toronto Area
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 py-5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-['Oswald'] text-2xl font-bold uppercase tracking-wider text-zinc-900">
            PureGreen<span className="text-green-500">.</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 font-medium text-zinc-600">
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About Us</a>
          <a href="#financing" className="hover:text-zinc-900 transition-colors">Financing</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>

        <div className="hidden lg:flex">
          <a href="#contact" className="bg-zinc-900 text-white px-6 py-3 font-semibold hover:bg-green-500 transition-colors flex items-center gap-2 group">
            Get a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <button className="lg:hidden text-zinc-900">
          <Menu className="w-7 h-7" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[85vh]">
        {/* Left Text Panel */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 lg:p-24 bg-white">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 text-sm font-bold uppercase tracking-widest mb-6 border border-green-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              20 Years of GTA Excellence
            </div>
            <h1 className="font-['Oswald'] text-6xl sm:text-7xl lg:text-8xl font-bold uppercase leading-[1.05] tracking-tight mb-8 text-zinc-900">
              Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600">With Confidence.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg border-l-4 border-green-500 pl-6">
              Premier general contracting in the Greater Toronto Area. From licensed plumbing to full home additions and structural underpinning, we deliver uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-green-500 text-white px-8 py-4 font-bold uppercase tracking-wider text-center hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2 group">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-zinc-100 text-zinc-900 px-8 py-4 font-bold uppercase tracking-wider text-center hover:bg-zinc-200 transition-colors">
                Our Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Panel */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative">
          <img 
            src="/__mockup/images/hero-bg.jpg" 
            alt="Modern home construction" 
            className="w-full h-full object-cover grayscale-[20%] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent lg:hidden"></div>
        </div>
      </section>

      {/* Trust Badges - Editorial Row */}
      <section className="bg-zinc-900 text-white py-12 border-b-8 border-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
          <div className="flex items-center gap-6 sm:px-6 pt-6 sm:pt-0">
            <Clock className="w-12 h-12 text-green-500 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wide">20 Years Experience</h3>
              <p className="text-zinc-400 text-sm mt-1">Serving the GTA with proven expertise</p>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:px-6 pt-6 sm:pt-0">
            <ShieldCheck className="w-12 h-12 text-green-500 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wide">Fully Insured</h3>
              <p className="text-zinc-400 text-sm mt-1">SAB liability coverage for your peace of mind</p>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:px-6 pt-6 sm:pt-0">
            <CheckCircle2 className="w-12 h-12 text-green-500 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-['Oswald'] text-xl font-bold uppercase tracking-wide">Licensed Experts</h3>
              <p className="text-zinc-400 text-sm mt-1">Certified professionals for every trade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="font-['Oswald'] text-5xl font-bold uppercase tracking-tight text-zinc-900 mb-6">
              Our Core <span className="text-green-500">Services</span>
            </h2>
            <p className="text-lg text-zinc-600">
              We bring decades of structural and finishing expertise to every project. Specializing in high-complexity renovations and additions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', title: 'Licensed Plumbing', icon: Droplets, desc: 'Full-service plumbing installations, repairs, and rough-ins by certified professionals.' },
              { id: '02', title: 'Home Additions', icon: Home, desc: 'Expand your living space with structurally sound, beautifully finished single or multi-story additions.' },
              { id: '03', title: 'Basement Renovations', icon: Wrench, desc: 'Transform unfinished spaces into premium living areas, rental suites, or home theaters.' },
              { id: '04', title: 'Foundation Work', icon: HardHat, desc: 'Expert foundation repair, waterproofing, and structural reinforcement.' },
              { id: '05', title: 'Concrete Work', icon: Hammer, desc: 'Precision concrete pouring for driveways, walkways, pads, and structural elements.' },
              { id: '06', title: 'Basement Underpinning', icon: ShieldCheck, desc: 'Lower your basement floor safely to increase ceiling height and maximize property value.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 border-l-4 border-green-500 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <service.icon className="w-10 h-10 text-zinc-300 group-hover:text-green-500 transition-colors" strokeWidth={1.5} />
                  <span className="font-['Oswald'] text-3xl font-bold text-zinc-100">{service.id}</span>
                </div>
                <h3 className="font-['Oswald'] text-2xl font-bold uppercase tracking-wide text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Financing Split */}
      <section id="about" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 transform translate-x-4 translate-y-4"></div>
              <img 
                src="/__mockup/images/about-contractor.jpg" 
                alt="Contractor at work" 
                className="relative z-10 w-full h-[600px] object-cover grayscale-[30%]"
              />
            </div>
            <div>
              <h2 className="font-['Oswald'] text-5xl font-bold uppercase tracking-tight text-zinc-900 mb-8">
                Built on <span className="text-green-500">Integrity.</span>
              </h2>
              <div className="space-y-6 text-lg text-zinc-600 mb-10">
                <p>
                  At PureGreen Construction, we don't just build structures; we build trust. With over 20 years of dedicated service in the Greater Toronto Area, we've established a reputation for uncompromising quality and structural integrity.
                </p>
                <p>
                  Our team brings deep expertise to complex projects, from delicate structural underpinning to full-scale home additions. We handle the heavy lifting, the meticulous planning, and the precise execution so you don't have to worry.
                </p>
              </div>
              
              {/* Financing Callout */}
              <div id="financing" className="bg-zinc-50 border border-zinc-200 p-8">
                <h3 className="font-['Oswald'] text-2xl font-bold uppercase tracking-wide text-zinc-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-green-500 inline-block"></span>
                  Flexible Financing
                </h3>
                <p className="text-zinc-600 mb-6">
                  Don't let budget constraints delay your essential structural work or dream renovation. We've partnered with <strong>FinanceIt</strong> to offer flexible, affordable payment plans.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-wider hover:text-green-700">
                  Ask about financing options <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-800/50 skew-x-12 transform translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-['Oswald'] text-5xl font-bold uppercase tracking-tight mb-6">
                Ready to <span className="text-green-500">Build?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-md">
                Contact us today for a consultation and estimate. Let's discuss how we can bring your vision to life with precision and care.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-green-500 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300 text-sm uppercase tracking-wider mb-1">Call Us</h4>
                    <a href="tel:647-960-1307" className="text-2xl font-['Oswald'] font-bold hover:text-green-400 transition-colors">
                      647-960-1307
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-green-500 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300 text-sm uppercase tracking-wider mb-1">Email Us</h4>
                    <a href="mailto:puregreen.construction@yahoo.com" className="text-lg hover:text-green-400 transition-colors">
                      puregreen.construction@yahoo.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-green-500 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-300 text-sm uppercase tracking-wider mb-1">Service Area</h4>
                    <p className="text-lg text-zinc-100">
                      Greater Toronto Area (GTA)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="bg-white p-8 sm:p-10 text-zinc-900 shadow-2xl">
              <h3 className="font-['Oswald'] text-3xl font-bold uppercase tracking-wide mb-8">Request an Estimate</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-2 uppercase tracking-wide">Project Details</label>
                  <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="w-full bg-green-500 text-white font-bold uppercase tracking-wider py-4 hover:bg-zinc-900 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 flex items-center justify-center">
              <Home className="w-3 h-3 text-white" />
            </div>
            <span className="font-['Oswald'] text-xl font-bold uppercase tracking-wider text-white">
              PureGreen<span className="text-green-500">.</span>
            </span>
          </div>
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} PureGreen Construction Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm">Fully Insured & Licensed</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
