import Image from "next/image"
import { notFound } from "next/navigation"
import { getProduct, getSimilarProducts } from "@/lib/actions"
import { PriceComparison } from "@/components/price-comparison"
import { ProductSpecifications } from "@/components/product-specifications"
import { ProductReviews } from "@/components/product-reviews"
import { SimilarProducts } from "@/components/similar-products"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const similarProducts = await getSimilarProducts(params.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name || "Product Image"}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images &&
              product.images.map((img, i) => (
                <div key={i} className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.name} view ${i + 1}` || "Product Image"}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
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
            <p className="text-gray-700">{product.description}</p>
          </div>

          <PriceComparison
            prices={
              (product.prices || []).map((p: any) => ({
                platform: p.platform || p.store || "",
                platformLogo: p.platformLogo || "",
                originalPrice: p.originalPrice ?? p.price ?? 0,
                price: p.price ?? 0,
                url: p.url || "",
                rating: p.rating ?? 0,
                condition: p.condition || "New",
                delivery: p.delivery || "Standard",
              }))
            }
          />
        </div>
      </div>

      <Tabs defaultValue="specifications" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>

        </TabsList>
        <TabsContent value="specifications">
          <ProductSpecifications
            specifications={
              product.specifications
                ? Object.fromEntries(
                  Object.entries(product.specifications).map(([key, value]) => [
                    key,
                    typeof value === "object" && value !== null
                      ? JSON.stringify(value)
                      : value ?? "",
                  ])
                )
                : {}
            }
          />
        </TabsContent>
        <TabsContent value="reviews">
          <ProductReviews reviews={product.reviews || []} />
        </TabsContent>

      </Tabs>

      <SimilarProducts products={similarProducts} />
    </main>
  )
}
