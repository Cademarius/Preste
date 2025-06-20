/**
 * Responsive grid component with mobile-first approach
 * Automatically adjusts columns based on screen size
 */
import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveGridProps {
  children: React.ReactNode
  cols?: {
    mobile: number
    tablet: number
    desktop: number
  }
  gap?: "sm" | "md" | "lg"
  className?: string
}

export function ResponsiveGrid({
  children,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className,
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6 sm:gap-8",
    lg: "gap-8 sm:gap-10 lg:gap-12",
  }

  const gridClasses = `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop}`

  return <div className={cn("grid", gridClasses, gapClasses[gap], className)}>{children}</div>
}
