"use client"

/**
 * Impact zones section with mobile-first responsive design
 * Interactive cards with proper navigation to service pages
 */
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileCard } from "@/components/ui/mobile-card"
import { ResponsiveGrid } from "@/components/ui/responsive-grid"
import { SectionContainer } from "@/components/ui/section-container"
import { Brain, Palette, TrendingUp, ArrowRight, Zap, Target, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const impactZones = [
  {
    id: "ai",
    slug: "ia-automatisation",
    icon: Brain,
    title: "IA & Automatisation",
    description: "Chatbots intelligents, automatisations sur mesure, intégrations IA pour optimiser vos processus.",
    features: ["Chatbots conversationnels", "Automatisation workflow", "Analyse prédictive", "Intégrations API"],
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-500/10",
  },
  {
    id: "creation",
    slug: "creation-design",
    icon: Palette,
    title: "Création & Design",
    description: "Sites web, applications, vidéos, branding. Création visuelle qui convertit et engage.",
    features: ["Sites web sur mesure", "Applications mobiles", "Vidéos marketing", "Identité visuelle"],
    color: "from-pink-500 to-pink-700",
    bgColor: "bg-pink-500/10",
  },
  {
    id: "optimization",
    slug: "optimisation",
    icon: TrendingUp,
    title: "Optimisation",
    description: "SEO, performance, conversions. Nous optimisons chaque aspect pour maximiser vos résultats.",
    features: ["SEO technique", "Optimisation conversions", "Performance web", "Analytics avancés"],
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-500/10",
  },
  {
    id: "strategy",
    slug: "strategie-digitale",
    icon: Target,
    title: "Stratégie Digitale",
    description: "Conseil stratégique, audit, roadmap. Nous définissons la voie vers vos objectifs.",
    features: ["Audit digital", "Stratégie omnicanale", "Roadmap produit", "Conseil expert"],
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-500/10",
  },
]

export function ImpactZones() {
  const [activeZone, setActiveZone] = useState<string | null>(null)

  return (
    <SectionContainer background="gradient">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4 text-preste-orange" />
          <span className="text-preste-orange font-medium">Nos zones d'impact</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          PRESTE s'explore plus qu'il ne se lit
        </h2>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
          Découvrez nos domaines d'expertise. Chaque zone représente un univers de solutions pour transformer votre
          vision en performance mesurable.
        </p>
      </div>

      {/* Impact Zones Grid - Mobile-first */}
      <ResponsiveGrid cols={{ mobile: 1, tablet: 2, desktop: 2 }} gap="lg" className="mb-12 sm:mb-16">
        {impactZones.map((zone) => {
          const Icon = zone.icon
          const isActive = activeZone === zone.id

          return (
            <MobileCard
              key={zone.id}
              className={cn(
                "cursor-pointer transition-all duration-500",
                isActive && "ring-2 ring-preste-orange scale-105",
              )}
              onMouseEnter={() => setActiveZone(zone.id)}
              onMouseLeave={() => setActiveZone(null)}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={cn(
                    "p-3 rounded-xl transition-all duration-300 flex-shrink-0",
                    zone.bgColor,
                    isActive && "scale-110",
                  )}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">{zone.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">{zone.description}</p>
                </div>
              </div>

              {/* Features List - Mobile optimized */}
              <div
                className={cn(
                  "transition-all duration-500 overflow-hidden",
                  isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {zone.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-preste-orange rounded-full flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/services#${zone.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-preste-orange/30 text-preste-orange hover:bg-preste-orange hover:text-black"
                  >
                    Explorer cette zone
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </MobileCard>
          )
        })}
      </ResponsiveGrid>

      {/* Bottom CTA */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-preste-orange/10 to-preste-blue/10 p-6 sm:p-8 rounded-2xl border border-white/10">
          <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-preste-orange animate-float flex-shrink-0" />
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">
              Prêt à transformer votre vision ?
            </h3>
            <p className="text-white/70 text-sm sm:text-base">
              Parlons de votre projet et définissons ensemble la stratégie gagnante.
            </p>
          </div>
          <Link href="/get-quote">
            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold whitespace-nowrap">
              Démarrer maintenant
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  )
}
