import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { getProducts } from "@/lib/actions"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const category = typeof searchParams.category === "string" ? searchParams.category : ""
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : undefined
  const brands = typeof searchParams.brands === "string" ? searchParams.brands.split(",") : []
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : "relevance"

  const products = await getProducts({ query, category, minPrice, maxPrice, brands, sort })

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <ProductFilters query={query} category={category} minPrice={minPrice} maxPrice={maxPrice} brands={brands} />
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h1 className="text-2xl font-bold mb-2 sm:mb-0">
              {query ? `Search results for "${query}"` : "All Products"}
            </h1>
            <ProductSort currentSort={sort} />
          </div>
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  )
}

