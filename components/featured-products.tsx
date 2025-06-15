"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getFeaturedProducts } from "@/lib/actions"
import type { TransformedProduct } from "@/lib/types"

export function FeaturedProducts() {
  const [products, setProducts] = useState<TransformedProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedProducts()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch featured products:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm dark:border dark:border-zinc-800 overflow-hidden animate-pulse"
                >
                  <div className="aspect-square bg-gray-200 dark:bg-zinc-700"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-zinc-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-20"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white dark:bg-zinc-900 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-zinc-800 overflow-hidden hover:shadow-md dark:hover:border-zinc-700 transition-all"
            >
              <div className="relative aspect-square bg-gray-100 dark:bg-black">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300 dark:text-zinc-700"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-zinc-500 ml-1">({product.reviewCount})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    {product.discount > 0 ? (
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">
                          ₹{(product.price * (1 - product.discount / 100)).toFixed(0)}
                        </span>
                        <span className="text-gray-500 dark:text-zinc-500 line-through text-sm">
                          ₹{product.price.toFixed(0)}
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold text-lg">₹{product.price.toFixed(0)}</span>
                    )}
                  </div>

                  <div className="text-xs text-gray-500 dark:text-zinc-500">{product.prices.length} sellers</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
