"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ProductCard({
  product,
  expandedProduct,
  toggleProductExpansion,
}: {
  product: any
  expandedProduct: number | null
  toggleProductExpansion: (id: number) => void
}) {
  return (
    <Card
      key={product.id}
      className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => toggleProductExpansion(product.id)}
    >
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-md bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-card-foreground line-clamp-2">{product.name}</h3>
            {expandedProduct === product.id ? (
              <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
            ) : (
              <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
            )}
          </div>

          <p className="text-lg font-bold text-primary">{product.price}</p>

          {expandedProduct === product.id && (
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              <Button
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                Agregar al Carrito
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
