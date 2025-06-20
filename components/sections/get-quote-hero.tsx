/**
 * Hero section for quote requests
 * Focused on project requirements and expectations
 */
import { SectionContainer } from "@/components/ui/section-container"
import { Calculator, Clock, CheckCircle } from "lucide-react"

export function GetQuoteHero() {
  return (
    <SectionContainer background="gradient" size="md">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
          <Calculator className="w-4 h-4 text-preste-orange" />
          <span className="text-preste-orange font-medium">Devis personnalisé</span>
        </div>

        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
          Parlez-nous de votre
          <span className="text-gradient block mt-2">besoin</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Décrivez votre projet en détail et recevez un devis personnalisé sous 24h. Notre équipe analysera vos besoins
          pour vous proposer la solution optimale.
        </p>

        {/* Process indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-preste-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calculator className="w-6 h-6 text-preste-orange" />
            </div>
            <h3 className="font-semibold text-white mb-1">1. Décrivez</h3>
            <p className="text-white/60 text-sm">Votre projet en détail</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-preste-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-preste-orange" />
            </div>
            <h3 className="font-semibold text-white mb-1">2. Analysons</h3>
            <p className="text-white/60 text-sm">Vos besoins sous 24h</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-preste-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-preste-orange" />
            </div>
            <h3 className="font-semibold text-white mb-1">3. Proposons</h3>
            <p className="text-white/60 text-sm">Une solution sur mesure</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
