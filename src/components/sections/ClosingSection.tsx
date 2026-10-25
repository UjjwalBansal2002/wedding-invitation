'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUp, Heart } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import Image from 'next/image';

interface ClosingSectionProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  destination: string;
  closingMessage: string;
  onScrollToRSVP?: () => void;
  onScrollToTop?: () => void;
}

export function ClosingSection({
  brideName,
  groomName,
  weddingDate,
  destination,
  closingMessage,
  onScrollToRSVP,
  onScrollToTop,
}: ClosingSectionProps) {
  const formattedDate = new Date(weddingDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="relative w-full min-h-screen py-24 px-4 flex items-center justify-center overflow-hidden bg-[#1A0E08]">
      {/* Background: Real Mandap Sunset Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mandap.jpg"
          alt="Sunset Wedding at The Mountain Front Resort"
          fill
          unoptimized
          className="object-cover object-center filter brightness-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/80" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/45 backdrop-blur-md p-8 sm:p-14 rounded-3xl border border-[#E5A93C]/40 shadow-2xl"
        >
          {/* Auspicious Sacred Header */}
          <p className="text-xs sm:text-sm font-serif tracking-[0.3em] text-[#FDD835] uppercase font-bold mb-4 drop-shadow-sm">
            ॥ शुभ विवाह शुभाशीर्वाद ॥
          </p>

          {/* Couple Names */}
          <h2 className="text-elegant text-4xl sm:text-6xl text-white tracking-wide mb-2">
            {brideName}
          </h2>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
            <span className="text-2xl font-serif italic text-[#FDD835] font-semibold">&</span>
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-6xl text-white tracking-wide mb-6">
            {groomName}
          </h2>

          <FloralDivider height="small" />

          {/* Destination & Date */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl font-serif text-[#FDD835] font-semibold">
              {destination}
            </p>
            <p className="text-sm sm:text-base font-serif text-white/80 mt-1">
              {formattedDate}
            </p>
          </div>

          {/* Closing Message */}
          <p className="text-romantic text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed font-serif">
            {closingMessage}
          </p>

          {/* Subtle Glowing Heart */}
          <div className="flex justify-center mb-10">
            <div className="p-3.5 rounded-full bg-white/10 border border-[#E5A93C]/40">
              <Heart className="w-6 h-6 text-[#FDD835] fill-[#FDD835]" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-md mx-auto">
            {onScrollToRSVP && (
              <motion.button
                onClick={onScrollToRSVP}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-gradient-to-r from-[#D81B60] via-[#B71C1C] to-[#E87524] text-white rounded-full font-serif font-semibold text-base shadow-lg hover:shadow-2xl transition-all border border-[#FDD835]/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FDD835]" />
                <span>RSVP to Celebrate</span>
              </motion.button>
            )}

            {onScrollToTop && (
              <motion.button
                onClick={onScrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-white/15 text-white border border-[#E5A93C]/60 rounded-full font-serif font-semibold text-base shadow-md hover:bg-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </motion.button>
            )}
          </div>

          {/* Footer Traditional Blessings */}
          <div className="border-t border-[#E5A93C]/30 pt-8 max-w-xl mx-auto text-white/80 font-serif">
            <p className="text-base sm:text-lg italic mb-2">
              With boundless love, gratitude, and heartfelt blessings
            </p>
            <p className="text-xs text-[#FDD835] tracking-widest uppercase font-semibold">
              The Bansal & Varshney Families
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
