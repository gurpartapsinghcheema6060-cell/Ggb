import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Link */}
      <a
        href={RESORT_DETAILS.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:shadow-green-500/40 transition-all active:scale-95 flex items-center justify-center border-2 border-white"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Call Direct Link */}
      <a
        href={`tel:${RESORT_DETAILS.phoneClean}`}
        aria-label="Call Venue"
        className="pointer-events-auto p-3.5 rounded-full bg-[#731226] text-[#F3E5AB] shadow-2xl hover:scale-110 hover:shadow-red-900/40 transition-all active:scale-95 flex items-center justify-center border-2 border-[#D4AF37]"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="pointer-events-auto p-3 rounded-full bg-[#35070E]/90 backdrop-blur-md text-white shadow-xl hover:bg-[#4A0E17] hover:scale-110 transition-all border border-[#D4AF37]/50 flex items-center justify-center cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-[#D4AF37]" />
        </button>
      )}
    </div>
  );
};
