"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/151282870_279362036943215_3719612046074592655_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/156933532_3005140933053761_3824277203160191609_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/242700730_6860584743967463_7123456007017545912_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/271158610_433179525106551_6511624179951098499_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/275862324_2238518342990528_1227914083198531739_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/289843531_1403540240160855_826828221484257912_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/290862117_180128864413640_6912065550714558846_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/482396874_18092416996559460_3582282048323521415_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/482602989_18092417005559460_3044302889215439367_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/75358238_683398045525061_8078707450716699707_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/79646658_2492715027637769_7710395344314259670_n.jpg",
    alt: "Photography by Issac",
  },
  {
    src: "/85211282_1252164821639617_3698328384216900727_n.jpg",
    alt: "Photography by Issac",
  },
];

export function Gallery() {
  return (
    <section id="portfolio" className="py-12 md:py-20 px-6 md:px-10">
      <div className="container mx-auto max-w-[1800px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
