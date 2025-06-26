import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Brain, Code, Palette, TrendingUp, ArrowRight, Star, Award, Zap } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Lead IA & Automatisation",
    expertise: ["Machine Learning", "Automatisation", "Chatbots"],
    icon: Brain,
    description: "Experte en IA avec 8 ans d'expérience dans l'automatisation des processus métier. Spécialisée dans l'implémentation de solutions d'IA conversationnelle et d'apprentissage automatique.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "8 ans",
    projects: "50+",
    rating: 4.9,
    specialties: ["OpenAI GPT", "TensorFlow", "Process Mining"]
  },
  {
    name: "Marc Dubois",
    role: "Architecte Solutions",
    expertise: ["Full-Stack", "Cloud", "DevOps"],
    icon: Code,
    description: "Développeur senior spécialisé dans les architectures scalables et performantes. Expert en microservices et infrastructure cloud native avec une approche DevOps complète.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "10 ans",
    projects: "75+",
    rating: 4.8,
    specialties: ["AWS", "Kubernetes", "React/Node.js"]
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    expertise: ["UI/UX", "Branding", "Vidéo"],
    icon: Palette,
    description: "Designer créative avec une approche centrée utilisateur et une vision artistique unique. Experte en design systems et en création d'expériences utilisateur mémorables.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "7 ans",
    projects: "60+",
    rating: 4.9,
    specialties: ["Figma", "After Effects", "Design Systems"]
  },
  {
    name: "Thomas Martin",
    role: "Growth Strategist",
    expertise: ["SEO", "Analytics", "Conversion"],
    icon: TrendingUp,
    description: "Spécialiste en croissance digitale avec un track record de +300% ROI moyen. Expert en optimisation de conversion et stratégies d'acquisition multicanales.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "9 ans",
    projects: "40+",
    rating: 4.7,
    specialties: ["Google Analytics", "A/B Testing", "Growth Hacking"]
  },
]

const stats = [
  { label: "Projets actifs", value: "12", color: "bg-green-400", trend: "+2 ce mois" },
  { label: "IA en cours", value: "8", color: "bg-preste-orange", trend: "24/7 actif" },
  { label: "Experts mobilisés", value: "15", color: "bg-blue-400", trend: "+3 cette semaine" },
  { label: "Satisfaction client", value: "98%", color: "bg-purple-400", trend: "↗ +2%" }
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-preste-orange/5 via-transparent to-preste-blue/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-preste-orange/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-preste-blue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-preste-blue/20 to-preste-orange/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/10">
            <Users className="w-5 h-5 text-preste-orange" />
            <span className="text-preste-orange font-semibold">Notre équipe d'élite</span>
            <Award className="w-4 h-4 text-preste-orange ml-2" />
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-white mb-8 leading-tight">
            Collectif freelance 
            <span className="block text-transparent bg-gradient-to-r from-preste-orange via-orange-400 to-preste-blue bg-clip-text">
              + IA + méthode
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Une équipe d'experts freelances rigoureusement sélectionnés pour leur excellence, 
            augmentée par nos outils IA propriétaires et notre méthodologie éprouvée sur plus de 200 projets.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {teamMembers.map((member, index) => {
            const Icon = member.icon

            return (
              <Card
                key={index}
                className="group hover:scale-[1.02] transition-all duration-500 border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-sm hover:from-white/10 hover:to-white/15 hover:shadow-2xl hover:shadow-preste-orange/10"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 p-1 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-preste-orange to-orange-600 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-display font-bold text-2xl text-white">{member.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 font-semibold text-sm">{member.rating}</span>
                        </div>
                      </div>
                      <p className="text-preste-orange font-semibold text-lg mb-4">{member.role}</p>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-white/70">
                        <span className="flex items-center space-x-1">
                          <Zap className="w-4 h-4" />
                          <span>{member.experience} d'expérience</span>
                        </span>
                        <span>•</span>
                        <span>{member.projects} projets</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-preste-orange/30 text-white/90 hover:border-preste-orange hover:bg-preste-orange/10 transition-all duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-xs text-white/60 mb-3">
                        <strong>Spécialités:</strong> {member.specialties.join(" • ")}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* PRESTE Dashboard Mockup */}
        <div className="bg-gradient-to-br from-preste-orange/10 via-transparent to-preste-blue/10 rounded-3xl p-10 border border-white/20 backdrop-blur-sm shadow-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-medium">Live Dashboard</span>
            </div>
            <h3 className="font-display font-bold text-3xl text-white mb-4">PRESTE en action</h3>
            <p className="text-white/70 text-lg">Interface de gestion de projet augmentée par l'IA - Données en temps réel</p>
          </div>

          {/* Enhanced Dashboard Mockup */}
          <div className="bg-black/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-4 h-4 ${stat.color} rounded-full shadow-lg`}></div>
                    <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{stat.trend}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Button className="bg-gradient-to-r from-preste-orange to-orange-600 hover:from-orange-600 hover:to-preste-orange text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Rejoindre l'équipe PRESTE
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <p className="text-white/60 text-sm mt-4">Candidature sélective • Processus en 3 étapes</p>
          </div>
        </div>
      </div>
    </section>
  )
}