import React from 'react';
import { Sparkles, ArrowRight, Calendar, MapPin, Users, Building, ShieldCheck } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

interface HeroSectionProps {
  onExploreVenue: () => void;
  onEnquireNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreVenue, onEnquireNow }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#24050B]">
      {/* Background Image with Dark Vignette and Royal Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="Khazana Resort Luxury Wedding Banquet Batala"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '10s' }}
        />
        {/* Gradients to give rich deep maroon, gold glow, and cinematic contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24050B] via-[#2F070E]/80 to-[#1A0307]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#200308]/60 to-[#120104]/90" />
      </div>

      {/* Decorative Traditional Border Motifs */}
      <div className="absolute inset-x-6 top-6 bottom-6 border border-[#D4AF37]/20 pointer-events-none rounded-2xl hidden md:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white flex flex-col items-center">
        {/* Royal Crest / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#FBF4E4]">
            Batala, Punjab • Grand Wedding & Event Venue
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#F3E5AB] to-[#C59B27] drop-shadow-md mb-3">
          KHAZANA RESORT
        </h1>

        {/* Ornamental Gold Divider */}
        <div className="flex items-center justify-center gap-4 my-2 w-full max-w-md">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
          <div className="rotate-45 w-2.5 h-2.5 bg-[#D4AF37] border border-[#FFF5DC] shadow" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#D4AF37]" />
        </div>

        {/* Tagline */}
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F9F5EE] font-medium tracking-wide mt-3 mb-4 drop-shadow-sm">
          Celebrate Life’s Grandest Moments
        </p>

        {/* Subtitle / Description */}
        <p className="max-w-2xl text-base sm:text-lg text-[#EDE6D8]/90 font-light leading-relaxed mb-10">
          Your destination for weddings, celebrations and unforgettable events in Batala.
        </p>

        {/* Hero Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreVenue}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-[#FDFBF7] font-semibold text-sm sm:text-base tracking-wider uppercase border-2 border-[#D4AF37] hover:border-[#F3E5AB] shadow-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Venue</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onEnquireNow}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#A87915] hover:brightness-110 text-[#2B080E] font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#2B080E]" />
            <span>Enquire Now</span>
          </button>
        </div>

        {/* Quick Venue Overview Highlights Ribbon */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/15 text-left">
          <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Capacity</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Up to 2,250</p>
            <p className="text-[11px] text-[#EDE6D8]/70">Floating Guests</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
              <Building className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Spaces</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Banquet & Lawn</p>
            <p className="text-[11px] text-[#EDE6D8]/70">AC Hall & Open Grounds</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Location</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Bypass Road</p>
            <p className="text-[11px] text-[#EDE6D8]/70">Batala, Punjab 143505</p>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-[#D4AF37]/20">
            <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Status</span>
            </div>
            <p className="text-sm sm:text-base font-bold text-white">Demo Showcase</p>
            <p className="text-[11px] text-[#D4AF37]">Indicative Info</p>
          </div>
        </div>
      </div>

      {/* Decorative Wave/Bottom Curve Transition */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#FAF7F2] to-transparent pointer-events-none" />
    </section>
  );
};
