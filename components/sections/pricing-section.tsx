import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Zap, Target, Rocket } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Parfait pour les petits projets et les tests",
    price: "1 500€",
    period: "par projet",
    icon: Target,
    features: [
      "1 service au choix",
      "Support par email",
      "Livraison sous 2-3 semaines",
      "1 révision incluse",
      "Documentation complète",
    ],
    popular: false,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Professional",
    description: "L'offre la plus populaire pour les entreprises",
    price: "5 000€",
    period: "par projet",
    icon: Zap,
    features: [
      "Jusqu'à 3 services combinés",
      "Support prioritaire",
      "Livraison sous 4-6 semaines",
      "3 révisions incluses",
      "Formation équipe",
      "Suivi 3 mois offert",
    ],
    popular: true,
    color: "from-preste-orange to-orange-600",
  },
  {
    name: "Enterprise",
    description: "Solution complète pour les grands projets",
    price: "Sur devis",
    period: "projet complexe",
    icon: Rocket,
    features: [
      "Services illimités",
      "Support dédié 24/7",
      "Timeline personnalisée",
      "Révisions illimitées",
      "Formation avancée",
      "Maintenance 1 an",
      "SLA garanti",
    ],
    popular: false,
    color: "from-purple-500 to-purple-700",
  },
]

export function PricingSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Tarification transparente</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Des prix justes pour une <span className="text-gradient">qualité exceptionnelle</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choisissez l'offre qui correspond à vos besoins. Tous nos projets incluent notre expertise IA et notre
            garantie de satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card
                key={index}
                className={`relative border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-preste-orange scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-preste-orange text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Le plus populaire
                    </div>
                  </div>
                )}

                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-preste-orange">{plan.price}</span>
                      {plan.period && <span className="text-white/60 ml-2">/ {plan.period}</span>}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-preste-orange flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full font-semibold ${
                      plan.popular
                        ? "bg-preste-orange hover:bg-orange-600 text-black"
                        : "border-white/30 text-white hover:bg-white/10"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Sur devis" ? "Nous contacter" : "Choisir cette offre"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 mb-4">
            💡 Tous nos projets incluent une garantie satisfaction et un suivi post-livraison
          </p>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Comparer toutes les offres
          </Button>
        </div>
      </div>
    </section>
  )
}
