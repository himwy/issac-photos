import Image from "next/image"

const galleryImages = [
  {
    src: "/natural-light-portrait.png",
    alt: "Portrait photography",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "/modern-building-architecture.png",
    alt: "Architecture",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/urban-street-scene.png",
    alt: "Street photography",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/nature-photography-forest-landscape.jpg",
    alt: "Nature",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/coastal-landscape-photography-sunset.jpg",
    alt: "Coastal landscape",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/bw-portrait.png",
    alt: "Black and white portrait",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/travel-photography-exotic-location.jpg",
    alt: "Travel photography",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/abstract-fine-art.png",
    alt: "Fine art",
    className: "md:col-span-1 md:row-span-2",
  },
]

export function Gallery() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-balance">Portfolio</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A curated collection of visual narratives from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div key={index} className={`relative overflow-hidden group cursor-pointer ${image.className}`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
