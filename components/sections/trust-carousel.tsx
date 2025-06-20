"use client"

/**
 * Infinite scrolling carousel for trusted companies
 * Pure CSS animation for smooth performance
 * Mobile-first responsive design
 */
import { SectionContainer } from "@/components/ui/section-container"

// Placeholder company logos - will be replaced with real logos
const trustedCompanies = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120" },
  { name: "GrowthCo", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DigitalFirst", logo: "/placeholder.svg?height=60&width=120" },
  { name: "FutureScale", logo: "/placeholder.svg?height=60&width=120" },
  { name: "NextGen", logo: "/placeholder.svg?height=60&width=120" },
  { name: "CloudTech", logo: "/placeholder.svg?height=60&width=120" },
  { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120" },
]

export function TrustCarousel() {
  // Duplicate array for seamless loop
  const duplicatedCompanies = [...trustedCompanies, ...trustedCompanies]

  return (
    <SectionContainer size="sm" background="dark" className="border-t border-white/10">
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-white/60 text-base sm:text-lg mb-8">Ils nous font confiance</p>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 flex items-center justify-center"
              >
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  className="h-8 sm:h-12 lg:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
