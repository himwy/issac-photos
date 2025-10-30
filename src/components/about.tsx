"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-3/4 overflow-hidden"
          >
            <Image
              src="/about-issac.JPG"
              alt="Issac - Photographer"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center h-full"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
              In pursuit to capture little moments one at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
