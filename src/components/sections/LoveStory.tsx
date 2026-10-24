'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import Image from 'next/image';

interface StoryMilestone {
  title: string;
  year?: string;
  description: string;
  image?: string;
}

const defaultStory: StoryMilestone[] = [
  {
    title: 'The First Glance',
    year: '2018',
    description: 'Two souls crossed paths on a breezy winter evening, sparking conversations that felt like returning home.',
  },
  {
    title: 'Brewing Moments & Endless Laughter',
    year: '2019',
    description: 'Countless cups of chai, road trips, and shared dreams turned serendipity into an unbreakable bond.',
  },
  {
    title: 'The Royal Proposal',
    year: '2024',
    description: 'Beneath a constellation of stars and flickering diyas, a heartfelt question was asked, and a tearful "Yes" sealed forever.',
  },
  {
    title: 'Our Forever Under the Mandap',
    year: '2027',
    description: 'Surrounded by our beloved families, sacred mantras, and blooming marigolds, we begin our eternal journey as one.',
  },
];

interface LoveStoryProps {
  story?: StoryMilestone[];
}

export function LoveStory({ story = defaultStory }: LoveStoryProps) {
  const milestoneColors = [
    { border: '#D81B60', tag: '#D81B60' }, // Rani Pink
    { border: '#176B87', tag: '#176B87' }, // Peacock Blue
    { border: '#7B3F98', tag: '#7B3F98' }, // Royal Purple
    { border: '#26734D', tag: '#26734D' }, // Emerald Green
  ];

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
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#B71C1C]">
              A Destined Journey
            </p>
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">Our Love Story</h2>
          <p className="text-[#6B8E23] mt-2 italic font-serif text-base sm:text-lg">
            From serendipity to the sacred Saat Phere at Lake Pichola
          </p>
        </motion.div>

        <FloralDivider height="small" />

        {/* Featured Real Couple Photograph Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="my-12 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E5A93C]/40 max-w-3xl mx-auto h-[320px] sm:h-[400px]"
        >
          <Image
            src="/images/couple-moment.jpg"
            alt="Aanya & Aarav"
            fill
            unoptimized
            className="object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#FDD835] font-serif font-bold">
                Aanya & Aarav
              </p>
              <h3 className="text-elegant text-2xl sm:text-4xl text-white font-serif mt-1">
                Written in the Stars, Celebrated in Udaipur
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Timeline Milestones */}
        <div className="mt-14 relative">
          {/* Subtle Gold Foil Timeline Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#E5A93C] via-[#D81B60] to-[#26734D] hidden md:block" />

          <div className="space-y-10 md:space-y-14">
            {story.map((milestone, index) => {
              const colorSet = milestoneColors[index % milestoneColors.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'
                    }`}
                  >
                    <div
                      className="rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border border-[#E5A93C]/30 bg-white"
                    >
                      {milestone.year && (
                        <span
                          className="inline-block text-xs font-serif font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-3"
                          style={{ backgroundColor: colorSet.tag }}
                        >
                          {milestone.year}
                        </span>
                      )}
                      <h3
                        className="text-elegant text-2xl sm:text-3xl mb-2"
                        style={{ color: colorSet.border }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-[#2A1810]/80 leading-relaxed font-serif text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Clean Gold Timeline Medallion */}
                  <div className="hidden md:flex md:w-0 md:items-center md:justify-center">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#E5A93C] shadow-sm flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B71C1C]" />
                    </div>
                  </div>

                  {/* Mobile indicator */}
                  <div className="md:hidden absolute left-0 top-0 w-1 h-full bg-[#D81B60]/40" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Note */}
        <div className="mt-16 text-center">
          <Heart className="w-8 h-8 text-[#D81B60] fill-[#D81B60] mx-auto mb-3" />
          <p className="text-base sm:text-lg text-[#6B8E23] italic font-serif">
            With every step, we cherish your love and blessings in our new beginning
          </p>
        </div>
      </div>
    </section>
  );
}
