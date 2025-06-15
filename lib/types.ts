export interface Category {
  Id: number
  Name: string
  Products: Product[]
}

export interface Product {
  Id: number
  id: number
  Name: string
  name: string
  Description: string
  description: string
  specifications: Record<string, any>
  Images: string[]
  ProductLinks: ProductLink[]
  reviews: Review[]
  discount: number;
  rating: number;
  reviewCount: number;
  category: string;
  price: string;
  image?: string; // Optional, for single image display
// Optional, for multiple images display
}

export interface ProductLink {
  ProductID: number
  WebsiteName: string
  WebsiteURL: string
  Price: string
  Rating?: string
}

export interface Review {
  id: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  content: string
  date: string
  helpfulCount: number
  images?: string[]
}

export interface FilterOptions {
  query?: string
  category?: string
  minPrice?: number
  maxPrice?: number
  brands?: string[]
  sort?: string
}

// Transformed types for frontend compatibility
export interface TransformedProduct {
  id: string
  name: string
  description: string
  price: number
  discount: number
  image: string
  images?: string[]
  category: string
  rating: number
  reviewCount: number
  specifications?: Record<string, any>
  prices: PriceInfo[]
  reviews?: Review[]
}

export interface PriceInfo {
  platform: string
  platformLogo: string
  price: number
  originalPrice: number
  condition: string
  delivery: string
  url: string
}
