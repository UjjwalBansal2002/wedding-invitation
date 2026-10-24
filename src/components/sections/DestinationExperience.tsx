'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import Image from 'next/image';

interface DestinationExperienceProps {
  destination: string;
  venueAddress: string;
  venuePhone: string;
  mapsUrl?: string;
  travel?: {
    airport?: { name: string; fullName: string; distance: string; drivingTime: string; facilities: string };
    railway?: { name: string; distance: string; drivingTime: string; facilities: string };
    hotels?: Array<{ name: string; rating: string; description: string; type: string }>;
  };
}

export function DestinationExperience({
  destination,
  venueAddress,
  venuePhone,
  mapsUrl = 'https://maps.app.goo.gl/4adDLMfRR6QQwZe5A',
}: DestinationExperienceProps) {
  return (
    <section className="relative w-full py-24 px-4 bg-[#FFF4E5] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#176B87]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#176B87]">
              Destination & Venue
            </p>
            <Sparkles className="w-4 h-4 text-[#176B87]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">
            The Wedding Sanctuary
          </h2>
          <p className="text-xl sm:text-2xl text-[#176B87] font-serif font-semibold mt-2">
            {destination}
          </p>
        </motion.div>

        <FloralDivider height="small" />

        {/* Real Architectural Photograph of Venue */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-2xl border border-[#E5A93C]/40 bg-white"
        >
          {/* Real Photo Banner */}
          <div className="relative h-64 sm:h-96 w-full">
            <Image
              src="/images/destination-palace.jpg"
              alt={destination}
              fill
              unoptimized
              className="object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-10">
              <div className="text-white max-w-xl">
                <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#FDD835] px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs inline-block mb-2">
                  Primary Wedding Sanctuary
                </span>
                <h3 className="text-elegant text-3xl sm:text-5xl text-white font-serif">
                  {destination}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 font-serif mt-2">
                  An exquisite luxury mountain resort offering an idyllic, serene backdrop and world-class hospitality for our wedding celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Venue Details & Map Action */}
          <div className="p-6 sm:p-8 bg-[#FFFDF9] border-t border-[#E5A93C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-serif font-bold tracking-widest text-[#6B8E23] uppercase">
                Sanctuary Address
              </p>
              <p className="text-sm sm:text-base font-serif text-[#2A1810]">
                {venueAddress}
              </p>
              <p className="text-xs sm:text-sm font-serif text-[#D81B60] flex items-center gap-1.5 font-semibold">
                <Phone className="w-3.5 h-3.5" />
                {venuePhone}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.open(mapsUrl || `https://maps.app.goo.gl/4adDLMfRR6QQwZe5A`, '_blank');
              }}
              className="px-6 py-3.5 bg-gradient-to-r from-[#176B87] to-[#26734D] text-white rounded-xl font-serif font-semibold text-sm shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <MapPin className="w-4 h-4 text-[#FDD835]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
