"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/natural-light-portrait.png",
    alt: "Portrait photography",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/modern-building-architecture.png",
    alt: "Architecture",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/urban-street-scene.png",
    alt: "Street photography",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/nature-photography-forest-landscape.jpg",
    alt: "Nature",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/coastal-landscape-photography-sunset.jpg",
    alt: "Coastal landscape",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/bw-portrait.png",
    alt: "Black and white portrait",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/travel-photography-exotic-location.jpg",
    alt: "Travel photography",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/abstract-fine-art.png",
    alt: "Fine art",
    className: "md:col-span-1 md:row-span-2",
  },
];

export function Gallery() {
  return (
    <section id="portfolio" className="py-12 md:py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[350px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative overflow-hidden group cursor-pointer ${image.className}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
