"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getCategories } from "@/lib/actions"

export function PopularCategories() {
  const [categories, setCategories] = useState<{ id: string; name: string; count: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories()
        setCategories(
          data.map((cat: { id: string; name: string; productCount: number }) => ({
            id: cat.id,
            name: cat.name,
            count: cat.productCount,
          }))
        )
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const emojiMap: Record<string, string> = {
    Mobile: "📱",
    Laptops: "💻",
    Headphones: "🎧",
    Clothings: "👕",
    "Home Appliances": "🏠",
    Books: "📚",
    "Gaming Accessories": "🎮",
  }

  const colorMap: Record<string, string> = {
    Mobile: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    Laptops: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    Headphones: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    Clothings: "bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400",
    "Home Appliances": "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    Books: "bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400",
    "Gaming Accessories": "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
  }

  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {loading
            ? Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-zinc-800 animate-pulse"
              >
                <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-zinc-700 mb-4" />
                <div className="h-4 w-20 bg-gray-300 dark:bg-zinc-700 rounded" />
              </div>
            ))
            : categories.map((category) => {
              const emoji = emojiMap[category.name] || "📦"
              const color = colorMap[category.name] || "bg-gray-200 dark:bg-zinc-700 text-gray-600 dark:text-gray-300"

              return (
                <Link
                  key={category.id}
                  href={`/products?category=${encodeURIComponent(category.name.toLowerCase())}`}
                  className="flex flex-col items-center justify-center p-6 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-zinc-800"
                >
                  <div className={`p-4 rounded-full text-2xl mb-4 ${color}`}>
                    {emoji}
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{category.count} products</span>
                </Link>
              )
            })}
        </div>
      </div>
    </section>
  )
}
