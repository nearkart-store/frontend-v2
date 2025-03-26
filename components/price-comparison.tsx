"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import type { PriceInfo } from "@/lib/types"

interface PriceComparisonProps {
  prices: PriceInfo[]
}

export function PriceComparison({ prices }: PriceComparisonProps) {
  const [showAll, setShowAll] = useState(false)

  // Sort prices by price (lowest first)
  const sortedPrices = [...prices].sort((a, b) => a.price - b.price)

  // Display only first 3 prices unless showAll is true
  const displayPrices = showAll ? sortedPrices : sortedPrices.slice(0, 3)

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-sm p-4 border">
      <h3 className="text-lg font-semibold mb-4">Compare Prices</h3>

      <div className="space-y-4">
        {displayPrices.map((price, index) => (
          <div
            key={`${price.platform}-${index}`}
            className={`flex items-center justify-between p-3 rounded-lg ${index === 0 ? "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900" : ""
              }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8">
                <Image
                  src={price.platformLogo || "/placeholder.svg"}
                  alt={price.platform}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium">{price.platform}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {price.condition} • {price.delivery}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="font-bold text-lg">${price.price.toFixed(2)}</p>
                {price.originalPrice > price.price && (
                  <p className="text-xs text-gray-500 line-through">${price.originalPrice.toFixed(2)}</p>
                )}
              </div>

              <Button asChild size="sm">
                <a href={price.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Visit
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {prices.length > 3 && (
        <Button variant="ghost" className="w-full mt-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `Show All (${prices.length})`}
        </Button>
      )}
    </div>
  )
}

