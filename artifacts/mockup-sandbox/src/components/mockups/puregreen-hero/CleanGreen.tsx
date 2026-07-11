import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Wrench, 
  Home, 
  LayoutTemplate, 
  Ruler, 
  HardHat, 
  PaintRoller, 
  Hammer,
  CreditCard,
  ArrowRight,
  Menu
} from 'lucide-react';

export default function CleanGreen() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-black flex flex-col">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-[#166534] text-white py-2 px-8 text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><MapPin size={16} /> Toronto & GTA</span>
          <span className="flex items-center gap-2"><Phone size={16} /> 647-960-1307</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} /> puregreen.construction@yahoo.com
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white border-b-4 border-[#166534] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-3xl font-['Oswald'] font-bold text-[#166534] uppercase tracking-wide flex items-center gap-2">
            <div className="w-8 h-8 bg-[#166534] flex items-center justify-center text-white">
              <Home size={20} />
            </div>
            PureGreen
          </div>
          
          <nav className="hidden md:flex gap-8 font-semibold text-gray-800 uppercase text-sm tracking-wider">
            <a href="#services" className="hover:text-[#166534] transition-colors">Services</a>
            <a href="#about" className="hover:text-[#166534] transition-colors">About</a>
            <a href="#financing" className="hover:text-[#166534] transition-colors">Financing</a>
            <a href="#contact" className="hover:text-[#166534] transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="bg-[#166534] text-white px-6 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-[#104d26] transition-colors inline-flex items-center gap-2">
              Get an Estimate <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden text-[#166534]">
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero-bg.jpg" 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
          {/* Strong forest-green gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#166534]/95 via-[#166534]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-white text-[#166534] font-bold px-4 py-1 mb-6 text-sm uppercase tracking-widest font-['Oswald']">
              General Contractor in Toronto GTA
            </div>
            <h1 className="text-6xl md:text-7xl font-['Oswald'] font-bold leading-[1.1] mb-6 uppercase">
              Building Trust.<br />
              <span className="text-[#a7f3d0]">Building Excellence.</span>
            </h1>
            <p className="text-xl mb-10 text-gray-100 font-light max-w-xl leading-relaxed">
              With 20 years of experience, we deliver superior construction, renovation, and structural services. Fully insured. Fully committed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-white text-[#166534] px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors text-center inline-flex justify-center items-center gap-2">
                Our Services
              </a>
              <a href="#contact" className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors text-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-['Oswald'] font-bold text-[#166534] uppercase tracking-wide mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#166534] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive construction and renovation solutions tailored to your property's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Service 1 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Wrench size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Licensed Plumbing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional plumbing installations, repairs, and rough-ins for residential and commercial projects.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Home size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Home Additions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expand your living space with custom-built additions designed to seamlessly integrate with your home.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <LayoutTemplate size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Basement Renovations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform unfinished basements into beautiful, functional living areas, suites, or entertainment spaces.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Ruler size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Foundation Work</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert structural foundation repairs, waterproofing, and new foundation laying with precision.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <HardHat size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Concrete Work</h3>
                <p className="text-gray-600 leading-relaxed">
                  Durable driveways, walkways, patios, and retaining walls built with high-quality concrete.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <PaintRoller size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Kitchen & Bath</h3>
                <p className="text-gray-600 leading-relaxed">
                  Modernize your most important spaces with high-end finishes and functional layouts.
                </p>
              </div>
            </div>

            {/* Service 7 - Centered or spanning if needed, but let's just make it flow */}
            <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start group md:col-span-2 md:w-1/2 md:mx-auto">
              <div className="w-16 h-16 shrink-0 bg-[#166534] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Hammer size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-['Oswald'] font-bold mb-3 uppercase">Basement Underpinning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Lower your basement floor to increase ceiling height and property value, executed with structural integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Stats Split Section */}
      <section id="about" className="flex flex-col lg:flex-row">
        {/* Left Panel - Forest Green */}
        <div className="lg:w-1/2 bg-[#166534] text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg ml-auto">
            <h2 className="text-5xl font-['Oswald'] font-bold uppercase tracking-wide mb-6">About PureGreen</h2>
            <div className="w-24 h-1 bg-[#a7f3d0] mb-8"></div>
            <p className="text-lg leading-relaxed mb-8 font-light text-gray-100">
              For over two decades, PureGreen Construction Inc. has been a cornerstone of quality building and renovation across the Greater Toronto Area. 
            </p>
            <p className="text-lg leading-relaxed mb-10 font-light text-gray-100">
              We understand that your property is your most valuable asset. That's why we bring uncompromising standards, fully insured protection (SAB liability), and a commitment to completing projects on time and within budget.
            </p>
            <div className="relative h-64 w-full">
              <img 
                src="/__mockup/images/about-contractor.jpg" 
                alt="Contractor on site" 
                className="w-full h-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Panel - White */}
        <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="max-w-lg mr-auto">
            <h3 className="text-3xl font-['Oswald'] font-bold text-[#166534] uppercase tracking-wide mb-10">Why Choose Us</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <CheckCircle className="text-[#166534] shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase font-['Oswald']">20+ Years Experience</h4>
                  <p className="text-gray-600">Deep expertise in local building codes and structural requirements across the GTA.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="text-[#166534] shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase font-['Oswald']">Fully Insured</h4>
                  <p className="text-gray-600">Complete peace of mind with comprehensive SAB liability coverage.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="text-[#166534] shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2 uppercase font-['Oswald']">Licensed Professionals</h4>
                  <p className="text-gray-600">From plumbing to structural work, our team holds the necessary licenses to do it right.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-[#166534] pl-6">
                <div className="text-5xl font-['Oswald'] font-bold text-[#166534] mb-2">20</div>
                <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">Years Experience</div>
              </div>
              <div className="border-l-4 border-[#166534] pl-6">
                <div className="text-5xl font-['Oswald'] font-bold text-[#166534] mb-2">100%</div>
                <div className="text-gray-500 font-bold uppercase tracking-wider text-sm">Fully Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Callout */}
      <section id="financing" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border-4 border-[#166534] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 shadow-lg relative overflow-hidden">
            {/* Geometric accent */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#166534] rotate-45"></div>
            
            <div className="bg-[#166534] p-6 text-white shrink-0">
              <CreditCard size={64} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-['Oswald'] font-bold text-[#166534] uppercase tracking-wide mb-4">Flexible Financing Available</h2>
              <p className="text-gray-600 text-lg mb-6">
                Don't let budget constraints delay your dream project. We've partnered with <strong>FinanceIt</strong> to offer easy, flexible payment plans for your construction and renovation needs.
              </p>
              <button className="bg-[#166534] text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-[#104d26] transition-colors">
                Learn About Financing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-['Oswald'] font-bold text-[#166534] uppercase tracking-wide mb-4">Get In Touch</h2>
              <div className="w-24 h-1 bg-[#166534] mb-8"></div>
              <p className="text-gray-600 mb-10 text-lg">
                Ready to start your next project? Contact us today for a consultation and estimate.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#166534] shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Oswald'] uppercase">Phone</h4>
                    <a href="tel:647-960-1307" className="text-gray-600 hover:text-[#166534] text-xl font-medium">647-960-1307</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#166534] shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Oswald'] uppercase">Email</h4>
                    <a href="mailto:puregreen.construction@yahoo.com" className="text-gray-600 hover:text-[#166534] text-lg font-medium break-all">
                      puregreen.construction@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[#166534] shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-['Oswald'] uppercase">Service Area</h4>
                    <p className="text-gray-600 text-lg font-medium">Toronto & the GTA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-gray-50 p-10 border-t-4 border-[#166534]">
              <h3 className="text-2xl font-['Oswald'] font-bold mb-6 uppercase">Request an Estimate</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">First Name</label>
                    <input type="text" className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Phone Number</label>
                    <input type="tel" className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]" placeholder="(555) 555-5555" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Service Required</label>
                  <select className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534] bg-white">
                    <option>Select a service...</option>
                    <option>Home Additions</option>
                    <option>Basement Renovations</option>
                    <option>Basement Underpinning</option>
                    <option>Kitchen & Bathroom</option>
                    <option>Licensed Plumbing</option>
                    <option>Foundation Work</option>
                    <option>Concrete Work</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Project Details</label>
                  <textarea rows={5} className="w-full p-4 border border-gray-300 focus:outline-none focus:border-[#166534] focus:ring-1 focus:ring-[#166534]" placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="bg-[#166534] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#104d26] transition-colors w-full md:w-auto inline-flex justify-center items-center gap-2">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#166534] text-white py-12 border-t-[16px] border-[#0d4020]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-['Oswald'] font-bold uppercase tracking-wide flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center text-[#166534]">
                <Home size={20} />
              </div>
              PureGreen
            </div>
            <p className="text-gray-300 font-light max-w-sm">
              Your trusted partner for premium construction and renovation services across the Greater Toronto Area.
            </p>
          </div>
          
          <div>
            <h4 className="font-['Oswald'] font-bold uppercase text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#financing" className="hover:text-white transition-colors">Financing Options</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Free Estimate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Oswald'] font-bold uppercase text-lg mb-6">Business Hours</h4>
            <ul className="space-y-3 text-gray-300 font-light">
              <li className="flex justify-between border-b border-[#1f7941] pb-2">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#1f7941] pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#1f7941] text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PureGreen Construction Inc. All rights reserved. Fully Insured (SAB liability).</p>
        </div>
      </footer>
    </div>
  );
}
