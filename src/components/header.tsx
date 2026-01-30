"use client";

import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-light tracking-wide">
              Isaac Chau
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/events"
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity relative"
              >
                Events
                {isActive("/events") && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-black" />
                )}
              </Link>
              <Link
                href="/sports"
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity relative"
              >
                Sports
                {isActive("/sports") && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-black" />
                )}
              </Link>
              <Link
                href="/portraits"
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity relative"
              >
                Portraits
                {isActive("/portraits") && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-black" />
                )}
              </Link>
              <Link
                href="/about"
                className="text-sm uppercase tracking-wider hover:opacity-60 transition-opacity relative"
              >
                About Me
                {isActive("/about") && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-black" />
                )}
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/ichyung/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <Instagram className="w-5 h-5 hover:opacity-60 transition-opacity" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-8 py-6 border-b border-border">
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight"
                onClick={() => setMobileMenuOpen(false)}
              >
                ISAAC
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
              <Link
                href="/events"
                className="text-3xl uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/sports"
                className="text-3xl uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sports
              </Link>
              <Link
                href="/portraits"
                className="text-3xl uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portraits
              </Link>
              <Link
                href="/about"
                className="text-3xl uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
            </nav>

            <div className="flex items-center justify-center gap-6 pb-12">
              <Link
                href="https://www.instagram.com/ichyung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
