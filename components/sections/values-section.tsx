import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Users, TrendingUp, Shield, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence opérationnelle",
    description:
      "Chaque projet est exécuté avec une précision millimétrique pour garantir des résultats exceptionnels.",
    color: "from-red-500 to-red-700",
  },
  {
    icon: Zap,
    title: "Innovation permanente",
    description: "Nous intégrons les dernières technologies IA pour rester à la pointe de l'innovation.",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    icon: Users,
    title: "Collaboration humaine",
    description: "L'expertise humaine reste au cœur de notre approche, augmentée par l'intelligence artificielle.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: TrendingUp,
    title: "Croissance mesurable",
    description: "Nous ne livrons pas des prestations, nous créons de la performance quantifiable.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: Shield,
    title: "Fiabilité absolue",
    description: "Respect des délais, qualité garantie et support continu pour votre tranquillité d'esprit.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Lightbulb,
    title: "Vision stratégique",
    description: "Nous pensons au-delà du projet pour construire votre succès à long terme.",
    color: "from-orange-500 to-orange-700",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-preste-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Nos valeurs</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Les piliers de notre <span className="text-gradient">excellence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ces valeurs guident chacune de nos décisions et façonnent notre approche unique de l'exécution numérique.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-4 text-center">{value.title}</h3>
                  <p className="text-white/70 text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
