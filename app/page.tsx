import { HeroSection } from "@/components/sections/hero-section"
import { ImpactZones } from "@/components/sections/impact-zones"
import { ProcessSection } from "@/components/sections/process-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TrustCarousel } from "@/components/sections/trust-carousel"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ImpactZones />
      <ProcessSection />
      <StatsSection />
      <TrustCarousel />
      <CTASection />
    </div>
  )
}
