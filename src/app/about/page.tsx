import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 px-8">
        <div className="max-w-3xl mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>Hi, I'm Isaac - a nig</p>
            <p>Im black</p>
          </div>
        </div>
      </main>
    </div>
  );
}
