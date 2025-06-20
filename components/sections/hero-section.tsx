"use client"

/**
 * Hero section with mobile-first responsive design
 * Fixed height container prevents layout shifts during text animations
 * Proper spacing for mobile navigation
 */
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Target, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const dynamicTexts = [
  "Vous cherchez une prestation ?",
  "Vous voulez de la croissance ?",
  "Vous cherchez l'excellence ?",
  "Vous voulez de la performance ?",
]

const responses = [
  "Nous livrons de la performance.",
  "Nous créons des résultats.",
  "Nous exécutons avec précision.",
  "Nous générons de l'impact.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-preste-black to-preste-blue">
      {/* Background Effects - Mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-72 sm:h-72 bg-preste-orange/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-5 w-40 h-40 sm:bottom-20 sm:right-10 sm:w-96 sm:h-96 bg-preste-blue/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Icons - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <Sparkles className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 text-preste-orange/30 animate-float" />
        <Zap
          className="absolute top-1/3 right-1/4 w-6 h-6 sm:w-8 sm:h-8 text-preste-orange/40 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <Target
          className="absolute bottom-1/3 left-1/3 w-4 h-4 sm:w-5 sm:h-5 text-preste-orange/35 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Rocket
          className="absolute bottom-1/4 right-1/3 w-5 h-5 sm:w-7 sm:h-7 text-preste-orange/30 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content - Mobile-first spacing */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16 sm:pt-24 sm:pb-20">
        {/* Main Heading - Fixed height prevents layout shift */}
        <div className="mb-8 sm:mb-12">
          <div className="h-[200px] sm:h-[240px] lg:h-[280px] flex flex-col justify-center">
            <div
              className={cn(
                "transition-all duration-500 ease-in-out",
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8",
              )}
            >
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 leading-tight">
                <span className="text-white block">{dynamicTexts[currentIndex]}</span>
                <span className="text-gradient block mt-2">{responses[currentIndex]}</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Subtitle - Mobile optimized */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
          Agence de freelances <span className="text-preste-orange font-semibold">augmentée par l'IA</span>. Nous ne
          livrons pas des prestations, nous créons de la{" "}
          <span className="text-preste-orange font-semibold">croissance mesurable</span>.
        </p>

        {/* CTA Buttons - Mobile-first layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-preste-orange hover:bg-orange-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group transition-all duration-300"
          >
            Parlez-nous de votre besoin
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-preste-orange/50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
          >
            Découvrir nos réalisations
          </Button>
        </div>

        {/* Trust Indicators - Mobile responsive grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center max-w-4xl mx-auto px-4">
          {[
            { value: "150+", label: "Projets livrés" },
            { value: "98%", label: "Satisfaction client" },
            { value: "24h", label: "Temps de réponse" },
            { value: "5★", label: "Note moyenne" },
          ].map((stat, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-preste-orange mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-preste-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
