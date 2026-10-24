'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shirt } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';

interface DressCodeItem {
  event: string;
  colors: string[];
  attire: string;
  notes: string;
}

interface DressCodeProps {
  dressCode: DressCodeItem[];
}

export function DressCode({ dressCode }: DressCodeProps) {
  const colorMap: Record<string, string> = {
    'Emerald Green': '#26734D',
    'Haldi Yellow': '#FDD835',
    'Marigold Yellow': '#F9A825',
    'Orange': '#E87524',
    'Rani Pink': '#D81B60',
    'Sindoor Red': '#B71C1C',
    'Royal Purple': '#7B3F98',
    'Peacock Blue': '#176B87',
    'Wine / Rose Pink': '#C25975',
    'Gold / Black': '#8C6D23',
    'Warm Cream': '#E8DEC8',
  };

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#FFF4E5] via-[#FFFDF8] to-[#FFF4E5] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#F9A825]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#B71C1C]">
              Wedding Attire Guide
            </p>
            <Sparkles className="w-4 h-4 text-[#F9A825]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">
            Dress Code & Traditional Hues
          </h2>
          <p className="text-[#6B8E23] mt-2 italic font-serif text-base sm:text-lg">
            A guide to traditional Indian festive attire for each celebration
          </p>
        </motion.div>

        <FloralDivider height="small" />

        {/* Dress Code Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {dressCode.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-[#E5A93C]/30 flex flex-col justify-between"
            >
              <div>
                {/* Woven Fabric Texture Color Swatches Ribbon */}
                <div className="h-16 flex shadow-inner">
                  {item.colors.map((color, i) => (
                    <div
                      key={i}
                      className="flex-1 transition-transform hover:scale-105"
                      style={{
                        backgroundColor: colorMap[color] || '#D81B60',
                      }}
                      title={color}
                    />
                  ))}
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <Shirt className="w-4 h-4 text-[#D81B60]" />
                    <h3 className="text-elegant text-2xl text-[#2A1810]">
                      {item.event}
                    </h3>
                  </div>

                  {/* Color Palette Chips */}
                  <div className="mb-4">
                    <p className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#6B8E23] mb-2">
                      Suggested Palette
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.colors.map((color, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-full bg-[#FFF4E5] border border-[#E5A93C]/40 text-[#2A1810] font-serif font-medium"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Attire Guidance */}
                  <div className="mb-4">
                    <p className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#6B8E23] mb-1">
                      Attire Recommendation
                    </p>
                    <p className="text-sm font-serif font-semibold text-[#2A1810]">
                      {item.attire}
                    </p>
                  </div>

                  {/* Guest Notes */}
                  <div>
                    <p className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#6B8E23] mb-1">
                      Style Note
                    </p>
                    <p className="text-xs sm:text-sm font-serif text-gray-600 italic leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-base sm:text-lg text-[#6B8E23] italic font-serif">
          Join our celebration adorned in timeless Indian finery, bright colors, and joyful elegance
        </p>
      </div>
    </section>
  );
}
