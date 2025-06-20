"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const timelineSteps = [
  {
    year: "2020",
    title: "Genèse du concept",
    description: "Identification du besoin d'une nouvelle approche alliant expertise humaine et IA.",
    achievements: ["Première équipe de 3 freelances", "Premiers outils IA intégrés"],
  },
  {
    year: "2021",
    title: "Structuration de l'offre",
    description: "Développement de notre méthodologie unique et expansion de l'équipe.",
    achievements: ["10 experts recrutés", "Processus standardisé", "50 premiers clients"],
  },
  {
    year: "2022",
    title: "Croissance et innovation",
    description: "Intégration massive de l'IA dans nos processus et diversification des services.",
    achievements: ["IA propriétaire développée", "100+ projets livrés", "Expansion européenne"],
  },
  {
    year: "2023",
    title: "Leadership du marché",
    description: "Reconnaissance comme référence dans l'exécution numérique augmentée par l'IA.",
    achievements: ["15+ experts certifiés", "98% satisfaction client", "Partenariats stratégiques"],
  },
  {
    year: "2024",
    title: "Vision futuriste",
    description: "Développement de solutions prédictives et expansion vers de nouveaux marchés.",
    achievements: ["IA prédictive", "Automatisations avancées", "Croissance internationale"],
  },
]

export function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-blue/20 px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Notre évolution</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Une timeline dynamique du <span className="text-gradient">processus d'innovation</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            De l'idée révolutionnaire à l'exécution d'élite, découvrez comment PRESTE a révolutionné l'approche de
            l'exécution numérique.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-preste-orange via-preste-blue to-preste-orange hidden md:block"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-8 md:ml-16">
                {/* Year Badge */}
                <div className="absolute -left-16 w-16 h-16 bg-gradient-to-br from-preste-orange to-orange-600 rounded-full flex items-center justify-center font-display font-bold text-black text-sm hidden md:flex">
                  {step.year}
                </div>

                {/* Content Card */}
                <Card className="flex-1 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4 md:hidden">
                      <div className="w-12 h-12 bg-gradient-to-br from-preste-orange to-orange-600 rounded-full flex items-center justify-center font-display font-bold text-black text-sm">
                        {step.year}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{step.description}</p>

                    {/* Achievements */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {step.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-preste-orange flex-shrink-0" />
                          <span className="text-white/80 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
