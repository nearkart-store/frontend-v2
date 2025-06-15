'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/types'

interface ProductGridProps {
  products: Product[]
}

// Format INR safely
function formatINR(price: number): string {
  return `₹${price.toLocaleString('en-IN', {
    maximumFractionDigits: 0,
  })}`
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-gray-500 dark:text-zinc-400 mt-2">
          Try adjusting your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const imageUrl = product.image || '/placeholder.svg'
        const rating = Math.floor(Number(product.rating) || 0)
        const reviewCount = Number(product.reviewCount) || 0
        const price = Number(product.price) || 0
        const discount = Number(product.discount) || 0
        const hasDiscount = discount > 0
        const finalPrice = Math.round(price * (1 - discount / 100))

        return (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group bg-white dark:bg-zinc-900 rounded-lg shadow-sm dark:shadow-none dark:border dark:border-zinc-800 overflow-hidden hover:shadow-md dark:hover:border-zinc-700 transition-all"
          >
            <div className="relative aspect-square bg-gray-100 dark:bg-black">
              <Image
                src={imageUrl}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
              {hasDiscount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {discount}% OFF
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500 dark:text-zinc-400 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-zinc-700'
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                </div>
                <span className="text-xs text-gray-500 dark:text-zinc-500 ml-1">
                  ({reviewCount})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {hasDiscount ? (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">
                        {formatINR(finalPrice)}
                      </span>
                      <span className="text-gray-500 dark:text-zinc-500 line-through text-sm">
                        {formatINR(price)}
                      </span>
                    </div>
                  ) : (
                    <span className="font-bold text-lg">
                      {formatINR(price)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
