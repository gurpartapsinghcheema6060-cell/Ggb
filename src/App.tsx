import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VenueSpacesSection } from './components/VenueSpacesSection';
import { WeddingsEventsSection } from './components/WeddingsEventsSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CapacityHighlightSection } from './components/CapacityHighlightSection';
import { LocationSection } from './components/LocationSection';
import { ContactEnquirySection } from './components/ContactEnquirySection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [preselectedEvent, setPreselectedEvent] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (preselect?: string) => {
    if (preselect) {
      setPreselectedEvent(preselect);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreVenue = () => {
    const venueElement = document.getElementById('venue');
    if (venueElement) {
      venueElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241F1C] selection:bg-[#731226] selection:text-[#FBF4E4]">
      {/* Top Navbar */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 1. Hero Section */}
      <HeroSection
        onExploreVenue={handleExploreVenue}
        onEnquireNow={() => handleOpenEnquiry()}
      />

      <main className="flex-1">
        {/* 2. About Khazana Resort */}
        <AboutSection onExploreSpaces={handleExploreVenue} />

        {/* 3. Venue / Event Spaces (Khazana Banquet & Khazana Lawn) */}
        <VenueSpacesSection onSelectSpaceForEnquiry={handleOpenEnquiry} />

        {/* 7. Capacity Highlight (Strategic visual transition) */}
        <CapacityHighlightSection />

        {/* 4. Weddings & Events */}
        <WeddingsEventsSection onSelectEventForEnquiry={handleOpenEnquiry} />

        {/* 5. Gallery */}
        <GallerySection />

        {/* 6. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 8. Location */}
        <LocationSection />

        {/* 9. Contact / Enquiry */}
        <ContactEnquirySection preselectedEvent={preselectedEvent} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </div>
  );
}
