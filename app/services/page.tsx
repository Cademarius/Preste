import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ServiceProcess } from "@/components/sections/service-process"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      {/* <PricingSection /> */}
    </div>
  )
}
