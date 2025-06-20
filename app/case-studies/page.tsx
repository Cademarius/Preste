import { CaseStudiesHero } from "@/components/sections/case-studies-hero"
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-16">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <TestimonialsSection />
    </div>
  )
}
