import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Navigation, Send, CheckCircle2, AlertCircle, Sparkles, X, Calendar, Users } from 'lucide-react';
import { RESORT_DETAILS } from '../data/resortData';
import { EnquiryFormState } from '../types';

interface ContactEnquirySectionProps {
  preselectedEvent?: string;
}

export const ContactEnquirySection: React.FC<ContactEnquirySectionProps> = ({ preselectedEvent }) => {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: '',
    phone: '',
    eventType: 'Weddings',
    eventDate: '',
    guestCount: '500 - 1,000 Guests',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormState | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({
        ...prev,
        eventType: preselectedEvent.includes('Banquet') || preselectedEvent.includes('Lawn')
          ? 'Weddings'
          : preselectedEvent,
        message: preselectedEvent.includes('Banquet') || preselectedEvent.includes('Lawn')
          ? `Inquiring specifically about availability for ${preselectedEvent}.`
          : prev.message,
      }));
    }
  }, [preselectedEvent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof EnquiryFormState, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.eventDate) newErrors.eventDate = 'Please select a tentative event date.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic processing time for demo interaction
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowSuccessModal(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F5EFE6] relative border-t border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Connect With Us</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Contact & Venue Enquiry
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed">
            Planning a grand wedding, reception, or milestone family celebration in Batala?
            Submit your enquiry below or connect directly with our event managers.
          </p>
        </div>

        {/* Quick Contact Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Call Now */}
          <a
            href={`tel:${RESORT_DETAILS.phoneClean}`}
            className="group p-5 bg-white rounded-2xl border border-[#E5DAC6] shadow-sm hover:shadow-lg hover:border-[#731226] transition-all flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#731226]/10 text-[#731226] group-hover:bg-[#731226] group-hover:text-[#F3E5AB] flex items-center justify-center transition-colors shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-[#8C6212] tracking-wider">Call Now</p>
              <p className="text-base font-bold text-[#35070E]">{RESORT_DETAILS.phone}</p>
              <p className="text-[11px] text-[#6E6359]">Direct venue desk</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={RESORT_DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-white rounded-2xl border border-[#E5DAC6] shadow-sm hover:shadow-lg hover:border-[#25D366] transition-all flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-[#1e8342] tracking-wider">WhatsApp</p>
              <p className="text-base font-bold text-[#35070E]">{RESORT_DETAILS.phone}</p>
              <p className="text-[11px] text-[#6E6359]">Instant chat & brochure</p>
            </div>
          </a>

          {/* Get Directions */}
          <a
            href={RESORT_DETAILS.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-white rounded-2xl border border-[#E5DAC6] shadow-sm hover:shadow-lg hover:border-[#C59B27] transition-all flex items-center gap-4 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#C59B27]/15 text-[#8C6212] group-hover:bg-[#C59B27] group-hover:text-[#2B080E] flex items-center justify-center transition-colors shrink-0">
              <Navigation className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase font-bold text-[#8C6212] tracking-wider">Get Directions</p>
              <p className="text-base font-bold text-[#35070E]">Bypass Road, Batala</p>
              <p className="text-[11px] text-[#6E6359]">Near Eye Hospital</p>
            </div>
          </a>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2D5BE] shadow-xl max-w-4xl mx-auto relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#F0E6D5] gap-2">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#35070E]">
                Event Reservation & Availability Enquiry
              </h3>
              <p className="text-xs text-[#73685F] mt-1">
                Fill out the form below for event dates, banquet halls, or lawn bookings.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF3DC] text-[#8C6212] border border-[#E8D08D] self-start sm:self-auto">
              Demo Simulation Form
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sardar Harpreet Singh"
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all ${
                    errors.name ? 'border-red-500 bg-red-50/40' : 'border-[#E5DAC6]'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all ${
                    errors.phone ? 'border-red-500 bg-red-50/40' : 'border-[#E5DAC6]'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DAC6] bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all"
                >
                  <option value="Weddings">Wedding (Anand Karaj / Vows)</option>
                  <option value="Receptions">Grand Reception</option>
                  <option value="Engagements">Engagement / Roka Ceremony</option>
                  <option value="Birthday Celebrations">Birthday Celebration</option>
                  <option value="Family Functions">Family Function (Sangeet / Jaggo / Mehndi)</option>
                  <option value="Corporate Events">Corporate Event / Conference</option>
                  <option value="Other Celebrations">Other Large Gathering</option>
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Tentative Event Date *
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all ${
                    errors.eventDate ? 'border-red-500 bg-red-50/40' : 'border-[#E5DAC6]'
                  }`}
                />
                {errors.eventDate && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.eventDate}</span>
                  </p>
                )}
              </div>

              {/* Number of Guests */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Estimated Number of Guests
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DAC6] bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all"
                >
                  <option value="100 - 300 Guests">100 - 300 Guests</option>
                  <option value="300 - 700 Guests (Banquet Suitable)">300 - 700 Guests (Banquet Suitable)</option>
                  <option value="700 - 1,200 Guests (Banquet / Lawn)">700 - 1,200 Guests (Banquet / Lawn)</option>
                  <option value="1,200 - 2,250+ Guests (Grand Lawn & Combined)">1,200 - 2,250+ Guests (Grand Lawn & Combined)</option>
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#35070E] mb-2">
                  Message / Special Requests
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about specific decor preferences, catering requirements, timings, or space queries..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DAC6] bg-[#FAF7F2] text-[#35070E] text-sm focus:outline-none focus:ring-2 focus:ring-[#731226] transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#731226] via-[#590D1D] to-[#430B14] hover:brightness-110 text-[#FDFBF7] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#D4AF37]" />
                    <span>Send Enquiry</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-[#73685F] italic">
              * This is a demo form. Submission demonstrates the user experience without connecting to a live backend database.
            </p>
          </form>
        </div>
      </div>

      {/* Demo Success Modal */}
      {showSuccessModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full border border-[#C59B27]/40 shadow-2xl p-6 sm:p-8 relative text-center">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#35070E] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-4 border border-green-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#731226]">
              Demo Enquiry Submitted
            </span>

            <h3 className="font-serif text-2xl font-bold text-[#35070E] mt-1 mb-2">
              Thank You, {submittedData.name}!
            </h3>

            <p className="text-sm text-[#5D554F] leading-relaxed mb-6">
              Your demo enquiry for <strong className="text-[#731226]">{submittedData.eventType}</strong> on{' '}
              <strong className="text-[#35070E]">{submittedData.eventDate || 'your selected date'}</strong> has been simulated successfully!
            </p>

            <div className="bg-white rounded-2xl p-4 border border-[#E5DAC6] text-left text-xs space-y-2 mb-6">
              <p><strong className="text-[#731226]">Guest Count:</strong> {submittedData.guestCount}</p>
              <p><strong className="text-[#731226]">Contact Phone:</strong> {submittedData.phone}</p>
              {submittedData.message && (
                <p><strong className="text-[#731226]">Message:</strong> {submittedData.message}</p>
              )}
            </div>

            <div className="p-3 bg-[#FAF3DC] rounded-xl border border-[#E8D08D] text-xs text-[#8C6212] mb-6">
              In a live deployment, this enquiry will instantly alert the Khazana Resort event coordination desk via SMS & Email.
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={RESORT_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  setFormData({
                    name: '',
                    phone: '',
                    eventType: 'Weddings',
                    eventDate: '',
                    guestCount: '500 - 1,000 Guests',
                    message: '',
                  });
                }}
                className="py-3 px-5 rounded-xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
