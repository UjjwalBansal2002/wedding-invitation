'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Eye } from 'lucide-react';
import { FloralDivider } from '@/components/ui/FloralDecorations';
import Image from 'next/image';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

export function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(images.map((img) => img.category)))];

  const filteredImages =
    filter === 'all' ? images : images.filter((img) => img.category === filter);

  return (
    <section className="relative w-full py-24 px-4 bg-[#FFF4E5] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-serif font-bold text-[#B71C1C]">
              Wedding Portfolio & Memories
            </p>
            <Sparkles className="w-4 h-4 text-[#D81B60]" />
          </div>
          <h2 className="text-elegant text-4xl sm:text-5xl text-[#D81B60]">
            The Wedding Gallery
          </h2>
          <p className="text-[#6B8E23] mt-2 italic font-serif text-base sm:text-lg">
            Glimpses of joyful ceremonies, fresh floral installations, and unforgettable memories
          </p>
        </motion.div>

        <FloralDivider height="small" />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-6 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-serif font-semibold text-xs sm:text-sm transition-all capitalize cursor-pointer border ${
                filter === category
                  ? 'bg-gradient-to-r from-[#D81B60] to-[#B71C1C] text-white shadow-md border-transparent'
                  : 'bg-white text-[#B71C1C] hover:bg-[#FFFDF9] border-[#E5A93C]/40 shadow-xs'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Glimpses' : category}
            </motion.button>
          ))}
        </div>

        {/* Photographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all border border-[#E5A93C]/30 bg-black ${
                  index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2 min-h-[380px]' : 'min-h-[280px]'
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-full min-h-[280px] overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image
                      src={image.image}
                      alt={image.title}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>

                  {/* Cinematic Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                    <span className="text-[10px] font-serif font-bold uppercase tracking-widest text-[#FDD835] mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-elegant text-xl sm:text-2xl text-white font-serif">
                      {image.title}
                    </h3>
                  </div>

                  {/* Eye View Indicator */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-xs border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-[#E5A93C]/50"
              >
                <div className="relative w-full h-[65vh] min-h-[350px]">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer border border-white/20"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Footer Caption */}
                <div className="p-6 bg-[#1A0E08] border-t border-[#E5A93C]/30 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-serif font-bold uppercase tracking-widest text-[#E5A93C]">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-elegant text-2xl text-white">
                      {selectedImage.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#FFF4E5]/70 font-serif italic">
                    The Mountain Front Resort & Spa
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
