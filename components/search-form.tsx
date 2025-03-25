"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SearchFormProps {
  minimal?: boolean
}

export function SearchForm({ minimal = false }: SearchFormProps) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/products?q=${encodeURIComponent(query.trim())}`)
    }
  }

  if (minimal) {
    return (
      <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-11 pl-5 pr-12 bg-white backdrop-blur-lg rounded-full shadow-lg text-base focus:outline-none"
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 bg-primary text-white rounded-full hover:bg-primary/90 transition"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </form>

    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="flex bg-white backdrop-blur-lg rounded-full shadow-lg overflow-hidden">
        <Input
          type="search"
          placeholder="Search for products, brands, and more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 text-base px-5 bg-transparent border-none focus:outline-none"
        />
        <Button
          type="submit"
          className="h-12 px-6 bg-primary text-white hover:bg-primary/90 transition"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>

  )
}

