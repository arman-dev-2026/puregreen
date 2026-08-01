import { Home } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#166534] text-white border-t-8 border-[#0d4020]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white flex items-center justify-center text-[#166534] shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-xl uppercase tracking-wide leading-none">PureGreen</div>
              <div className="text-[10px] tracking-widest uppercase text-green-200 leading-none mt-0.5">Construction & Cleaning Inc.</div>
            </div>
          </div>
          <p className="text-green-100 font-sans font-light text-sm leading-relaxed max-w-xs">
            Your trusted partner for premium construction and renovation services across the Greater Toronto Area. Fully insured. Fully committed.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-wider text-base mb-5">Quick Links</h4>
          <ul className="space-y-3 text-green-100 font-sans font-light text-sm">
            {[
              { label: 'Our Services', id: 'services' },
              { label: 'About Us', id: 'about' },
              { label: 'Financing Options', id: 'financing' },
              { label: 'Contact & Free Quote', id: 'contact' }
            ].map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold uppercase tracking-wider text-base mb-5">Contact</h4>
          <ul className="space-y-3 text-green-100 font-sans font-light text-sm">
            <li>
              <a href="tel:6479601307" className="hover:text-white transition-colors">
                📞 647-960-1307
              </a>
            </li>
            <li>
              <a href="mailto:puregreen.construction@yahoo.com" className="hover:text-white transition-colors break-all">
                ✉ puregreen.construction@yahoo.com
              </a>
            </li>
            <li className="text-green-200">📍 Toronto &amp; Greater Toronto Area</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1f7941] py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-green-300 text-xs font-sans">
          <p>&copy; {currentYear} PureGreen Construction and Cleaning Inc. All rights reserved.</p>
          <p>Fully Insured — SAB Liability Coverage</p>
        </div>
      </div>
    </footer>
  );
}
