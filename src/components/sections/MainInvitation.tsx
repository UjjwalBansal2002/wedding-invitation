'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FloralDivider, FloralCorner } from '@/components/ui/FloralDecorations';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface MainInvitationProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  destination: string;
  invitationMessage: string;
}

export function MainInvitation({
  brideName,
  groomName,
  weddingDate,
  destination,
  invitationMessage,
}: MainInvitationProps) {
  const formattedDate = new Date(weddingDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative w-full min-h-screen py-24 px-4 overflow-hidden flex items-center justify-center bg-[#1A0E08]">
      {/* Real Mandap Hero Photography Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mandap.jpg"
          alt="Opulent Wedding Mandap at The Mountain Front Resort & Spa"
          fill
          priority
          unoptimized
          className="object-cover object-center filter brightness-75 scale-100"
        />
        {/* Soft Warm Radial Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/70" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Luxury Printed Letterpress Wedding Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#E5A93C] via-[#FFFDF9] to-[#D81B60] shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
        >
          {/* Card Body - Realistic Ivory Linen Paper Texture */}
          <div className="relative bg-[#FFFDF8]/95 backdrop-blur-md rounded-[23px] p-8 sm:p-14 md:p-16 border border-[#E5A93C]/40 text-center">
            {/* Corner Gold Brackets (Letterpress Style) */}
            <FloralCorner position="top-left" size="medium" />
            <FloralCorner position="top-right" size="medium" />
            <FloralCorner position="bottom-left" size="medium" />
            <FloralCorner position="bottom-right" size="medium" />

            {/* Inner Gold Foil Hairline Border */}
            <div className="absolute inset-3 border border-[#E5A93C]/30 rounded-2xl pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-[#B71C1C]/20 rounded-xl pointer-events-none" />

            {/* Auspicious Ganesh Inscription */}
            <p className="text-xs sm:text-sm font-serif tracking-[0.3em] text-[#B71C1C] uppercase font-bold mb-4">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-[#6B8E23] font-serif font-semibold mb-3">
              With the Auspicious Blessings of Our Families
            </p>

            {/* Couple Names */}
            <h1 className="text-elegant text-4xl sm:text-6xl text-[#D81B60] tracking-wide mb-2 drop-shadow-xs">
              {brideName}
            </h1>

            <div className="flex items-center justify-center gap-3 my-2">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
              <span className="text-2xl font-serif italic text-[#B71C1C] font-semibold">&</span>
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
            </div>

            <h1 className="text-elegant text-4xl sm:text-6xl text-[#D81B60] tracking-wide mb-6 drop-shadow-xs">
              {groomName}
            </h1>

            {/* Clean Gold Hairline Divider */}
            <FloralDivider height="small" />

            {/* Heartfelt Invitation Note */}
            <div className="max-w-xl mx-auto my-6">
              <p className="text-romantic text-lg sm:text-xl text-[#2A1810]/85 leading-relaxed font-serif">
                {invitationMessage}
              </p>
            </div>

            {/* Date & Destination Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-8 pt-6 border-t border-[#E5A93C]/30 max-w-lg mx-auto">
              <div className="flex items-center gap-2.5 text-[#B71C1C]">
                <Calendar className="w-5 h-5 text-[#E5A93C]" />
                <span className="font-serif font-bold text-base sm:text-lg">{formattedDate}</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
              <div className="flex items-center gap-2.5 text-[#176B87]">
                <MapPin className="w-5 h-5 text-[#E5A93C]" />
                <span className="font-serif font-bold text-base sm:text-lg">{destination}</span>
              </div>
            </div>

            {/* Traditional Blessing Footnote */}
            <p className="text-xs text-[#6B8E23] font-serif italic tracking-widest">
              {destination}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
