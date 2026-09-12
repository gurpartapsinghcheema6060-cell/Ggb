import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Phone, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${RESORT_DETAILS.name}, ${RESORT_DETAILS.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Prime Connectivity</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Our Location
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            Conveniently situated along the prominent bypass arterial corridor connecting Amritsar,
            Gurdaspur, and Jalandhar, ensuring effortless access for local and outstation wedding guests.
          </p>
        </div>

        {/* Location Grid: Details on Left, Interactive Styled Map Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#E5DAC6] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#731226] text-[#F3E5AB] flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#35070E]">
                    Khazana Resort
                  </h3>
                  <p className="text-xs text-[#8C6212] font-semibold uppercase tracking-wider">
                    Batala, Punjab, India
                  </p>
                </div>
              </div>

              {/* Exact Address Requested in Prompt */}
              <div className="p-5 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC9] mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8C6212] mb-1">
                  Official Venue Address
                </p>
                <p className="text-base sm:text-lg font-serif font-bold text-[#35070E] leading-snug">
                  Amritsar–Jalandhar Bypass Road, Buddhe Di Khuhi, Batala, Punjab 143505
                </p>
                <p className="text-xs text-[#6E6359] mt-2 font-medium">
                  Nearby landmark: <span className="text-[#731226] font-semibold">Near Eye Hospital / Thathari Gate, Batala</span>
                </p>
              </div>

              {/* Highway & Distance Highlights */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs py-2 border-b border-[#F1E9DA]">
                  <span className="text-[#6E6359]">From Batala City Center</span>
                  <span className="font-bold text-[#35070E]">~ 3.5 km (8 mins)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-[#F1E9DA]">
                  <span className="text-[#6E6359]">From Amritsar (Sri Guru Ram Dass Jee Airport / City)</span>
                  <span className="font-bold text-[#35070E]">~ 42 km (Bypass route)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-[#F1E9DA]">
                  <span className="text-[#6E6359]">From Gurdaspur</span>
                  <span className="font-bold text-[#35070E]">~ 40 km (Direct highway)</span>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-[#F1E9DA]">
                  <span className="text-[#6E6359]">From Jalandhar</span>
                  <span className="font-bold text-[#35070E]">~ 85 km (Via NH 54 / Bypass)</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#F1E9DA]">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3 rounded-xl border border-[#E5DAC6] hover:bg-[#FAF7F2] text-[#35070E] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-[#8C6212]" />}
                  <span>{copied ? 'Address Copied' : 'Copy Address'}</span>
                </button>

                <a
                  href={`tel:${RESORT_DETAILS.phoneClean}`}
                  className="py-2.5 px-3 rounded-xl border border-[#E5DAC6] hover:bg-[#FAF7F2] text-[#35070E] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#731226]" />
                  <span>Call Venue</span>
                </a>
              </div>

              <a
                href={RESORT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#731226] to-[#4A0E17] hover:brightness-110 text-[#FDFBF7] text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Interactive Styled Map Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#E5DAC6] shadow-sm flex flex-col">
            {/* Map Top Bar */}
            <div className="bg-[#FAF7F2] px-6 py-4 border-b border-[#E5DAC6] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#731226]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#35070E]">
                  Interactive Venue Location Preview
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#8C6212] bg-[#FAF3DC] px-2.5 py-0.5 rounded-full border border-[#E8D08D]">
                Amritsar–Jalandhar Bypass
              </span>
            </div>

            {/* Styled Map Canvas / SVG Aesthetic View */}
            <div className="relative flex-1 min-h-[380px] bg-[#E9E4D8] overflow-hidden flex items-center justify-center p-4">
              {/* Stylized vector map graphic */}
              <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3C9B6" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Major Bypass Highway */}
                <path d="M -50,120 Q 300,220 800,160" fill="none" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
                <path d="M -50,120 Q 300,220 800,160" fill="none" stroke="#C59B27" strokeWidth="4" strokeDasharray="10 8" />
                {/* Connecting roads */}
                <path d="M 280,-50 L 320,450" fill="none" stroke="#FFFFFF" strokeWidth="14" />
                <path d="M 120,380 L 550,100" fill="none" stroke="#F5F0E4" strokeWidth="10" />
                {/* Canal / Green Zone */}
                <circle cx="580" cy="280" r="140" fill="#D5E4D1" opacity="0.6" />
                <path d="M 0,320 C 200,310 400,340 700,310" fill="none" stroke="#B8D4E3" strokeWidth="12" />
              </svg>

              {/* Landmark Callouts on Styled Map */}
              <div className="absolute top-8 left-8 hidden sm:block bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#D5C9B2] shadow text-[11px] font-medium text-[#4A423B]">
                📍 Near Eye Hospital / Thathari Gate
              </div>

              <div className="absolute bottom-8 right-8 hidden sm:block bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#D5C9B2] shadow text-[11px] font-medium text-[#4A423B]">
                🚗 Amritsar–Jalandhar Bypass Road
              </div>

              {/* Center Resort Marker Pin */}
              <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                <div className="bg-[#4A0E17] text-white px-4 py-2 rounded-xl shadow-2xl border-2 border-[#D4AF37] flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="font-serif font-bold text-sm tracking-wide">
                    Khazana Resort
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#731226] text-[#F3E5AB] flex items-center justify-center shadow-2xl border-2 border-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="w-4 h-2 bg-black/20 rounded-full blur-xs mt-1" />
              </div>

              {/* Interactive Get Directions Floating Button */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-20">
                <a
                  href={RESORT_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#35070E] hover:bg-[#4A0E17] text-[#FAF7F2] font-semibold text-xs tracking-wider uppercase shadow-xl hover:shadow-2xl border border-[#D4AF37]/50 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Map Bottom Bar */}
            <div className="bg-white p-4 border-t border-[#E5DAC6] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#6E6359]">
              <span>Location: Buddhe Di Khuhi, Batala, Punjab 143505</span>
              <span className="text-[#8C6212] font-semibold">Ready for Google Maps navigation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
