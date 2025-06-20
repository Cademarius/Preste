import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Mail, Phone, MessageCircle, Calendar } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-preste-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Contact Direct */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">Contact direct</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-preste-orange/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-preste-orange" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Téléphone</p>
                    <p className="text-white/70">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-preste-orange/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-preste-orange" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">contact@preste.fr</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-preste-orange/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-preste-orange" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Adresse</p>
                    <p className="text-white/70">
                      Paris, France
                      <br />
                      Remote-first
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-preste-orange/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-preste-orange" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horaires</p>
                    <p className="text-white/70">
                      Lun-Ven: 9h-18h
                      <br />
                      Support 24/7
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">Actions rapides</h3>

              <div className="space-y-4">
                <Button className="w-full bg-preste-orange hover:bg-orange-600 text-black font-semibold justify-start">
                  <MessageCircle className="mr-3 w-5 h-5" />
                  Démarrer un chat
                </Button>

                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 justify-start">
                  <Calendar className="mr-3 w-5 h-5" />
                  Planifier un appel
                </Button>

                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 justify-start">
                  <Mail className="mr-3 w-5 h-5" />
                  Demander un audit gratuit
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="font-display font-bold text-xl text-white mb-6">Questions fréquentes</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Quel est votre délai de réponse ?</h4>
                  <p className="text-white/70 text-sm">Nous répondons sous 24h maximum, souvent dans l'heure.</p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">Proposez-vous un audit gratuit ?</h4>
                  <p className="text-white/70 text-sm">
                    Oui, nous offrons un audit gratuit de 30 minutes pour analyser vos besoins.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">Travaillez-vous avec des startups ?</h4>
                  <p className="text-white/70 text-sm">
                    Absolument ! Nous accompagnons des startups aux grandes entreprises.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
