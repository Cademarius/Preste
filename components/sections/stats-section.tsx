"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Clock, Award, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: 150,
    suffix: "+",
    label: "Projets livrés",
    description: "Sites web, apps, automatisations",
    color: "text-green-400",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Satisfaction client",
    description: "Taux de recommandation",
    color: "text-blue-400",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "h",
    label: "Temps de réponse",
    description: "Réactivité garantie",
    color: "text-preste-orange",
  },
  {
    icon: Award,
    value: 5,
    suffix: "★",
    label: "Note moyenne",
    description: "Évaluation clients",
    color: "text-yellow-400",
  },
  {
    icon: Target,
    value: 300,
    suffix: "%",
    label: "ROI moyen",
    description: "Retour sur investissement",
    color: "text-purple-400",
  },
  {
    icon: Zap,
    value: 48,
    suffix: "h",
    label: "Délai de démarrage",
    description: "Lancement projet",
    color: "text-pink-400",
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count}</span>
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-preste-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Performance mesurée</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Chaque chiffre raconte une histoire de succès. Découvrez l'impact concret de notre approche sur la
            croissance de nos clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-preste-orange/30"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter value={stat.value} />
                      <span className={stat.color}>{stat.suffix}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-white mb-2">{stat.label}</h3>
                    <p className="text-white/60 text-sm">{stat.description}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-preste-orange to-orange-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.min((stat.value / (stat.suffix === "%" ? 100 : stat.value)) * 100, 100)}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-preste-blue/20 to-preste-orange/20 p-8 rounded-2xl border border-white/10">
            <h3 className="font-display font-bold text-2xl text-white mb-4">Votre projet mérite ces résultats</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Rejoignez nos clients qui ont transformé leur vision en performance mesurable. Chaque statistique
              représente un succès partagé.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
