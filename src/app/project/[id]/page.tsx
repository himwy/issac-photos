"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projectData: Record<
  string,
  {
    title: string;
    year: string;
    category: string;
    description: string;
  }
> = {
  "1": {
    title: "Urban Stories",
    year: "2024",
    category: "Documentary",
    description: "A photographic exploration of urban life and city dwellers.",
  },
  "2": {
    title: "Golden Hour",
    year: "2024",
    category: "Landscape",
    description: "Capturing the magic of golden hour light.",
  },
  "3": {
    title: "Architectural",
    year: "2023",
    category: "Architecture",
    description: "Exploring modern architecture through a minimalist lens.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projectData[id] || projectData["1"];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-sm">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl md:text-4xl font-light tracking-tight hover:opacity-50 transition-opacity"
          >
            BIALONS
          </Link>
          <nav className="flex items-center gap-10 text-sm uppercase tracking-wider">
            <Link href="/" className="hover:opacity-50 transition-opacity">
              Portfolio
            </Link>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              About
            </Link>
            <Link
              href="/about#contact"
              className="hover:opacity-50 transition-opacity"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="pt-40 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-12"
          >
            <span className="mr-2">←</span> Back to portfolio
          </Link>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-12 tracking-tight">
              {project.title}
            </h1>

            <div className="grid md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Year
                </p>
                <p className="text-base">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Category
                </p>
                <p className="text-base">{project.category}</p>
              </div>
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-12"
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`relative ${
                  i === 2 ? "aspect-square" : "aspect-video"
                } bg-gray-200`}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-300 to-gray-200">
                  <span className="text-gray-400 text-xs tracking-widest">
                    IMAGE {i}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Next Project */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-sm hover:opacity-50 transition-opacity"
            >
              View all work <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xs text-gray-400">
          <div className="flex gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/issac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              Medium
            </a>
            <a
              href="mailto:issac@example.com"
              className="hover:text-black transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
