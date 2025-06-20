import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Search, Lightbulb, Code, Rocket, BarChart } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Briefing",
    description: "Analyse de vos besoins et définition des objectifs",
    duration: "1 jour",
  },
  {
    icon: Search,
    title: "Audit",
    description: "Diagnostic de l'existant et identification des opportunités",
    duration: "2-3 jours",
  },
  {
    icon: Lightbulb,
    title: "Stratégie",
    description: "Conception de la solution optimale avec notre IA",
    duration: "3-5 jours",
  },
  {
    icon: Code,
    title: "Exécution",
    description: "Développement et création par nos experts",
    duration: "1-8 semaines",
  },
  {
    icon: Rocket,
    title: "Lancement",
    description: "Déploiement et formation de vos équipes",
    duration: "2-3 jours",
  },
  {
    icon: BarChart,
    title: "Optimisation",
    description: "Suivi des performances et améliorations continues",
    duration: "Continu",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-preste-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            PRESTE en action : <span className="text-gradient">notre méthode</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Un processus rodé qui combine expertise humaine et intelligence artificielle pour des résultats
            exceptionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-preste-orange" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-preste-orange rounded-full flex items-center justify-center text-black text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{step.description}</p>
                  <div className="text-preste-orange font-medium text-sm bg-preste-orange/10 px-3 py-1 rounded-full inline-block">
                    {step.duration}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
