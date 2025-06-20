import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Brain, Code, Palette, TrendingUp, ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Lead IA & Automatisation",
    expertise: ["Machine Learning", "Automatisation", "Chatbots"],
    icon: Brain,
    description: "Experte en IA avec 8 ans d'expérience dans l'automatisation des processus métier.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "8 ans",
    projects: "50+",
  },
  {
    name: "Marc Dubois",
    role: "Architecte Solutions",
    expertise: ["Full-Stack", "Cloud", "DevOps"],
    icon: Code,
    description: "Développeur senior spécialisé dans les architectures scalables et performantes.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "10 ans",
    projects: "75+",
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    expertise: ["UI/UX", "Branding", "Vidéo"],
    icon: Palette,
    description: "Designer créative avec une approche centrée utilisateur et une vision artistique unique.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "7 ans",
    projects: "60+",
  },
  {
    name: "Thomas Martin",
    role: "Growth Strategist",
    expertise: ["SEO", "Analytics", "Conversion"],
    icon: TrendingUp,
    description: "Spécialiste en croissance digitale avec un track record de +300% ROI moyen.",
    image: "/placeholder.svg?height=120&width=120",
    experience: "9 ans",
    projects: "40+",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-blue/20 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Notre équipe</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Collectif freelance <span className="text-gradient">+ IA + méthode</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Une équipe d'experts freelances sélectionnés pour leur excellence, augmentée par nos outils IA propriétaires
            et notre méthodologie éprouvée.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const Icon = member.icon

            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-preste-orange/30 group-hover:border-preste-orange transition-colors"
                      />
                      <div className="absolute -bottom-2 -right-2 p-2 bg-gradient-to-br from-preste-orange/20 to-preste-blue/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-preste-orange" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-white mb-1">{member.name}</h3>
                      <p className="text-preste-orange font-medium mb-3">{member.role}</p>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-white/60">
                        <span>{member.experience} d'expérience</span>
                        <span>•</span>
                        <span>{member.projects} projets</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-white/20 text-white/80 hover:border-preste-orange/40 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* PRESTE Dashboard Mockup */}
        <div className="bg-gradient-to-br from-preste-orange/10 to-preste-blue/10 rounded-2xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-white mb-4">PRESTE en action</h3>
            <p className="text-white/70">Interface de gestion de projet augmentée par l'IA</p>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-black/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white font-medium text-sm">Projets actifs</span>
                </div>
                <div className="text-2xl font-bold text-white">12</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-preste-orange rounded-full"></div>
                  <span className="text-white font-medium text-sm">IA en cours</span>
                </div>
                <div className="text-2xl font-bold text-white">8</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-white font-medium text-sm">Experts mobilisés</span>
                </div>
                <div className="text-2xl font-bold text-white">15</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold">
              Rejoindre l'équipe PRESTE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
