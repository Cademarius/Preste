import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Zap } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-preste-black to-preste-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-preste-orange" />
              <span className="text-preste-orange font-medium">Notre différence</span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Nous ne sommes pas une agence
              <span className="text-gradient block mt-2">classique</span>
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              PRESTE est un collectif d'experts freelances augmenté par l'IA. Nous combinons l'agilité du freelancing
              avec la puissance de l'intelligence artificielle pour créer de la croissance mesurable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-preste-orange mb-2">15+</div>
                <div className="text-white/70 text-sm">Experts freelances</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-preste-orange mb-2">5</div>
                <div className="text-white/70 text-sm">Domaines d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-preste-orange mb-2">24/7</div>
                <div className="text-white/70 text-sm">Support IA</div>
              </div>
            </div>

            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold">
              Découvrir notre équipe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-preste-orange" />
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-preste-orange" />
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-preste-orange" />
                </div>
                <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-preste-orange" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display font-semibold text-white mb-2">
                  Élite stratégique de l'exécution numérique
                </h3>
                <p className="text-white/70 text-sm">Freelances + IA + Méthode = Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
