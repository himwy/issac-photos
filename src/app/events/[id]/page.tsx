import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { OptimizedImage } from "@/components/optimized-image";
import { getAlbum, getAlbums } from "@/lib/albums";

export function generateStaticParams() {
  const albums = getAlbums("events");
  return albums.map((album) => ({
    id: album.id,
  }));
}

export default async function EventAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getAlbum("events", id);

  if (!album) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Back link */}
          <Link
            href="/events"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            ← Back to Events
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-light tracking-tight mb-6">
            {album.title}
          </h1>

          {/* Description */}
          <div className="mb-12 max-w-2xl">
            <p className="text-muted-foreground">
              {album.description}
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {album.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden bg-muted"
              >
                <OptimizedImage
                  src={image}
                  alt={`${album.title} - Photo ${index + 1}`}
                  fill
                  priority={index < 6}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
