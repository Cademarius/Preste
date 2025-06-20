import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Brain, Palette, TrendingUp, Code } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-preste-black to-preste-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Nos services</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Services à la demande
            <span className="text-gradient block mt-2">augmentés par l'IA</span>
          </h1>

          <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            De l'idée à l'exécution, nous transformons vos besoins en solutions performantes. Chaque service est
            optimisé par notre intelligence artificielle propriétaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg">
              Découvrir nos solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Demander un devis
            </Button>
          </div>
        </div>

        {/* Services Preview Icons */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Brain, label: "IA" },
            { icon: Code, label: "Dev" },
            { icon: Palette, label: "Design" },
            { icon: TrendingUp, label: "Growth" },
            { icon: Target, label: "Strategy" },
            { icon: Zap, label: "Automation" },
          ].map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-preste-orange" />
                </div>
                <p className="text-white/70 text-sm font-medium">{service.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
