/**
 * Simple sidebar to reassure visitors about the quote workflow.
 * Visible on desktop (hidden on smaller screens for simplicity).
 */

import { Calculator, Clock, CheckCircle } from "lucide-react"

export function GetQuoteProcess() {
  return (
    <aside className="hidden lg:block bg-preste-black border-l border-white/10 p-8 space-y-10 sticky top-24">
      {[
        {
          icon: Calculator,
          title: "Analyse rapide",
          text: "Nous examinons votre demande dès réception.",
        },
        { icon: Clock, title: "Réponse 24h", text: "Vous recevez un devis détaillé sous 24 heures." },
        {
          icon: CheckCircle,
          title: "Proposition précise",
          text: "Solutions adaptées à vos objectifs et votre budget.",
        },
      ].map((step, i) => {
        const Icon = step.icon
        return (
          <div key={i} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-preste-orange/20 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-preste-orange" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-white/70 text-sm">{step.text}</p>
            </div>
          </div>
        )
      })}
    </aside>
  )
}
