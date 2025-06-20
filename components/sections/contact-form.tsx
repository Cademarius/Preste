"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Send, User, Building, Mail, Phone } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <section className="py-24 bg-gradient-to-b from-preste-black to-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="font-display font-bold text-2xl text-white mb-4">Parlez-nous de votre projet</h2>
              <p className="text-white/70">
                Remplissez ce formulaire et nous vous recontacterons sous 24h avec une proposition personnalisée.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Nom complet *</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Téléphone</span>
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Entreprise</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <Label className="text-white">Type de projet *</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Sélectionnez le type de projet" />
                  </SelectTrigger>
                  <SelectContent className="bg-preste-black border-white/20">
                    <SelectItem value="ai">IA & Automatisation</SelectItem>
                    <SelectItem value="web">Site Web</SelectItem>
                    <SelectItem value="app">Application Mobile</SelectItem>
                    <SelectItem value="design">Design & Branding</SelectItem>
                    <SelectItem value="seo">SEO & Marketing</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-white">Budget estimé</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Sélectionnez votre budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-preste-black border-white/20">
                      <SelectItem value="1k-5k">1 000€ - 5 000€</SelectItem>
                      <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                      <SelectItem value="15k-50k">15 000€ - 50 000€</SelectItem>
                      <SelectItem value="50k+">50 000€+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Timeline souhaitée</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Quand souhaitez-vous démarrer ?" />
                    </SelectTrigger>
                    <SelectContent className="bg-preste-black border-white/20">
                      <SelectItem value="asap">Dès que possible</SelectItem>
                      <SelectItem value="1month">Dans le mois</SelectItem>
                      <SelectItem value="3months">Dans les 3 mois</SelectItem>
                      <SelectItem value="6months">Dans les 6 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Décrivez votre projet *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                  placeholder="Décrivez votre projet, vos objectifs, vos défis actuels..."
                  required
                />
              </div>

              {/* Newsletter */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
                  className="border-white/30"
                />
                <Label htmlFor="newsletter" className="text-white/80 text-sm">
                  Je souhaite recevoir les actualités et conseils de PRESTE
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-preste-orange hover:bg-orange-600 text-black font-semibold py-3 text-lg"
              >
                <Send className="mr-2 w-5 h-5" />
                Envoyer ma demande
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-white/60 text-sm text-center">
                Réponse garantie sous 24h • Premier échange gratuit • Devis personnalisé
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
