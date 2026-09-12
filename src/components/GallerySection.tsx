import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryCategory, GalleryItem } from '../types';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'all', label: 'All Showcase' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'banquet', label: 'Banquet Hall' },
    { key: 'wedding', label: 'Wedding Setup' },
    { key: 'dining', label: 'Dining Area' },
    { key: 'lawn', label: 'Lawn' },
    { key: 'decor', label: 'Event Decorations' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const currentLightboxItem: GalleryItem | null = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev ?? 0) === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#F5EFE6] relative border-t border-[#E5DAC6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#731226]/10 text-[#731226] text-xs font-bold uppercase tracking-widest mb-3 border border-[#731226]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Visual Tour</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#35070E] tracking-tight">
            Resort & Celebration Gallery
          </h2>

          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-16 bg-[#C59B27]" />
            <div className="w-2 h-2 rounded-full bg-[#731226]" />
            <div className="h-[1px] w-16 bg-[#C59B27]" />
          </div>

          <p className="text-base sm:text-lg text-[#554E48] leading-relaxed mb-4">
            Experience the grandeur of Khazana Resort through our curated visual showcase of banquets,
            open lawns, illuminated night facades, and celebratory dining settings.
          </p>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#8C6212] bg-[#FAF3DC] px-4 py-1.5 rounded-full border border-[#E8D08D]">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>Representative showcase photographs for demo presentation purposes</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#731226] text-[#FDFBF7] shadow-md scale-105'
                    : 'bg-white text-[#524B45] hover:bg-[#FAF7F2] hover:text-[#731226] border border-[#E5DAC6]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl border border-[#E5DAC6] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-md bg-[#35070E]/80 text-[#F5E6BE] text-[11px] font-medium tracking-wide border border-[#C59B27]/40 backdrop-blur-sm">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-110">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EAE2D5] line-clamp-1 mt-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Content Box */}
          <div
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[72vh] overflow-hidden rounded-2xl flex items-center justify-center bg-black/50 shadow-2xl">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[72vh] object-contain rounded-xl"
              />
            </div>

            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#F3E5AB] text-xs font-semibold mb-1 uppercase tracking-wider">
                {currentLightboxItem.categoryLabel}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FAF7F2]">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD4C5] mt-1">
                {currentLightboxItem.description}
              </p>
              <p className="text-[11px] text-white/50 mt-2 italic">
                Photo {lightboxIndex + 1} of {filteredItems.length} • Khazana Resort Demo Gallery
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
