"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SlideItem {
  src: string;
  label?: string;
}

interface SlideshowProps {
  images?: string[]; // backward compatibility
  items?: SlideItem[]; // preferred: supports per-image labels
  intervalMs?: number;
  className?: string;
  aspectClass?: string; // e.g., "aspect-[16/9]" or "aspect-[4/5]"
  caption?: string; // group/title caption shown above
}

export default function Slideshow({
  images,
  items,
  intervalMs = 3000,
  className = "",
  aspectClass = "aspect-[16/9]",
  caption,
}: SlideshowProps) {
  const slides: SlideItem[] = (items && items.length
    ? items
    : (images || []).map((src) => ({ src })));

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const id = setInterval(() => {
      if (!paused) setCurrent((p) => (p + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
    // only depend on paused and intervalMs to avoid array identity issues
  }, [paused, intervalMs, slides.length]);

  if (!slides || slides.length === 0) {
    return (
      <div className={`border-4 border-gray-400 p-6 bg-white text-center ${className}`}>
        <div className="font-tactical text-gray-700">No images found.</div>
      </div>
    );
  }

  return (
    <div
      className={`group steel-card wood-texture border-4 border-gray-400 p-4 shadow-xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
    >
      {caption && (
        <div className="text-center mb-3">
          <div className="bg-black/70 border border-yellow-400 p-2 inline-block w-full">
            <div className="font-heavy text-base md:text-lg font-black text-yellow-400 tracking-wider">
              {caption}
            </div>
          </div>
        </div>
      )}
      <div className="relative w-full overflow-hidden border-4 border-gray-500 bg-black">
        <div className={`relative ${aspectClass}`}>
          {slides.map((s, idx) => (
            <Image
              key={`${s.src}-${idx}`}
              src={s.src}
              alt={s.label ? s.label : `Photo ${idx + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className={`absolute inset-0 object-contain bg-black transition-opacity duration-700 ${
                current === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {slides[current]?.label && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-yellow-300 font-tactical text-xs sm:text-sm px-2 py-1 border-t border-yellow-400">
              {slides[current].label}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full ${current === idx ? "bg-yellow-400" : "bg-gray-400/60"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <div className="text-center text-xs text-gray-700 mt-2">(Auto-scrolls; touch/hover to pause)</div>
    </div>
  );
}
