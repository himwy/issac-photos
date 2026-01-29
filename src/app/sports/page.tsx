import Link from "next/link";
import { Header } from "@/components/header";
import { OptimizedImage } from "@/components/optimized-image";
import { getAlbums } from "@/lib/albums";

export default function SportsPage() {
  const albums = getAlbums("sports");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-3xl font-light tracking-tight mb-4">Sports</h1>
          <p className="text-sm text-muted-foreground mb-12">
            Click on an album to view all photos
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, index) => (
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
                    priority={index < 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {album.title}
                </p>
              </Link>
            ))}
          </div>

          {albums.length === 0 && (
            <p className="text-muted-foreground text-center py-12">
              No sports albums yet.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
