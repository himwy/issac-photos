import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Gallery />
      </main>
    </div>
  );
}
