import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"

export function CaseStudiesHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-preste-black to-preste-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Nos réussites</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Études de cas
            <span className="text-gradient block mt-2">Missions spéciales accomplies</span>
          </h1>

          <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Découvrez comment nous avons transformé les défis de nos clients en succès mesurables. Chaque projet raconte
            une histoire de croissance et d'innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-preste-orange mb-2">+300%</div>
              <div className="text-white/70">ROI moyen généré</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-preste-orange mb-2">150+</div>
              <div className="text-white/70">Projets réussis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-preste-orange mb-2">98%</div>
              <div className="text-white/70">Clients satisfaits</div>
            </div>
          </div>

          <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg">
            Voir toutes nos réalisations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
