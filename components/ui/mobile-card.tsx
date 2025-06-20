/**
 * Mobile-optimized card component
 * Ensures consistent styling across all screen sizes
 */
import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MobileCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: "sm" | "md" | "lg"
}

export function MobileCard({ children, className, hover = true, padding = "md" }: MobileCardProps) {
  const paddingClasses = {
    sm: "p-4 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10 lg:p-12",
  }

  return (
    <Card
      className={cn(
        "border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300",
        hover && "hover:bg-white/10 hover:border-preste-orange/30 hover:scale-105",
        className,
      )}
    >
      <CardContent className={cn(paddingClasses[padding])}>{children}</CardContent>
    </Card>
  )
}
