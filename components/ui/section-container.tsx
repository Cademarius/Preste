/**
 * Reusable section container component with mobile-first responsive design
 * Provides consistent spacing and layout across all sections
 */
import type React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  background?: "transparent" | "gradient" | "dark"
}

export function SectionContainer({
  children,
  className,
  size = "lg",
  background = "transparent",
}: SectionContainerProps) {
  const sizeClasses = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
    xl: "py-24 sm:py-32 lg:py-40",
  }

  const backgroundClasses = {
    transparent: "",
    gradient: "bg-gradient-to-b from-preste-black to-black",
    dark: "bg-black",
  }

  return (
    <section className={cn(sizeClasses[size], backgroundClasses[background], className)}>
      <div className="container-mobile container-tablet container-desktop">{children}</div>
    </section>
  )
}
