"use client"

import type React from "react"

/**
 * Compact, mobile-first form dedicated to quote requests.
 * You can extend the form fields later if needed.
 */

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Send } from "lucide-react"

export function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote request:", formData)
    // 👉 TODO: connect to your backend / API route
  }

  return (
    <section className="bg-gradient-to-b from-preste-black to-black py-16 sm:py-24">
      <div className="container-mobile container-tablet container-desktop">
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-10 lg:p-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
              Obtenir mon devis personnalisé
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nom et Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Nom complet *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="vous@email.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Entreprise
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Détails du projet *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[140px]"
                  placeholder="Décrivez votre besoin, vos objectifs, votre timeline…"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-preste-orange hover:bg-orange-600 text-black font-semibold py-3 text-lg"
              >
                <Send className="mr-2 w-5 h-5" />
                Envoyer ma demande
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
