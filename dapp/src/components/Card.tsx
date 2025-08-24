import { HTMLAttributes } from "react"
import { cn } from "../lib/utils"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
    />
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div {...props} className={cn("p-6 pt-0", className)} />
  )
}
