import Image from "next/image"
import { notFound } from "next/navigation"
import { getProductById, getSimilarProducts } from "@/lib/actions"
import { PriceComparison } from "@/components/price-comparison"
import { ProductSpecifications } from "@/components/product-specifications"
import { ProductReviews } from "@/components/product-reviews"
import { SimilarProducts } from "@/components/similar-products"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const similarProducts = await getSimilarProducts(product.category, product.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className=" rounded-lg p-4 shadow-sm">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              // src={product.image || "/placeholder.svg"}
              src={"https://www.wearesync.co.uk/wp-content/uploads/2023/11/mbp16-m3-pro-max-silver-gallery1-1.jpg"}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {/* {product.images &&
              product.images.map((img, i) => (
                <div key={i} className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    // src={img || "/placeholder.svg"}
                    src={"https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg?height=300&width=300"}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))} */}
            
                <div  className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    // src={img || "/placeholder.svg"}
                    src={"https://m.media-amazon.com/images/I/51aXvjzcukL._SX522_.jpg?height=300&width=300"}
                    alt={`${product.name} view `}
                    fill
                    className="object-cover"
                  />
                </div>
                <div  className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    // src={img || "/placeholder.svg"}
                src={"https://m.media-amazon.com/images/I/61z5pPjUGJL._SX679_.jpg"}
                    alt={`${product.name} view `}
                    fill
                    className="object-cover"
                  />
                </div>
                <div  className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    // src={img || "/placeholder.svg"}
                src={"https://m.media-amazon.com/images/I/81aL6b6qoOL._SX679_.jpg"}
                    alt={`${product.name} view `}
                    fill
                    className="object-cover"
                  />
                </div>
                <div  className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    // src={img || "/placeholder.svg"}
                src={"https://m.media-amazon.com/images/I/61dEkbKWZmL._SX679_.jpg"}
                    alt={`${product.name} view `}
                    fill
                    className="object-cover"
                  />
                </div>
             
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 dark:text-gray-400">{product.description}</p>
          </div>

          <PriceComparison prices={product.prices} />
        </div>
      </div>

      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="comparison">Price History</TabsTrigger>
        </TabsList>
        <TabsContent value="specifications">
          <ProductSpecifications specifications={product.specifications || {}} />
        </TabsContent>
        <TabsContent value="reviews">
          <ProductReviews reviews={product.reviews || []} />
        </TabsContent>
        <TabsContent value="comparison">
          <div className="bg-white dark:bg-background p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Price History</h3>
            {/* Price history chart would go here */}
            <div className="h-64 bg-gray-100 dark:bg-background rounded flex items-center justify-center">
              Price history chart placeholder
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <SimilarProducts products={similarProducts} />
    </main>
  )
}

