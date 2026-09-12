import React from 'react';
import { Maximize2, MapPin, Car, Users, Sparkles, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/resortData';

export const WhyChooseUsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Maximize2,
    MapPin,
    Car,
    Users,
    Sparkles,
    HeartHandshake
  };

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>The Khazana Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Why Choose Khazana Resort
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            Planning a milestone wedding or event in Majha? Discover why families and hosts trust
            Khazana Resort to host their most cherished gatherings in Batala, Punjab.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.iconName] || Sparkles;

            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-8 border border-[#E5DAC6] shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Circle with Royal Maroon & Gold Accent */}
                  <div className="w-14 h-14 rounded-2xl bg-[#731226]/10 text-[#731226] group-hover:bg-[#731226] group-hover:text-[#F3E5AB] flex items-center justify-center transition-all duration-300 mb-6 group-hover:rotate-3 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#35070E] group-hover:text-[#731226] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5D554F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center gap-2 text-xs font-semibold text-[#C59B27]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  <span>Designed for Unmatched Hospitality</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
