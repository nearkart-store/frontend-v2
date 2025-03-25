export interface Product {
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

