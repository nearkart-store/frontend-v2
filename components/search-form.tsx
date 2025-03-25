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
        <Input
          type="search"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10"
        />
        <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="flex">
        <Input
          type="search"
          placeholder="Search for products, brands, and more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-r-none h-12 text-base"
        />
        <Button type="submit" className="rounded-l-none h-12 px-6">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </form>
  )
}

