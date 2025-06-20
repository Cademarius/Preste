import { MessageCircle, Phone, Calendar, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-preste-black to-preste-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
          <MessageCircle className="w-4 h-4 text-preste-orange" />
          <span className="text-preste-orange font-medium">Parlons de votre projet</span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Transformons votre vision
          <span className="text-gradient block mt-2">en réalité</span>
        </h1>

        <p className="text-xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          Vous avez un projet ? Une idée ? Un défi à relever ? Notre équipe d'experts est là pour vous accompagner.
          Choisissez le moyen de contact qui vous convient le mieux.
        </p>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <MessageCircle className="w-8 h-8 text-preste-orange mb-3 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Chat direct</h3>
            <p className="text-white/60 text-sm">Réponse immédiate</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Phone className="w-8 h-8 text-preste-orange mb-3 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Appel</h3>
            <p className="text-white/60 text-sm">+33 1 23 45 67 89</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Calendar className="w-8 h-8 text-preste-orange mb-3 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Rendez-vous</h3>
            <p className="text-white/60 text-sm">Planifier un créneau</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
            <Mail className="w-8 h-8 text-preste-orange mb-3 mx-auto group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-white/60 text-sm">contact@preste.fr</p>
          </div>
        </div>
      </div>
    </section>
  )
}
