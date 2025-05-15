import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: "1",
      name: "Latest MacBook Pro",
      description: "Apple's most powerful laptop with the M2 Pro chip",
      price: 1999.99,
      discount: 10,
      image: "https://www.wearesync.co.uk/wp-content/uploads/2023/11/mbp16-m3-pro-max-silver-gallery1-1.jpg?height=300&width=300",
      category: "electronics",
    },
    {
      id: "2",
      name: "Sony WH-1000XM5",
      description: "Premium noise-cancelling headphones with exceptional sound quality",
      price: 349.99,
      discount: 15,
      image: "https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg?height=300&width=300",
      category: "electronics",
    },
    {
      id: "3",
      name: "Samsung Galaxy S23 Ultra",
      description: "Flagship smartphone with advanced camera system",
      price: 1199.99,
      discount: 0,
      image: "https://m.media-amazon.com/images/I/41X9qNxoJKL._SX300_SY300_QL70_FMwebp_.jpg?height=300&width=300",
      category: "electronics",
    },
    {
      id: "4",
      name: 'LG C2 OLED 65" TV',
      description: "Stunning 4K OLED TV with perfect blacks and vibrant colors",
      price: 1799.99,
      discount: 20,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa55s90daulxl/gallery/in-oled-s90d-qa55s90daulxl-540992638?$684_547_PNG$?height=300&width=300",
      category: "electronics",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="link" asChild>
            <Link href="/products" className="flex items-center">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white dark:bg-zinc-950 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-gray-100 dark:bg-gray-900">
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
                <h3 className="font-medium text-lg mb-1 line-clamp-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 line-clamp-2">{product.description}</p>

                <div>
                  {product.discount > 0 ? (
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">
                        ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
                    </div>
                  ) : (
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

