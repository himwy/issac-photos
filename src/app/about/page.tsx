'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-sm">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl md:text-4xl font-light tracking-tight hover:opacity-50 transition-opacity">
            BIALONS
          </Link>
          <nav className="flex items-center gap-10 text-sm uppercase tracking-wider">
            <Link href="/" className="hover:opacity-50 transition-opacity">
              Portfolio
            </Link>
            <Link href="/about" className="hover:opacity-50 transition-opacity">
              About
            </Link>
            <Link href="/about#contact" className="hover:opacity-50 transition-opacity">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="pt-40 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-16 tracking-tight">About</h1>
            
            <div className="grid md:grid-cols-3 gap-12 md:gap-20">
              <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  We are Issac, a creative duo based in [Your City]. We specialize in photography 
                  and visual storytelling, capturing moments that resonate.
                </p>
                <p>
                  Our work spans editorial photography, commercial projects, and personal documentary 
                  series. We're drawn to authentic stories and the beauty in everyday moments.
                </p>
                <p>
                  With a passion for creativity and attention to detail, we collaborate with clients 
                  to bring their vision to life through thoughtful, artistic imagery.
                </p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Services</p>
                <ul className="space-y-2 text-base text-gray-600">
                  <li>Editorial Photography</li>
                  <li>Commercial Work</li>
                  <li>Documentary Series</li>
                  <li>Creative Direction</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-32 border-t border-gray-200"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-16 tracking-tight">Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-12">
                  Available for commissions, collaborations, and creative projects. 
                  Let's create something beautiful together.
                </p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Email</p>
                  <a 
                    href="mailto:issac@example.com" 
                    className="text-2xl font-light hover:opacity-50 transition-opacity"
                  >
                    issac@example.com
                  </a>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-2xl font-light hover:opacity-50 transition-opacity"
                  >
                    +1 234 567 890
                  </a>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Social</p>
                  <div className="flex gap-6 text-lg">
                    <a 
                      href="https://instagram.com/issac" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-50 transition-opacity"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-50 transition-opacity"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-xs text-gray-400">
          <div className="flex gap-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Facebook</a>
            <a href="https://instagram.com/issac" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Medium</a>
            <a href="mailto:issac@example.com" className="hover:text-black transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
