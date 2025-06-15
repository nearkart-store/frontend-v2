"use server"

import type { TransformedProduct, FilterOptions, Category, Product } from "./types"

// Complete NearKart product data


// Transform the data to match our frontend interface
function transformProduct(product: Product, categoryName: string): TransformedProduct {
    // Get the lowest price from all product links
    const prices = product.ProductLinks.map((link) => Number.parseFloat(link.Price))
    const lowestPrice = Math.min(...prices)
    const highestPrice = Math.max(...prices)

    // Calculate average rating from product links
    const ratingsWithValues = product.ProductLinks.filter((link) => link.Rating).map((link) =>
        Number.parseFloat(link.Rating!),
    )
    const averageRating =
        ratingsWithValues.length > 0
            ? ratingsWithValues.reduce((sum, rating) => sum + rating, 0) / ratingsWithValues.length
            : 4.0

    // Transform product links to price info
    const priceInfo = product.ProductLinks.map((link) => ({
        platform: link.WebsiteName,
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: Number.parseFloat(link.Price),
        originalPrice: Number.parseFloat(link.Price),
        condition: "New",
        delivery: "Free shipping",
        url: link.WebsiteURL,
    }))

    // Calculate discount (if highest price is significantly higher than lowest)
    const discount = highestPrice > lowestPrice ? Math.round(((highestPrice - lowestPrice) / highestPrice) * 100) : 0

    // Use placeholder image if the original image URL is broken or invalid
    const primaryImage =
        product.Images && product.Images.length > 0 && product.Images[0]
            ? product.Images[0]
            : "/placeholder.svg?height=400&width=400"

    const allImages =
        product.Images && product.Images.length > 0 ? product.Images : ["/placeholder.svg?height=400&width=400"]

    return {
        id: product.Id.toString(),
        name: product.Name,
        description: product.Description,
        price: lowestPrice,
        discount: discount,
        image: primaryImage,
        images: allImages,
        category: categoryName.toLowerCase(),
        rating: averageRating,
        reviewCount: product.reviews?.length || 0,
        specifications: product.specifications,
        prices: priceInfo,
        reviews: product.reviews,
    }
}

// Get all transformed products
function getAllProducts(): TransformedProduct[] {
    const categories = mockData.Categories as Category[]
    const allProducts: TransformedProduct[] = []

    categories.forEach((category) => {
        category.Products.forEach((product) => {
            allProducts.push(transformProduct(product, category.Name))
        })
    })

    return allProducts
}

export async function getProducts(options: FilterOptions = {}): Promise<TransformedProduct[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    let filteredProducts = getAllProducts()

    // Apply filters
    if (options.query) {
        const query = options.query.toLowerCase()
        filteredProducts = filteredProducts.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query),
        )
    }

    if (options.category) {
        filteredProducts = filteredProducts.filter((product) => product.category === options.category.toLowerCase())
    }

    if (options.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter((product) => product.price >= options.minPrice!)
    }

    if (options.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter((product) => product.price <= options.maxPrice!)
    }

    if (options.brands && options.brands.length > 0) {
        const brandKeywords = options.brands.map((b) => b.toLowerCase())
        filteredProducts = filteredProducts.filter((product) =>
            brandKeywords.some((keyword) => product.name.toLowerCase().includes(keyword)),
        )
    }

    // Apply sorting
    if (options.sort) {
        switch (options.sort) {
            case "low":
                filteredProducts.sort((a, b) => a.price - b.price)
                break
            case "high":
                filteredProducts.sort((a, b) => b.price - a.price)
                break
            case "newest":
                filteredProducts.sort((a, b) => b.id.localeCompare(a.id))
                break
            case "rating":
                filteredProducts.sort((a, b) => b.rating - a.rating)
                break
            case "featured":
            default:
                // Keep original order
                break
        }
    }

    return filteredProducts
}

export async function getProductById(id: string): Promise<TransformedProduct | null> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const allProducts = getAllProducts()
    return allProducts.find((product) => product.id === id) || null
}

export async function getSimilarProducts(category: string, currentProductId: string): Promise<TransformedProduct[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const allProducts = getAllProducts()
    return allProducts.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}

export async function getCategories(): Promise<{ id: string; name: string; count: number }[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const categories = mockData.Categories as Category[]
    return categories.map((category) => ({
        id: category.Id.toString(),
        name: category.Name,
        count: category.Products.length,
    }))
}

export async function getFeaturedProducts(): Promise<TransformedProduct[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    const allProducts = getAllProducts()
    // Return products with highest ratings as featured
    return allProducts.sort((a, b) => b.rating - a.rating).slice(0, 8)
}
