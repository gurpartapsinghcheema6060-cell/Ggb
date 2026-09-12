import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Calendar, MapPin, Sparkles } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

interface NavbarProps {
  onOpenEnquiry: (preselectedEvent?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Venue Spaces', href: '#venue' },
    { label: 'Weddings & Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#4A0E17] text-[#E8D4A2] border-b border-[#C59B27]/20 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#C59B27]/20 text-[#F5E6BE] px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase border border-[#C59B27]/40">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Demo Website
            </span>
            <span className="hidden md:inline text-white/80">|</span>
            <span className="hidden md:inline text-[#E8D4A2]/90">
              Amritsar–Jalandhar Bypass Road, Batala, Punjab
            </span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs font-medium">
            <a
              href={`tel:${RESORT_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 text-[#FDFBF7] hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{RESORT_DETAILS.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href={RESORT_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#4ade80] transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3A0A12]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C59B27]/30'
            : 'bg-[#4A0E17] py-4 border-b border-[#C59B27]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group text-left">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C59B27] to-[#8C6212] flex items-center justify-center shadow-lg border border-[#F3E5AB]/40 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-lg text-[#3A0A12]">K</span>
            </div>
            <div>
              <div className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-[#FDFBF7] group-hover:text-[#F3E5AB] transition-colors flex items-center gap-1.5">
                <span>KHAZANA RESORT</span>
              </div>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase text-[#D4AF37] font-medium">
                Batala • Punjab
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#FAF7F2]/85 hover:text-[#D4AF37] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${RESORT_DETAILS.phoneClean}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#FDFBF7] border border-[#C59B27]/30 text-xs font-semibold tracking-wide transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Venue</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#B3861B] text-[#2B080E] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 hover:shadow-lg transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 text-[#FDFBF7] hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#35070E] border-t border-[#C59B27]/30 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#FAF7F2] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B3861B] text-[#2B080E] font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${RESORT_DETAILS.phoneClean}`}
                  className="py-2.5 px-3 text-center rounded-lg bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Venue</span>
                </a>
                <a
                  href={RESORT_DETAILS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 text-center rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#25D366]/40"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
