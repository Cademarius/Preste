"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "CEO",
    company: "TechCorp",
    content:
      "PRESTE a révolutionné notre support client avec leur chatbot IA. Nous avons réduit nos coûts de 60% tout en améliorant la satisfaction client de 45%. Une transformation remarquable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    results: "ROI de 300% en 6 mois",
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Directeur Marketing",
    company: "GrowthCo",
    content:
      "Notre nouveau site e-commerce génère 3 fois plus de ventes qu'avant. L'équipe PRESTE a su allier design moderne et performance technique. Un investissement rentabilisé en 2 mois.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    results: "+250% de conversions",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Fondatrice",
    company: "InnovateLab",
    content:
      "L'identité visuelle créée par PRESTE nous a propulsés au niveau des leaders du marché. Notre notoriété a augmenté de 400% et nous générons 3x plus de leads qualifiés.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    results: "+400% de notoriété",
  },
  {
    id: 4,
    name: "Lucas Rodriguez",
    role: "CTO",
    company: "DataFlow",
    content:
      "L'automatisation de nos workflows par PRESTE nous fait gagner 20h par semaine. Leur approche technique est impressionnante et leur suivi irréprochable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    results: "20h économisées/semaine",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-preste-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-preste-orange/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-preste-orange" />
            <span className="text-preste-orange font-medium">Témoignages clients</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Ce que disent nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages authentiques.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex items-start space-x-8">
                <Quote className="w-12 h-12 text-preste-orange flex-shrink-0 mt-2" />
                <div className="flex-1">
                  <p className="text-2xl text-white leading-relaxed mb-8 font-light">{currentTestimonial.content}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-preste-orange/30"
                      />
                      <div>
                        <h4 className="font-display font-bold text-xl text-white">{currentTestimonial.name}</h4>
                        <p className="text-preste-orange font-medium">{currentTestimonial.role}</p>
                        <p className="text-white/60 text-sm">{currentTestimonial.company}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-preste-orange fill-current" />
                        ))}
                      </div>
                      <p className="text-preste-orange font-semibold">{currentTestimonial.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-preste-orange w-8" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "ring-2 ring-preste-orange" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-preste-orange text-sm">{testimonial.company}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-preste-orange fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{testimonial.content.slice(0, 120)}...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
