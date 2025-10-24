import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image src="/dramatic-landscape-photography-with-mountains-and-.jpg" alt="Hero image" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="font-serif text-6xl md:text-8xl font-light mb-6 text-balance">Visual Stories</h1>
        <p className="text-lg md:text-xl tracking-wide max-w-2xl mx-auto text-pretty">
          Capturing moments that transcend time through the art of photography
        </p>
      </div>
    </section>
  )
}
