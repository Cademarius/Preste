"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Palette, TrendingUp, Target, Zap, ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceCategories = [
  { id: "all", label: "Tous les services", icon: Target },
  { id: "ai", label: "IA & Automatisation", icon: Brain },
  { id: "dev", label: "Développement", icon: Code },
  { id: "design", label: "Création & Design", icon: Palette },
  { id: "growth", label: "Croissance", icon: TrendingUp },
  { id: "strategy", label: "Stratégie", icon: Zap },
]

const services = [
  {
    id: 1,
    category: "ai",
    title: "Chatbots Intelligents",
    description: "Chatbots conversationnels alimentés par l'IA pour automatiser votre support client et vos ventes.",
    features: ["IA conversationnelle", "Intégration multicanale", "Analytics avancés", "Formation continue"],
    price: "À partir de 2 500€",
    duration: "2-3 semaines",
    icon: Brain,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 2,
    category: "dev",
    title: "Applications Web",
    description: "Développement d'applications web sur mesure avec les dernières technologies.",
    features: ["React/Next.js", "Backend scalable", "Base de données", "Déploiement cloud"],
    price: "À partir de 5 000€",
    duration: "4-8 semaines",
    icon: Code,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    category: "design",
    title: "Identité Visuelle",
    description: "Création d'identité visuelle complète pour marquer les esprits et se démarquer.",
    features: ["Logo & charte", "Supports print", "Assets digitaux", "Guidelines"],
    price: "À partir de 1 500€",
    duration: "2-3 semaines",
    icon: Palette,
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 4,
    category: "growth",
    title: "Optimisation SEO",
    description: "Stratégie SEO complète pour améliorer votre visibilité et générer du trafic qualifié.",
    features: ["Audit technique", "Stratégie contenu", "Link building", "Suivi performances"],
    price: "À partir de 1 200€/mois",
    duration: "3-6 mois",
    icon: TrendingUp,
    color: "from-green-500 to-green-700",
  },
  {
    id: 5,
    category: "ai",
    title: "Automatisation Workflow",
    description: "Automatisation de vos processus métier pour gagner en efficacité et réduire les erreurs.",
    features: ["Analyse processus", "Outils no-code", "Intégrations API", "Formation équipe"],
    price: "À partir de 3 000€",
    duration: "3-4 semaines",
    icon: Zap,
    color: "from-yellow-500 to-yellow-700",
  },
  {
    id: 6,
    category: "dev",
    title: "Applications Mobiles",
    description: "Applications mobiles natives ou cross-platform pour iOS et Android.",
    features: ["React Native", "UI/UX optimisé", "API backend", "Store deployment"],
    price: "À partir de 8 000€",
    duration: "6-10 semaines",
    icon: Code,
    color: "from-indigo-500 to-indigo-700",
  },
]

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {serviceCategories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={cn(
                  "transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-preste-orange text-black hover:bg-orange-600"
                    : "border-white/30 text-white hover:bg-white/10 hover:border-preste-orange/50",
                )}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="group hover:scale-105 transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-preste-orange/30"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${service.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white mb-1">{service.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-preste-orange/30 text-preste-orange text-xs">
                          {service.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-preste-orange flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-preste-orange">{service.price}</span>
                    </div>
                    <Button className="w-full bg-preste-orange hover:bg-orange-600 text-black font-semibold">
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-preste-orange/10 to-preste-blue/10 p-8 rounded-2xl border border-white/10">
            <h3 className="font-display font-bold text-2xl text-white mb-4">Service sur mesure ?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Vous ne trouvez pas exactement ce que vous cherchez ? Parlons de votre projet spécifique et créons une
              solution adaptée à vos besoins.
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
