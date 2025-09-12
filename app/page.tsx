import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CareerToolsSection } from "@/components/career-tools-section"
import { FoundersSection } from "@/components/founders-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CareerToolsSection />
      <FoundersSection />
      <Footer />
    </main>
  )
}
