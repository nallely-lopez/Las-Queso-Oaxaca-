"use client"

import { Input } from "@/components/Input"
import { Search } from "lucide-react"

export function SearchBar({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (v: string) => void }) {
  return (
    <div className="flex-1 max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Buscar artesanías..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-input border-border"
        />
      </div>
    </div>
  )
}
