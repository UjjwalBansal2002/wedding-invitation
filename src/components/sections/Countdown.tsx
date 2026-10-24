'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/useCountdown';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import { Sparkles } from 'lucide-react';

interface CountdownProps {
  weddingDate: string;
}

export function Countdown({ weddingDate }: CountdownProps) {
  const countdown = useCountdown(weddingDate);

  const countdownItem = (value: number, label: string, bgColor: string, textColor: string = '#FFFFFF') => (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-20 h-24 sm:w-28 sm:h-32 rounded-2xl flex flex-col items-center justify-center shadow-xl border border-[#E5A93C]/50 relative overflow-hidden backdrop-blur-xs"
        style={{ backgroundColor: bgColor }}
      >
        {/* Subtle letterpress corner ticks */}
        <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-white/50" />
        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-white/50" />
        <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-white/50" />
        <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-white/50" />

        <span className="text-3xl sm:text-5xl font-serif font-bold tracking-tight drop-shadow-sm" style={{ color: textColor }}>
          {String(value).padStart(2, '0')}
        </span>
        <span className="text-[10px] sm:text-xs font-serif uppercase tracking-widest mt-1 opacity-90 font-semibold" style={{ color: textColor }}>
          {label}
        </span>
      </motion.div>
      <p className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-[#B71C1C] uppercase font-serif">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-b from-[#FFF4E5] via-[#FFFDF8] to-[#FFF4E5] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {countdown.isPassed ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60] mb-4">
              The Celebration Continues
            </h2>
            <p className="text-lg text-[#26734D] italic font-serif">
              Thank you for being part of our auspicious union and celebrating with us.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-3"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#E87524]">
                  The Auspicious Countdown
                </p>
                <Sparkles className="w-4 h-4 text-[#E5A93C]" />
              </div>
              <h2 className="text-elegant text-3xl sm:text-5xl text-[#D81B60]">
                Until We Celebrate Together
              </h2>
            </motion.div>

            <FloralDivider height="small" />

            {/* Countdown Grid - Rich Authentic Wedding Tones */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 max-w-2xl mx-auto">
              {countdownItem(countdown.days, 'Days', '#D81B60', '#FFFFFF')}
              {countdownItem(countdown.hours, 'Hours', '#B71C1C', '#FFFFFF')}
              {countdownItem(countdown.minutes, 'Minutes', '#F9A825', '#2A1810')}
              {countdownItem(countdown.seconds, 'Seconds', '#26734D', '#FFFFFF')}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-10 text-base sm:text-lg text-[#6B8E23] italic font-serif"
            >
              Counting down every golden moment until we welcome you to The Mountain Front Resort & Spa
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
}
