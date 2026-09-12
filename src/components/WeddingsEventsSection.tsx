import React, { useState } from 'react';
import { EVENT_TYPES } from '../data/resortData';
import { EventType } from '../types';
import { Sparkles, ArrowRight, X, Calendar, Check, Users } from 'lucide-react';

interface WeddingsEventsSectionProps {
  onSelectEventForEnquiry: (eventTitle: string) => void;
}

export const WeddingsEventsSection: React.FC<WeddingsEventsSectionProps> = ({ onSelectEventForEnquiry }) => {
  const [activeEvent, setActiveEvent] = useState<EventType | null>(null);

  return (
    <section id="events" className="py-20 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Celebrations & Gatherings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Weddings & Events
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            From majestic Anand Karaj weddings and vibrant Sangeet celebrations to executive business galas,
            Khazana Resort is tailored to honor every occasion with royal finesse.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENT_TYPES.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5DAC6] shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F3E5AB]">
                      {event.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-[#5D554F] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#731226] bg-[#731226]/5 py-2 px-3 rounded-lg">
                    <Users className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>{event.capacityGuide}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Explore Button */}
              <div className="px-6 pb-6 pt-2 border-t border-[#F5EFE6]">
                <button
                  onClick={() => setActiveEvent(event)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#731226] text-[#731226] hover:bg-[#731226] hover:text-[#FDFBF7] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Explore {event.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Event Detail Modal */}
      {activeEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#C59B27]/40 shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#35070E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#731226] uppercase mb-1">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span>Event Details</span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-[#35070E] mb-1">
              {activeEvent.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#8C6212] font-semibold mb-4">
              {activeEvent.subtitle}
            </p>

            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              referrerPolicy="no-referrer"
              className="w-full h-52 object-cover rounded-2xl mb-5 shadow"
            />

            <p className="text-sm text-[#5D554F] leading-relaxed mb-5">
              {activeEvent.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#35070E] mb-3">
                Key Event Inclusions & Highlights:
              </h4>
              <div className="space-y-2">
                {activeEvent.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-xs text-[#524B45]">
                    <span className="w-5 h-5 rounded-full bg-[#C59B27]/20 text-[#8C6212] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[#FAF3DC] rounded-xl border border-[#E8D08D] text-xs text-[#8C6212] mb-6 flex items-center gap-2">
              <Users className="w-4 h-4 shrink-0" />
              <span>Recommended Capacity: {activeEvent.capacityGuide}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeEvent.title;
                  setActiveEvent(null);
                  onSelectEventForEnquiry(title);
                }}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#731226] to-[#4A0E17] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Enquire for {activeEvent.title}</span>
              </button>
              <button
                onClick={() => setActiveEvent(null)}
                className="py-3 px-6 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 cursor-pointer"
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
