"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown } from "lucide-react"

interface ProductSortProps {
  currentSort: string
}

export function ProductSort({ currentSort }: ProductSortProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shrink-0">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort by: {getSortLabel(currentSort)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]" align="end">
        <DropdownMenuRadioGroup value={currentSort} onValueChange={handleSortChange}>
          <DropdownMenuRadioItem value="relevance">Relevance</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rating">Highest Rated</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function getSortLabel(sort: string): string {
  switch (sort) {
    case "relevance":
      return "Relevance"
    case "featured":
      return "Featured"
    case "newest":
      return "Newest"
    case "low":
      return "Price: Low to High"
    case "high":
      return "Price: High to Low"
    case "rating":
      return "Highest Rated"
    default:
      return "Relevance"
  }
}

