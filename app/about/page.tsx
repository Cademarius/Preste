import { AboutHero } from "@/components/sections/about-hero"
import TeamSection from "@/components/sections/team-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { ValuesSection } from "@/components/sections/values-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <TimelineSection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}
