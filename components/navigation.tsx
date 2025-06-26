"use client"

/**
 * Fixed navigation component with smooth scroll behavior
 * Mobile-first responsive design with improved UX
 */
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Études de cas", href: "/case-studies" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-out",
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl" : "bg-transparent",
      )}
    >
      <div className="container-mobile container-tablet container-desktop">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo - Mobile optimized */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-preste-orange to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-white">PRESTE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-preste-orange relative",
                  pathname === item.href ? "text-preste-orange" : "text-white/80",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-preste-orange rounded-full" />
                )}
              </Link>
            ))}
            <Button className="bg-preste-orange hover:bg-orange-600 text-black font-semibold px-6 py-2 text-sm rounded">
              <Link href="/get-quote">Parlez-nous de votre besoin</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in-mobile">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-black/98 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg",
                    pathname === item.href
                      ? "text-preste-orange bg-preste-orange/10"
                      : "text-white/80 hover:text-preste-orange hover:bg-white/5",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 pt-4 border-t border-white/10">
                <Button className="w-full bg-preste-orange hover:bg-orange-600 text-black font-semibold rounded">
                  <Link href="/get-quote">Parlez-nous de votre besoin</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
