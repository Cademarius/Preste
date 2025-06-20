"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "TechCorp - Transformation IA",
    category: "IA & Automatisation",
    client: "TechCorp",
    industry: "SaaS",
    challenge: "Automatiser le support client et réduire les coûts opérationnels",
    solution: "Chatbot IA + automatisation workflow + intégrations CRM",
    results: {
      metric1: { label: "Réduction coûts", value: "-60%" },
      metric2: { label: "Satisfaction client", value: "+45%" },
      metric3: { label: "Temps de réponse", value: "-80%" },
    },
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Chatbot", "Automatisation", "CRM"],
    duration: "6 semaines",
    testimonial: "PRESTE a révolutionné notre support client. Les résultats dépassent nos attentes.",
    author: "Marie Dubois, CEO TechCorp",
  },
  {
    id: 2,
    title: "GrowthCo - Refonte Complète",
    category: "Développement Web",
    client: "GrowthCo",
    industry: "E-commerce",
    challenge: "Site obsolète, faibles conversions, expérience utilisateur défaillante",
    solution: "Refonte complète + optimisation UX + intégration analytics avancés",
    results: {
      metric1: { label: "Conversions", value: "+250%" },
      metric2: { label: "Temps de chargement", value: "-70%" },
      metric3: { label: "Trafic organique", value: "+180%" },
    },
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "E-commerce", "UX/UI"],
    duration: "8 semaines",
    testimonial: "Notre nouveau site génère 3x plus de ventes. Un investissement rentabilisé en 2 mois.",
    author: "Thomas Martin, Directeur Marketing",
  },
  {
    id: 3,
    title: "InnovateLab - Identité Visuelle",
    category: "Design & Branding",
    client: "InnovateLab",
    industry: "Startup Tech",
    challenge: "Créer une identité forte pour se démarquer sur un marché concurrentiel",
    solution: "Identité visuelle complète + site vitrine + supports marketing",
    results: {
      metric1: { label: "Notoriété", value: "+400%" },
      metric2: { label: "Leads qualifiés", value: "+320%" },
      metric3: { label: "Taux d'engagement", value: "+150%" },
    },
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Branding", "Design", "Marketing"],
    duration: "4 semaines",
    testimonial: "Notre nouvelle identité nous a propulsés au niveau des leaders du marché.",
    author: "Sarah Chen, Fondatrice",
  },
]

const categories = ["Tous", "IA & Automatisation", "Développement Web", "Design & Branding", "Croissance"]

export function CaseStudiesGrid() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const filteredCases =
    activeCategory === "Tous" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-preste-orange text-black hover:bg-orange-600"
                  : "border-white/30 text-white hover:bg-white/10 hover:border-preste-orange/50"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredCases.map((study) => (
            <Card
              key={study.id}
              className="group hover:scale-105 transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 overflow-hidden cursor-pointer"
              onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
            >
              <div className="relative">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-preste-orange text-black font-semibold">{study.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-xl text-white">{study.title}</h3>
                  <span className="text-preste-orange text-sm font-medium">{study.duration}</span>
                </div>

                <p className="text-white/70 mb-6 leading-relaxed">{study.challenge}</p>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-preste-orange mb-1">{study.results.metric1.value}</div>
                    <div className="text-white/60 text-xs">{study.results.metric1.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-preste-orange mb-1">{study.results.metric2.value}</div>
                    <div className="text-white/60 text-xs">{study.results.metric2.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-preste-orange mb-1">{study.results.metric3.value}</div>
                    <div className="text-white/60 text-xs">{study.results.metric3.label}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/20 text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Expanded Content */}
                {selectedCase === study.id && (
                  <div className="border-t border-white/10 pt-6 animate-fade-in">
                    <h4 className="font-semibold text-white mb-3">Solution mise en œuvre :</h4>
                    <p className="text-white/70 mb-6">{study.solution}</p>

                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-white/80 italic mb-2">"{study.testimonial}"</p>
                      <p className="text-preste-orange text-sm font-medium">— {study.author}</p>
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full border-preste-orange/30 text-preste-orange hover:bg-preste-orange hover:text-black"
                >
                  {selectedCase === study.id ? "Voir moins" : "Voir le détail"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-preste-orange/10 to-preste-blue/10 p-8 rounded-2xl border border-white/10">
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Votre projet sera notre prochaine réussite
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Chaque client a des défis uniques. Découvrez comment nous pouvons transformer les vôtres en opportunités
              de croissance.
            </p>
            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold px-8 py-3">
              Discuter de mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
