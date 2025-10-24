import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/photographer-portrait.png" alt="Issac - Photographer" fill className="object-cover" />
          </div>

          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-8 text-balance">About Issac</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-pretty">
                With over a decade of experience capturing the world through a lens, I specialize in creating visual
                stories that resonate with emotion and authenticity.
              </p>
              <p className="text-pretty">
                My work spans portrait, landscape, and documentary photography, always seeking to find the extraordinary
                in the ordinary. Each photograph is a moment frozen in time, a story waiting to be told.
              </p>
              <p className="text-pretty">
                Based between New York and Los Angeles, I work with clients worldwide to create compelling imagery that
                stands the test of time.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-serif font-light mb-2">10+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-light mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-light mb-2">50+</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
