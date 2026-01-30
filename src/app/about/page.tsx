import { Header } from "@/components/header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/about page.JPG"
                alt=""
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-8">
              <p className="text-lg font-light tracking-wide text-muted-foreground">
                extraordinary ordinary
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href="https://www.instagram.com/ichyung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-60 transition-opacity"
                >
                  @ichyung
                </a>
                <a
                  href="mailto:ichyung00@gmail.com"
                  className="block hover:opacity-60 transition-opacity"
                >
                  ichyung00@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
