import React, { useEffect, useState, useRef } from 'react';
import { Armchair, Users2, Compass, MapPin, Sparkles } from 'lucide-react';

export const CapacityHighlightSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [seatedCount, setSeatedCount] = useState(0);
  const [floatingCount, setFloatingCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Seated Count to 1500
          let currentSeated = 0;
          const seatedTarget = 1500;
          const seatedStep = 25;
          const seatedInterval = setInterval(() => {
            currentSeated += seatedStep;
            if (currentSeated >= seatedTarget) {
              setSeatedCount(seatedTarget);
              clearInterval(seatedInterval);
            } else {
              setSeatedCount(currentSeated);
            }
          }, 20);

          // Animate Floating Count to 2250
          let currentFloating = 0;
          const floatingTarget = 2250;
          const floatingStep = 35;
          const floatingInterval = setInterval(() => {
            currentFloating += floatingStep;
            if (currentFloating >= floatingTarget) {
              setFloatingCount(floatingTarget);
              clearInterval(floatingInterval);
            } else {
              setFloatingCount(currentFloating);
            }
          }, 20);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 bg-gradient-to-br from-[#2D060C] via-[#430B14] to-[#1E0408] text-white overflow-hidden border-y border-[#D4AF37]/30"
    >
      {/* Background Ornamental Motifs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F5E6BE] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Grand Venue Statistics</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Venue Capacity Highlights
          </h2>

          <div className="flex items-center justify-center gap-3 my-3">
            <div className="h-[1px] w-16 bg-[#D4AF37]/60" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37]" />
            <div className="h-[1px] w-16 bg-[#D4AF37]/60" />
          </div>

          <p className="text-sm sm:text-base text-[#E5D7C2]/90 leading-relaxed">
            Spacious indoor and outdoor hosting capabilities engineered to comfortably accommodate
            Batala’s most celebrated wedding gatherings, receptions, and mega events.
          </p>
        </div>

        {/* 4 Primary Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* 1. Up to 1,500 seated guests */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] mb-5 group-hover:scale-110 transition-transform">
              <Armchair className="w-7 h-7" />
            </div>

            <div className="my-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                Seated Setup
              </span>
              <p className="font-serif text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-white">
                Up to {hasAnimated ? seatedCount.toLocaleString() : '1,500'}
              </p>
              <p className="text-base sm:text-lg font-serif text-[#F3E5AB] mt-1">
                seated guests
              </p>
            </div>

            <p className="text-xs text-[#E5D7C2]/70 mt-4 pt-4 border-t border-white/10 w-full">
              Across lawn and indoor banquet seating formats
            </p>
          </div>

          {/* 2. Up to 2,250 floating guests */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] mb-5 group-hover:scale-110 transition-transform">
              <Users2 className="w-7 h-7" />
            </div>

            <div className="my-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                Gathering Capacity
              </span>
              <p className="font-serif text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-white">
                Up to {hasAnimated ? floatingCount.toLocaleString() : '2,250'}
              </p>
              <p className="text-base sm:text-lg font-serif text-[#F3E5AB] mt-1">
                floating guests
              </p>
            </div>

            <p className="text-xs text-[#E5D7C2]/70 mt-4 pt-4 border-t border-white/10 w-full">
              Ideal for lavish Punjabi wedding receptions and celebrations
            </p>
          </div>

          {/* 3. Large event spaces */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] mb-5 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>

            <div className="my-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                Venue Layout
              </span>
              <p className="font-serif text-2xl sm:text-3xl font-black text-white">
                Large event spaces
              </p>
              <p className="text-base sm:text-lg font-serif text-[#F3E5AB] mt-1">
                Banquet & Lawn
              </p>
            </div>

            <p className="text-xs text-[#E5D7C2]/70 mt-4 pt-4 border-t border-white/10 w-full">
              Combined AC ballroom & expansive manicured green lawn
            </p>
          </div>

          {/* 4. Batala, Punjab */}
          <div className="relative group bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center justify-between">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3E5AB] mb-5 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>

            <div className="my-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                Destination
              </span>
              <p className="font-serif text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-black text-white">
                Batala, Punjab
              </p>
              <p className="text-base sm:text-lg font-serif text-[#F3E5AB] mt-1">
                143505, India
              </p>
            </div>

            <p className="text-xs text-[#E5D7C2]/70 mt-4 pt-4 border-t border-white/10 w-full">
              Amritsar–Jalandhar Bypass Road, Buddhe Di Khuhi
            </p>
          </div>
        </div>

        {/* Demo Subtext Notice */}
        <p className="text-center text-xs text-[#E5D7C2]/60 mt-10 italic">
          * Note: Capacity figures are indicative demo estimates for representation purposes.
        </p>
      </div>
    </section>
  );
};
