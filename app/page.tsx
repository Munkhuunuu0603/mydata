import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RegionsSection } from "@/components/regions-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <NewsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <RegionsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
