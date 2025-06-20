import Link from "next/link"
import { Zap, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-preste-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-preste-orange to-orange-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="font-display font-bold text-xl text-white">PRESTE</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Agence de freelances augmentée par l'IA. Nous ne livrons pas des prestations, nous créons de la croissance
              mesurable.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-white/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@preste.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-preste-orange transition-colors">
                  IA & Automatisation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-preste-orange transition-colors">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-preste-orange transition-colors">
                  Applications Mobiles
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-preste-orange transition-colors">
                  Création Vidéo
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-preste-orange transition-colors">
                  Optimisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-preste-orange transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-preste-orange transition-colors">
                  Études de cas
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-preste-orange transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-preste-orange transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} PRESTE. Tous droits réservés.</p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">Élite stratégique de l'exécution numérique</p>
        </div>
      </div>
    </footer>
  )
}
