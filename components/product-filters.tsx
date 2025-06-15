"use client"

import { useState, useTransition } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ProductFiltersProps {
  query: string
  category: string
  minPrice?: number
  maxPrice?: number
  brands: string[]
}

export function ProductFilters({ query, category, minPrice = 0, maxPrice = 200000, brands = [] }: ProductFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice || 0, maxPrice || 200000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>(brands)

  const availableBrands = [
    { id: "apple", name: "Apple" },
    { id: "samsung", name: "Samsung" },
    { id: "sony", name: "Sony" },
    { id: "lg", name: "LG" },
    { id: "dell", name: "Dell" },
    { id: "hp", name: "HP" },
    { id: "lenovo", name: "Lenovo" },
    { id: "asus", name: "Asus" },
    { id: "oneplus", name: "OnePlus" },
    { id: "google", name: "Google" },
    { id: "xiaomi", name: "Xiaomi" },
    { id: "nike", name: "Nike" },
    { id: "adidas", name: "Adidas" },
    { id: "levi", name: "Levi's" },
    { id: "puma", name: "Puma" },
    { id: "dyson", name: "Dyson" },
    { id: "philips", name: "Philips" },
    { id: "bose", name: "Bose" },
    { id: "jbl", name: "JBL" },
    { id: "sennheiser", name: "Sennheiser" },
    { id: "logitech", name: "Logitech" },
    { id: "razer", name: "Razer" },
    { id: "xbox", name: "Xbox" },
    { id: "playstation", name: "PlayStation" },
    { id: "corsair", name: "Corsair" },
  ]

  const handleBrandChange = (brand: string, checked: boolean) => {
    setSelectedBrands(checked ? [...selectedBrands, brand] : selectedBrands.filter((b) => b !== brand))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Set price range
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    // Set brands
    if (selectedBrands.length > 0) {
      params.set("brands", selectedBrands.join(","))
    } else {
      params.delete("brands")
    }

    // Keep existing query and category
    if (query) params.set("q", query)
    if (category) params.set("category", category)

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
    })
  }

  const resetFilters = () => {
    setPriceRange([0, 200000])
    setSelectedBrands([])

    const params = new URLSearchParams()
    if (query) params.set("q", query)
    if (category) params.set("category", category)

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["price", "brand", "rating"]}>
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                min={0}
                max={200000}
                step={1000}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{priceRange[0].toLocaleString()}</span>
                <span className="text-sm">₹{priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {availableBrands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                  />
                  <label
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                  >
                    <div className="flex mr-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                    {rating} & up
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-6" onClick={applyFilters} disabled={isPending}>
        Apply Filters
      </Button>
    </div>
  )
}
