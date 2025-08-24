import { ButtonHTMLAttributes } from "react"
import { cn } from "../lib/utils" // si no tienes esta función, te paso una abajo 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "icon"
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-lg font-medium transition-colors",
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "default" && "h-10 px-4 py-2",
        size === "icon" && "h-10 w-10 flex items-center justify-center",
        className
      )}
    />
  )
}
