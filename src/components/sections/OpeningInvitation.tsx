'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface OpeningInvitationProps {
  brideName: string;
  groomName: string;
  onOpen: () => void;
}

export function OpeningInvitation({ brideName, groomName, onOpen }: OpeningInvitationProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(onOpen, 1600);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#1A0E08]">
      {/* Background: Real Professional Wedding Stationery & Marigolds Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/invitation-stationery.jpg"
          alt="Luxury Indian Wedding Invitation Stationery"
          fill
          priority
          unoptimized
          className="object-cover object-center filter brightness-90 scale-105"
        />
        {/* Soft Warm Vignette Overlay for Depth & Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/60 backdrop-blur-[1px]" />
      </div>

      {/* Music Toggle */}
      {!isOpened && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-6 right-6 z-30 bg-black/40 backdrop-blur-md border border-[#E5A93C]/40 p-3 rounded-full hover:bg-black/60 transition-all text-[#FDD835] shadow-lg cursor-pointer"
          aria-label="Toggle music"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#E5A93C]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#E5A93C]" />
          )}
        </button>
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {!isOpened ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative flex flex-col items-center max-w-lg w-full"
          >
            {/* Auspicious Shloka */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <p className="text-xs md:text-sm tracking-[0.3em] font-serif font-bold text-[#FDD835] uppercase drop-shadow-sm">
                ॥ श्री गणेशाय नमः ॥
              </p>
              <p className="text-[11px] text-[#FFF4E5]/80 mt-1 font-serif tracking-[0.2em] uppercase">
                Auspicious Royal Wedding Invitation
              </p>
            </motion.div>

            {/* Physical Luxury Card Envelope with Authentic Paper Texture & Realistic Shadow */}
            <motion.div
              className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl p-[1px] bg-gradient-to-br from-[#E5A93C] via-[#FFF4E5] to-[#D81B60] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Textured Deckle-Edge Card Surface */}
              <div className="relative bg-[#FFFDF9] rounded-[15px] p-8 sm:p-10 border border-[#E5A93C]/40 text-center overflow-hidden">
                {/* Gold letterpress decorative inner frame */}
                <div className="absolute inset-3 border border-[#E5A93C]/40 rounded-xl pointer-events-none" />
                <div className="absolute inset-4 border border-dashed border-[#B71C1C]/25 rounded-lg pointer-events-none" />

                {/* Sub-header */}
                <p className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#B71C1C] font-semibold mb-3">
                  Under the Auspices of the Divine
                </p>

                {/* Couple Names in Luxury Letterpress Gold/Rani Foil */}
                <div className="my-3">
                  <h2 className="text-elegant text-3xl sm:text-4xl text-[#D81B60] tracking-wide">
                    {brideName}
                  </h2>
                  <div className="flex items-center justify-center gap-3 my-2">
                    <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
                    <span className="text-lg font-serif italic text-[#B71C1C] font-semibold">&</span>
                    <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93C] to-transparent" />
                  </div>
                  <h2 className="text-elegant text-3xl sm:text-4xl text-[#D81B60] tracking-wide">
                    {groomName}
                  </h2>
                </div>

                {/* Destination & Date preview */}
                <div className="mt-4 pt-3 border-t border-[#E5A93C]/30 text-xs font-serif text-[#2A1810]/75">
                  <p className="font-semibold text-[#176B87]">The Mountain Front Resort</p>
                  <p className="mt-0.5 text-gray-500">November 25 – 26, 2026</p>
                </div>

                {/* Authentic Wax Seal Emblem */}
                <div className="mt-6 flex justify-center">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E5A93C] via-[#C98B27] to-[#8C5814] flex items-center justify-center shadow-md border border-[#FFE8A3]">
                    <span className="text-white text-xs font-serif font-bold tracking-widest drop-shadow-xs">
                      {brideName[0]} & {groomName[0]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Realistic Open Invitation Button */}
            <motion.div className="mt-8">
              <motion.button
                onClick={handleOpen}
                className="px-8 py-3.5 bg-gradient-to-r from-[#D81B60] via-[#B71C1C] to-[#E87524] text-white rounded-full font-serif font-semibold text-base sm:text-lg shadow-2xl hover:shadow-[0_0_25px_rgba(216,27,96,0.6)] transition-all border border-[#FDD835]/60 flex items-center gap-2.5 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Sparkles className="w-4 h-4 text-[#FDD835]" />
                <span>Open Royal Invitation</span>
                <Sparkles className="w-4 h-4 text-[#FDD835]" />
              </motion.button>
            </motion.div>

            <p className="mt-4 text-center text-xs text-[#FFF4E5]/80 font-serif italic tracking-wide">
              Click to unfold the celebrations at The Mountain Front Resort
            </p>
          </motion.div>
        ) : (
          /* Opened Reveal Transition */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 bg-black/50 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#E5A93C]/50 max-w-xl"
          >
            <p className="text-xs sm:text-sm font-serif tracking-[0.3em] text-[#FDD835] uppercase mb-3">
              ॥ शुभ विवाह आमंत्रण ॥
            </p>
            <h1 className="text-elegant text-4xl sm:text-6xl text-white mb-3">
              {brideName} & {groomName}
            </h1>
            <p className="text-base sm:text-lg text-[#FFF4E5] font-serif italic">
              Warmly request the honour of your auspicious presence
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
