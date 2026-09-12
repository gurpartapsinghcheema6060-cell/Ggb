import React, { useState } from 'react';
import { VENUE_SPACES } from '../data/resortData';
import { VenueSpace } from '../types';
import { Users, Armchair, CheckCircle, Info, Sparkles, ChevronRight, X, Calendar } from 'lucide-react';

interface VenueSpacesSectionProps {
  onSelectSpaceForEnquiry: (spaceName: string) => void;
}

export const VenueSpacesSection: React.FC<VenueSpacesSectionProps> = ({ onSelectSpaceForEnquiry }) => {
  const [activeModalSpace, setActiveModalSpace] = useState<VenueSpace | null>(null);

  return (
    <section id="venue" className="py-20 sm:py-24 bg-[#F5EFE6] relative border-y border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Event & Celebration Areas</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Venue & Event Spaces
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            Choose between our regal air-conditioned ballroom or our grand manicured open-air lawn,
            or combine both for the quintessential royal Punjabi wedding extravaganza.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 text-xs text-[#8C6212] bg-[#FAF3DC] px-3.5 py-1.5 rounded-full border border-[#E8D08D]">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Capacities and specifications are Demo / indicative information</span>
          </div>
        </div>

        {/* Space Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {VENUE_SPACES.map((space) => {
            const isBanquet = space.id.includes('banquet');

            return (
              <div
                key={space.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E2D5BE] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Box */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#4A0E17]/90 text-[#F9F4E8] font-serif text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-[#D4AF37]/50 shadow">
                      {isBanquet ? 'Indoor AC Hall' : 'Open-Air Lawn'}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#C59B27]/90 text-[#2B080E] text-xs font-bold tracking-wide backdrop-blur-md shadow">
                      {space.area}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow">
                      {space.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EDE2C9] font-light mt-0.5 line-clamp-1">
                      {space.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Capacity Matrix */}
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DFC9] mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#731226]/10 text-[#731226] flex items-center justify-center shrink-0">
                          <Armchair className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-[#73685F] uppercase font-semibold">Seated Capacity</p>
                          <p className="text-lg sm:text-xl font-bold text-[#35070E]">
                            Approx. {space.seatedCapacity.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C59B27]/15 text-[#8C6212] flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs text-[#73685F] uppercase font-semibold">Floating Capacity</p>
                          <p className="text-lg sm:text-xl font-bold text-[#35070E]">
                            Approx. {space.floatingCapacity.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[#5D554F] leading-relaxed mb-6">
                      {space.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#35070E]">
                        Key Facilities Included:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {space.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-xs text-[#524B45]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Indicative Demo Notice */}
                  <div className="pt-4 border-t border-[#EFE5D3]">
                    <p className="text-[11px] text-[#8C6212] italic mb-4">
                      * {space.indicativeNotice}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => setActiveModalSpace(space)}
                        className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl border border-[#731226]/30 hover:bg-[#731226]/5 text-[#731226] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Full Specifications</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onSelectSpaceForEnquiry(space.name)}
                        className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#731226] to-[#4A0E17] hover:brightness-110 text-[#FDFBF7] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Enquire for {space.name.split(' ')[1]}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specifications Modal */}
      {activeModalSpace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#C59B27]/40 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalSpace(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#35070E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#731226] uppercase mb-1">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>Venue Space Overview</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#35070E] mb-2">
              {activeModalSpace.name}
            </h3>

            <p className="text-sm text-[#73685F] mb-6">
              {activeModalSpace.tagline}
            </p>

            <img
              src={activeModalSpace.image}
              alt={activeModalSpace.name}
              referrerPolicy="no-referrer"
              className="w-full h-56 object-cover rounded-2xl mb-6 shadow"
            />

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-[#E5DAC6] mb-6">
              <div>
                <p className="text-xs uppercase text-[#8C6212] font-semibold">Seated Guest Plan</p>
                <p className="text-xl font-bold text-[#35070E]">Approx. {activeModalSpace.seatedCapacity} Guests</p>
              </div>
              <div>
                <p className="text-xs uppercase text-[#8C6212] font-semibold">Floating Guest Plan</p>
                <p className="text-xl font-bold text-[#35070E]">Approx. {activeModalSpace.floatingCapacity} Guests</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-bold text-[#35070E] uppercase tracking-wide mb-2">
                  Comprehensive Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalSpace.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#524B45]">
                      <CheckCircle className="w-4 h-4 text-[#C59B27] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#35070E] uppercase tracking-wide mb-2">
                  Ideal Celebrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalSpace.idealFor.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-[#731226]/10 text-[#731226] text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#FAF3DC] rounded-xl border border-[#E8D08D] text-xs text-[#8C6212] mb-6">
              {activeModalSpace.indicativeNotice}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const spaceName = activeModalSpace.name;
                  setActiveModalSpace(null);
                  onSelectSpaceForEnquiry(spaceName);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#731226] to-[#4A0E17] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110"
              >
                Proceed to Enquiry
              </button>
              <button
                onClick={() => setActiveModalSpace(null)}
                className="py-3 px-6 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
