"use client";

import { useEffect } from "react";
import { OptimizedImage } from "./optimized-image";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  alt?: string;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  alt = "Full size image",
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl leading-none p-2 z-10"
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-5xl leading-none p-2 z-10"
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-12 md:px-16 py-20 md:py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <OptimizedImage
            src={images[currentIndex]}
            alt={`${alt} ${currentIndex + 1}`}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl md:text-5xl leading-none p-2 z-10"
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
