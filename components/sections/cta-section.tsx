import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar, Phone, Sparkles, Target } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-preste-black via-black to-preste-blue relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-preste-orange/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-preste-blue/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-preste-orange" />
            <span className="text-preste-orange font-semibold">Prêt pour l'excellence ?</span>
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-8 leading-tight">
            Transformons votre vision en
            <span className="text-gradient block mt-3">performance mesurable</span>
          </h2>

          <p className="text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Vous avez un projet ambitieux ? Une vision à concrétiser ? Un défi à relever ?<br />
            <span className="text-preste-orange font-semibold">Parlons-en et créons ensemble votre succès.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
           <Link href="/get-quote">
            <Button
              size="lg"
              className="bg-preste-orange hover:bg-orange-600 text-black font-bold px-10 py-5 text-xl group glow-orange transition-all duration-300 shadow-2xl"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Parlez-nous de votre besoin
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-preste-orange/60 px-10 py-5 text-xl transition-all duration-300"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Planifier un appel stratégique
            </Button>
          </div>

          <p className="text-white/60 text-lg">
            <Target className="inline w-5 h-5 mr-2 text-preste-orange" />
            Premier échange gratuit • Réponse sous 24h • Devis personnalisé
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-preste-orange/40 transition-all duration-300 group">
            <MessageCircle className="w-12 h-12 text-preste-orange mb-6 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-xl text-white mb-3">Chat direct</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Réponse immédiate à vos questions. Notre équipe est disponible pour vous accompagner.
            </p>
            <Button
              variant="outline"
              className="border-preste-orange/40 text-preste-orange hover:bg-preste-orange hover:text-black font-semibold w-full"
            >
              Démarrer le chat
            </Button>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-preste-orange/40 transition-all duration-300 group">
            <Phone className="w-12 h-12 text-preste-orange mb-6 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-xl text-white mb-3">Appel stratégique</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              30 minutes pour analyser votre projet et définir la stratégie gagnante.
            </p>
            <Button
              variant="outline"
              className="border-preste-orange/40 text-preste-orange hover:bg-preste-orange hover:text-black font-semibold w-full"
            >
              Réserver un créneau
            </Button>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-preste-orange/40 transition-all duration-300 group">
            <Calendar className="w-12 h-12 text-preste-orange mb-6 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-xl text-white mb-3">Audit gratuit</h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Analyse complète de votre situation et recommandations personnalisées.
            </p>
            <Button
              variant="outline"
              className="border-preste-orange/40 text-preste-orange hover:bg-preste-orange hover:text-black font-semibold w-full"
            >
              Demander un audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
