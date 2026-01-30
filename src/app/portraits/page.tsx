import { Header } from "@/components/header";
import { OptimizedImage } from "@/components/optimized-image";
import { getPortraits } from "@/lib/albums";

export default function PortraitsPage() {
  const portraits = getPortraits();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-3xl font-light tracking-tight mb-12">Portraits</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portraits.map((portrait, index) => (
              <div key={index} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <OptimizedImage
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    priority={index < 3}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {portraits.length === 0 && (
            <p className="text-muted-foreground text-center py-12">
              No portraits yet.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
