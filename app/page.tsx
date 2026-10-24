'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { weddingData } from '@/config/weddingData';
import { OpeningInvitation } from '@/components/sections/OpeningInvitation';
import { MainInvitation } from '@/components/sections/MainInvitation';
import { Countdown } from '@/components/sections/Countdown';
import { WeddingEvents } from '@/components/sections/WeddingEvents';
import { DestinationExperience } from '@/components/sections/DestinationExperience';
import { PhotoGallery } from '@/components/sections/PhotoGallery';
import { RSVP } from '@/components/sections/RSVP';
import { ClosingSection } from '@/components/sections/ClosingSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const mainInvitationRef = useRef<HTMLDivElement>(null);
  const rsVPRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main ref={topRef} className="bg-[#FFF4E5] min-h-screen">
      {/* Opening Invitation */}
      {!showInvitation ? (
        <OpeningInvitation
          brideName={weddingData.brideName}
          groomName={weddingData.groomName}
          onOpen={() => setShowInvitation(true)}
        />
      ) : (
        <>
          {/* Main Invitation */}
          <div ref={mainInvitationRef}>
            <MainInvitation
              brideName={weddingData.brideName}
              groomName={weddingData.groomName}
              weddingDate={weddingData.weddingDate}
              destination={weddingData.destination}
              invitationMessage={weddingData.invitationMessage}
            />
          </div>

          {/* Countdown */}
          <Countdown weddingDate={weddingData.weddingDate} />

          {/* Wedding Events */}
          <WeddingEvents events={weddingData.events} />

          {/* Destination Experience */}
          <DestinationExperience
            destination={weddingData.destination}
            venueAddress={weddingData.venueAddress}
            venuePhone={weddingData.venuePhone}
            mapsUrl={weddingData.mapsUrl}
            travel={weddingData.travel}
          />

          {/* Photo Gallery */}
          <PhotoGallery images={weddingData.gallery} />

          {/* RSVP */}
          <div ref={rsVPRef}>
            <RSVP events={weddingData.events} />
          </div>

          {/* Closing Section */}
          <ClosingSection
            brideName={weddingData.brideName}
            groomName={weddingData.groomName}
            weddingDate={weddingData.weddingDate}
            destination={weddingData.destination}
            closingMessage={weddingData.closingMessage}
            onScrollToRSVP={() => scrollToSection(rsVPRef)}
            onScrollToTop={() => scrollToSection(topRef)}
          />
        </>
      )}

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => scrollToSection(topRef)}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-[#D81B60] via-[#B71C1C] to-[#E87524] text-white shadow-lg hover:shadow-2xl transition-all border border-[#FDD835]/50 flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
