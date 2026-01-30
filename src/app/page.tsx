import Link from "next/link";
import { Header } from "@/components/header";
import { OptimizedImage } from "@/components/optimized-image";
import { getAlbums, getPortraits } from "@/lib/albums";

export default function Home() {
  const eventAlbums = getAlbums("events").slice(0, 2);
  const sportsAlbums = getAlbums("sports").slice(0, 2);
  const portraits = getPortraits().slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Events Section */}
          {eventAlbums.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-light tracking-tight">Events</h2>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {eventAlbums.map((album, index) => (
                  <Link
                    key={album.id}
                    href={`/events/${album.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-3">
                      <OptimizedImage
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        priority={index < 2}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {album.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Sports Section */}
          {sportsAlbums.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-light tracking-tight">Sports</h2>
                <Link
                  href="/sports"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sportsAlbums.map((album) => (
                  <Link
                    key={album.id}
                    href={`/sports/${album.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-3">
                      <OptimizedImage
                        src={album.coverImage}
                        alt={album.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {album.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Portraits Section */}
          {portraits.length > 0 && (
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-light tracking-tight">Portraits</h2>
                <Link
                  href="/portraits"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portraits.map((portrait, index) => (
                  <div key={index} className="block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <OptimizedImage
                        src={portrait.src}
                        alt={portrait.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
