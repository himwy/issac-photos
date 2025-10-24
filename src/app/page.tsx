import { Header } from "@/components/header"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
