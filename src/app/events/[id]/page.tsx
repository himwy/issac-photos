"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { Header } from "@/components/header";
import { OptimizedImage } from "@/components/optimized-image";
import { Lightbox } from "@/components/lightbox";
import { getAlbum, getAlbums } from "@/lib/albums";

export default function EventAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const album = getAlbum("events", id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!album) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Back link */}
          <Link
            href="/events"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Back to Events
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-light tracking-tight mb-6">
            {album.title}
          </h1>

          {/* Description */}
          <div className="mb-12 max-w-2xl">
            <p className="text-muted-foreground">
              {album.description}
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {album.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightboxIndex(index)}
              >
                <OptimizedImage
                  src={image}
                  alt={`${album.title} - Photo ${index + 1}`}
                  fill
                  priority={index < 6}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={album.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % album.images.length)
          }
          onPrevious={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + album.images.length) % album.images.length
            )
          }
          alt={album.title}
        />
      )}
    </div>
  );
}
