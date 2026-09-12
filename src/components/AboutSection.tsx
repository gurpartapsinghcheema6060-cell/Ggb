import React from 'react';
import { Building2, Users, MapPin, Car, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';

interface AboutSectionProps {
  onExploreSpaces: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreSpaces }) => {
  const cards = [
    {
      title: "Spacious Venue",
      description: "Expansive indoor banquet hall and sprawling open-air lawns engineered to provide seamless movement and regal ambience for grand celebrations.",
      icon: Building2,
      accent: "from-[#FDFBF7] to-[#F7F2E7]"
    },
    {
      title: "Large Gathering Capacity",
      description: "Specifically designed to host massive Punjabi wedding gatherings, accommodating up to 1,500 seated and up to 2,250 floating guests effortlessly.",
      icon: Users,
      accent: "from-[#FDFBF7] to-[#F7F2E7]"
    },
    {
      title: "Convenient Location",
      description: `Prominently located on the Amritsar–Jalandhar Bypass Road in Batala, Punjab, near Eye Hospital and Thathari Gate, providing effortless highway connectivity.`,
      icon: MapPin,
      accent: "from-[#FDFBF7] to-[#F7F2E7]"
    },
    {
      title: "Generous Parking",
      description: "Dedicated on-site secure parking grounds with space for hundreds of vehicles, wide turning bays, and designated valet coordination.",
      icon: Car,
      accent: "from-[#FDFBF7] to-[#F7F2E7]"
    },
    {
      title: "Event & Wedding Facilities",
      description: "Equipped with luxurious bridal green rooms, 100% generator power backup, centralized climate control, staging lights, and vendor setup areas.",
      icon: Sparkles,
      accent: "from-[#FDFBF7] to-[#F7F2E7]"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Welcome to Batala’s Royal Landmark</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            About Khazana Resort
          </h2>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            Khazana Resort is a premier, spacious event and celebration venue in Batala, Punjab.
            Thoughtfully planned for grand weddings, lavish receptions, lively parties, family functions,
            and large cultural gatherings, the venue pairs royal Punjabi hospitality with modern event infrastructure.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`relative group bg-white rounded-2xl p-7 border border-[#E8DFC9] shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4A0E17] to-[#731226] flex items-center justify-center text-[#F3E5AB] shadow-md mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#35070E] mb-3 group-hover:text-[#731226] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#5D554F] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1E9DA] flex items-center gap-2 text-xs font-semibold text-[#8C6212]">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Premium Venue Feature</span>
                </div>
              </div>
            );
          })}

          {/* Quick Summary / Landmark Card */}
          <div className="relative bg-gradient-to-br from-[#4A0E17] via-[#5F1020] to-[#36080F] rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between border border-[#D4AF37]/30">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#D4AF37]/20 text-[#F3E5AB] text-xs uppercase tracking-wider font-bold mb-4 border border-[#D4AF37]/30">
                Landmark & Access
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Prime Batala Location
              </h3>
              <p className="text-sm text-[#F0E5CE] leading-relaxed mb-4">
                {RESORT_DETAILS.landmark}. Seamlessly connected directly to the highway for guest convoys from Amritsar, Gurdaspur, and Jalandhar.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onExploreSpaces}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-[#2B080E] font-bold text-xs uppercase tracking-wider transition-all shadow cursor-pointer text-center"
              >
                View Banquet & Lawn Spaces
              </button>
            </div>
          </div>
        </div>

        {/* Demo Notification Note */}
        <div className="mt-12 bg-[#F3ECE0] rounded-xl p-4 border border-[#D8C7A5] flex items-start sm:items-center gap-3 text-xs text-[#625345]">
          <ShieldAlert className="w-5 h-5 text-[#8C6212] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="font-semibold text-[#35070E]">Presentation Notice:</strong> This website is an interactive demonstration crafted for Khazana Resort, Batala. Venue capacities, features, and photographic representations serve as indicative guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};
