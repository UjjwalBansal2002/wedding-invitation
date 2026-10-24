'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles, Calendar, Clock } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import Image from 'next/image';

interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  dressCode?: string;
  description: string;
  image?: string;
  colors: { primary: string; secondary: string };
}

interface WeddingEventsProps {
  events: Event[];
}

export function WeddingEvents({ events }: WeddingEventsProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const getEventBadge = (id: string) => {
    switch (id) {
      case 'haldi':
        return 'HALDI CEREMONY';
      case 'sangeet':
        return 'DJ & SANGEET NIGHT';
      case 'sagai':
        return 'SAGAI RASM';
      case 'wedding':
        return 'SHUBH VIVAH';
      default:
        return 'WEDDING EVENT';
    }
  };

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#FFF4E5] via-[#FFFDF8] to-[#FFF4E5] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#F9A825]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#B71C1C]">
              Ceremonies & Celebrations
            </p>
            <Sparkles className="w-4 h-4 text-[#F9A825]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">
            The Wedding Festivities
          </h2>
          <p className="text-[#6B8E23] mt-2 italic font-serif text-base sm:text-lg">
            Sacred rituals, music, vibrant decor, and joyful celebrations
          </p>
        </motion.div>

        <FloralDivider height="small" />

        {/* Real Photographic Event Cards */}
        <div className="mt-12 space-y-8">
          {events.map((event, index) => {
            const isExpanded = expandedEvent === event.id;
            const eventImage = event.image || '/images/hero-mandap.jpg';

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-[#E5A93C]/40 bg-white"
              >
                {/* Event Photo Header Banner */}
                <div
                  onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                  className="relative h-48 sm:h-64 w-full cursor-pointer overflow-hidden group"
                >
                  <Image
                    src={eventImage}
                    alt={event.name}
                    fill
                    unoptimized
                    className="object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6 sm:p-8">
                    <div className="flex-1 text-white pr-4">
                      <span
                        className="inline-block text-[11px] font-serif font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white mb-2 shadow-sm"
                        style={{ backgroundColor: event.colors.primary }}
                      >
                        {getEventBadge(event.id)}
                      </span>
                      <h3 className="text-elegant text-2xl sm:text-4xl text-white tracking-wide">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-sm font-serif mt-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#FDD835]" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#FDD835]" />
                          {event.time}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden bg-[#FFFDF9] border-t-2"
                      style={{ borderTopColor: event.colors.primary }}
                    >
                      <div className="p-6 sm:p-8 space-y-6">
                        {/* Event Description */}
                        <p
                          className="text-base sm:text-lg text-[#2A1810]/85 font-serif italic leading-relaxed border-l-4 pl-4"
                          style={{ borderLeftColor: event.colors.primary }}
                        >
                          {event.description}
                        </p>

                        <div className="pt-2">
                          {/* Venue Location */}
                          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white shadow-xs border border-[#E5A93C]/20 max-w-xl">
                            <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: event.colors.primary }} />
                            <div>
                              <p className="text-xs font-serif font-bold tracking-widest text-[#6B8E23] uppercase">
                                Venue & Setting
                              </p>
                              <p className="text-sm sm:text-base font-serif font-semibold text-[#2A1810] mt-0.5">
                                {event.venue}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center mt-12 text-base sm:text-lg text-[#6B8E23] italic font-serif">
          Each celebration is crafted with authentic Indian heritage, exquisite floral decor, and heartfelt hospitality
        </p>
      </div>
    </section>
  );
}
