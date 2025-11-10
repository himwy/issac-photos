import Image from "next/image"

const galleryImages = [
  {
    src: "/151282870_279362036943215_3719612046074592655_n.jpg",
    alt: "Photography by Issac",
    title: "Sony | Xperia 1 IV",
  },
  {
    src: "/156933532_3005140933053761_3824277203160191609_n.jpg",
    alt: "Photography by Issac",
    title: "The Glenlivet Whisky | Live It Your Way",
  },
  {
    src: "/242700730_6860584743967463_7123456007017545912_n.jpg",
    alt: "Photography by Issac",
    title: "Urban Moments",
  },
  {
    src: "/271158610_433179525106551_6511624179951098499_n.jpg",
    alt: "Photography by Issac",
    title: "Forest Path",
  },
  {
    src: "/275862324_2238518342990528_1227914083198531739_n.jpg",
    alt: "Photography by Issac",
    title: "Ocean View",
  },
  {
    src: "/289843531_1403540240160855_826828221484257912_n.jpg",
    alt: "Photography by Issac",
    title: "Portrait Study",
  },
  {
    src: "/290862117_180128864413640_6912065550714558846_n.jpg",
    alt: "Photography by Issac",
    title: "City Lights",
  },
  {
    src: "/482396874_18092416996559460_3582282048323521415_n.jpg",
    alt: "Photography by Issac",
    title: "Golden Hour",
  },
  {
    src: "/482602989_18092417005559460_3044302889215439367_n.jpg",
    alt: "Photography by Issac",
    title: "Street Life",
  },
  {
    src: "/75358238_683398045525061_8078707450716699707_n.jpg",
    alt: "Photography by Issac",
    title: "Natural Light",
  },
  {
    src: "/79646658_2492715027637769_7710395344314259670_n.jpg",
    alt: "Photography by Issac",
    title: "Winter Scene",
  },
  {
    src: "/85211282_1252164821639617_3698328384216900727_n.jpg",
    alt: "Photography by Issac",
    title: "Mood & Tone",
  },
]

export function Gallery() {
  return (
    <section className="px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-muted mb-3">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm">Placeholder</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
