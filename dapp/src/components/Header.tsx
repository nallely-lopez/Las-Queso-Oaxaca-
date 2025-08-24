"use client"

import { User, ShoppingCart } from "lucide-react" // 👈 ya importados aquí
import { Button } from "../components/Button"
import { SearchBar } from "./SearchBar"

export function Header({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (v: string) => void }) {
  return (
    <header className="bg-card border-b border-border px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">OA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Artesanías Oaxaqueñas</h1>
            <p className="text-sm text-muted-foreground">Tradición y Cultura</p>
          </div>
        </div>

        {/* Buscador */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Iconos de Perfil y Carrito */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
