"use client"

/**
 * Process section with mobile-optimized timeline
 * Maintains desktop visual effects on all screen sizes
 */
import { useState } from "react"
import { MobileCard } from "@/components/ui/mobile-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { MessageSquare, Search, Lightbulb, Code, Rocket, BarChart, ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Écoute & Analyse",
    description: "Nous analysons vos besoins, vos objectifs et votre contexte pour comprendre les enjeux réels.",
    duration: "1-2 jours",
    deliverables: ["Brief détaillé", "Analyse concurrentielle", "Recommandations stratégiques"],
  },
  {
    id: 2,
    icon: Search,
    title: "Audit & Diagnostic",
    description: "Diagnostic complet de votre écosystème digital pour identifier les opportunités d'amélioration.",
    duration: "2-3 jours",
    deliverables: ["Audit technique", "Analyse UX/UI", "Plan d'optimisation"],
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Stratégie & Conception",
    description: "Élaboration de la stratégie et conception des solutions adaptées à vos objectifs.",
    duration: "3-5 jours",
    deliverables: ["Stratégie digitale", "Wireframes", "Prototypes interactifs"],
  },
  {
    id: 4,
    icon: Code,
    title: "Développement & Création",
    description: "Développement technique et création des contenus avec notre équipe d'experts.",
    duration: "1-4 semaines",
    deliverables: ["Développement", "Intégrations", "Tests qualité"],
  },
  {
    id: 5,
    icon: Rocket,
    title: "Lancement & Déploiement",
    description: "Mise en ligne, formation et accompagnement pour un lancement réussi.",
    duration: "2-3 jours",
    deliverables: ["Déploiement", "Formation équipe", "Documentation"],
  },
  {
    id: 6,
    icon: BarChart,
    title: "Suivi & Optimisation",
    description: "Monitoring des performances et optimisations continues pour maximiser les résultats.",
    duration: "Continu",
    deliverables: ["Rapports mensuels", "Optimisations", "Support technique"],
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1)

  return (
    <SectionContainer background="gradient">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 bg-preste-blue/20 px-4 py-2 rounded-full mb-6">
          <CheckCircle className="w-4 h-4 text-preste-orange" />
          <span className="text-preste-orange font-medium">Notre méthode</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          Un processus d'exécution <span className="text-gradient">millimétré</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
          De l'idée à la performance, chaque étape est pensée pour maximiser vos résultats. Découvrez notre approche
          structurée et nos livrables à chaque phase.
        </p>
      </div>

      {/* Process Timeline - Mobile-first with desktop effects */}
      <div className="relative">
        {/* Timeline Line - Responsive */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-preste-orange via-preste-blue to-preste-orange hidden sm:block"></div>

        {/* Process Steps */}
        <div className="space-y-6 sm:space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === step.id
            const isCompleted = activeStep > step.id

            return (
              <div
                key={step.id}
                className={cn("relative flex items-start space-x-4 sm:space-x-8 group cursor-pointer", "sm:ml-16")}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Step Icon - Mobile and Desktop */}
                <div
                  className={cn(
                    "absolute -left-4 sm:-left-16 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300",
                    "sm:flex", // Always visible on mobile, conditional on desktop
                    isActive && "ring-4 ring-preste-orange/30 scale-110",
                    isCompleted ? "bg-preste-orange" : "bg-preste-blue",
                    !isActive && !isCompleted && "bg-white/10",
                  )}
                >
                  <Icon
                    className={cn("w-5 h-5 sm:w-8 sm:h-8 transition-colors", isCompleted ? "text-black" : "text-white")}
                  />
                </div>

                {/* Step Content */}
                <MobileCard
                  className={cn(
                    "flex-1 transition-all duration-300",
                    isActive && "bg-white/10 border-preste-orange/30 shadow-2xl",
                  )}
                  hover={false}
                >
                  <div className="flex items-start justify-between mb-4 flex-col sm:flex-row gap-4 sm:gap-0">
                    {/* Mobile Icon */}
                    <div className="flex items-center space-x-4 sm:hidden">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          isCompleted ? "bg-preste-orange" : "bg-preste-blue",
                        )}
                      >
                        <Icon className={cn("w-6 h-6", isCompleted ? "text-black" : "text-white")} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2 flex-col sm:flex-row gap-2 sm:gap-0">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{step.title}</h3>
                        <span className="text-preste-orange font-medium text-sm bg-preste-orange/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">{step.description}</p>
                    </div>
                  </div>

                  {/* Deliverables - Mobile optimized */}
                  <div
                    className={cn(
                      "transition-all duration-500 overflow-hidden",
                      isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="border-t border-white/10 pt-6">
                      <h4 className="font-semibold text-white mb-4">Livrables :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-preste-orange flex-shrink-0" />
                            <span className="text-white/80 text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-preste-orange/30 text-preste-orange hover:bg-preste-orange hover:text-black"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </MobileCard>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 sm:mt-16">
        <div className="bg-gradient-to-r from-preste-orange/10 to-preste-blue/10 p-6 sm:p-8 rounded-2xl border border-white/10">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">Prêt à démarrer votre projet ?</h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Chaque projet est unique. Parlons de vos besoins spécifiques et définissons ensemble la meilleure approche
            pour atteindre vos objectifs.
          </p>
          <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold px-6 sm:px-8 py-3">
            Planifier un appel stratégique
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
