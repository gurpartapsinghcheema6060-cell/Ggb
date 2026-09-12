import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24050B] text-white border-t border-[#D4AF37]/30 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6212] flex items-center justify-center text-[#2B080E] font-serif font-black text-xl border border-[#FFF5DC]/40 shadow-md">
                K
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold tracking-wider text-[#FAF7F2]">
                  Khazana Resort
                </h4>
                <p className="text-[11px] text-[#D4AF37] uppercase tracking-widest">
                  Batala, Punjab, India
                </p>
              </div>
            </div>

            <p className="text-xs text-[#E5D7C2]/80 leading-relaxed">
              Batala's premier luxury wedding resort and event venue, hosting royal Punjabi celebrations,
              grand banquets, receptions, and memorable family gatherings.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[#F5E6BE] text-xs font-semibold border border-[#D4AF37]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                Interactive Demo Showcase
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-xs text-[#E5D7C2]/85">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Khazana Resort</a>
              </li>
              <li>
                <a href="#venue" className="hover:text-[#D4AF37] transition-colors">Venue Spaces (Banquet & Lawn)</a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#D4AF37] transition-colors">Weddings & Events</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Resort Gallery</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#D4AF37] transition-colors">Location & Directions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact & Enquiries</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Direct Contact
            </h5>
            <div className="space-y-3 text-xs text-[#E5D7C2]/85">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-[#E5D7C2]/60">Direct Phone</p>
                  <a
                    href={`tel:${RESORT_DETAILS.phoneClean}`}
                    className="font-bold text-white hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {RESORT_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-[#E5D7C2]/60">WhatsApp</p>
                  <a
                    href={RESORT_DETAILS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#25D366] transition-colors"
                  >
                    {RESORT_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] text-[#E5D7C2]/60">Address</p>
                  <p className="text-white leading-relaxed">
                    {RESORT_DETAILS.address}
                  </p>
                  <p className="text-[#D4AF37] text-[11px] mt-0.5">
                    {RESORT_DETAILS.landmark}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Spaces Overview */}
          <div>
            <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Event Spaces
            </h5>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif font-bold text-white">Khazana Banquet</p>
                <p className="text-[#E5D7C2]/70 text-[11px] mt-0.5">
                  Approx. 700 Seated • Approx. 1,050 Floating
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif font-bold text-white">Khazana Lawn</p>
                <p className="text-[#E5D7C2]/70 text-[11px] mt-0.5">
                  Approx. 1,500 Seated • Approx. 2,250 Floating
                </p>
              </div>

              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-[#D4AF37]/30"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5D7C2]/70">
          <p>
            © 2026 Khazana Resort. Demo Website.
          </p>
          <p className="text-center sm:text-right text-[11px]">
            Designed for Khazana Resort, Batala, Punjab • Luxury Wedding & Event Venue
          </p>
        </div>
      </div>
    </footer>
  );
};
