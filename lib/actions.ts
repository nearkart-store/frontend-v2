"use server"

import type { Product, FilterOptions } from "./types"

// Mock data - in a real app, this would be fetched from a database or API
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple MacBook Pro 14-inch (M2 Pro)",
    description:
      "The ultimate pro laptop with the M2 Pro chip for groundbreaking performance and amazing battery life.",
    price: 1999.99,
    discount: 10,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "laptops",
    rating: 4.8,
    reviewCount: 245,
    specifications: {
      General: {
        Processor: "Apple M2 Pro",
        RAM: "16GB unified memory",
        Storage: "512GB SSD",
        Display: "14.2-inch Liquid Retina XDR display",
        "Operating System": "macOS Ventura",
      },
      Display: {
        Resolution: "3024 x 1964 pixels",
        Brightness: "1000 nits",
        "Refresh Rate": "120Hz",
        "Color Gamut": "P3 wide color",
      },
      Connectivity: {
        Ports: "3x Thunderbolt 4, HDMI, SDXC card slot, MagSafe 3",
        Wireless: "Wi-Fi 6E, Bluetooth 5.3",
      },
      Physical: {
        Dimensions: "31.26 x 22.12 x 1.55 cm",
        Weight: "1.6 kg",
        Color: "Space Gray",
      },
    },
    prices: [
      {
        platform: "Amazon",
        platformLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg?height=32&width=32",
        price: 1799.99,
        originalPrice: 1999.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Apple Store",
        platformLogo: "https://img.favpng.com/3/10/12/apple-store-logo-ipad-clip-art-png-favpng-tnzVvbKBW0FAYRu8iREEd2wXb.jpg?height=32&width=32",
        price: 1999.99,
        originalPrice: 1999.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Best Buy",
        platformLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWuBcKIwkpSqbdEQosynYSOWeAfLtG8BRzA&s?height=32&width=32",
        price: 1849.99,
        originalPrice: 1999.99,
        condition: "New",
        delivery: "$9.99 shipping",
        url: "#",
      },
      {
        platform: "Walmart",
        platformLogo: "https://latn.com/wp-content/uploads/2014/12/walmart-logo-vector.png?height=32&width=32",
        price: 1899.99,
        originalPrice: 1999.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "TechEnthusiast",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Best laptop I've ever owned",
        content:
          "The M2 Pro chip is incredibly fast and efficient. Battery life is amazing - I can go a full day of work without charging. The display is gorgeous with vibrant colors and deep blacks. Keyboard is comfortable to type on for long periods.",
        date: "2023-12-15",
        helpfulCount: 42,
        images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
      },
      {
        id: "r2",
        userName: "DesignerPro",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Perfect for creative work",
        content:
          "As a graphic designer, this machine handles everything I throw at it with ease. Multiple Adobe apps open simultaneously? No problem. The screen is color-accurate which is essential for my work.",
        date: "2023-11-28",
        helpfulCount: 35,
      },
      {
        id: "r3",
        userName: "CasualUser",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 4,
        title: "Great but expensive",
        content:
          "This is definitely a premium laptop with premium performance, but also comes with a premium price tag. If you need the power, it's worth it, but casual users might want to consider the Air instead.",
        date: "2023-10-05",
        helpfulCount: 28,
      },
      {
        id: "r4",
        userName: "DeveloperJane",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Developer's dream machine",
        content:
          "Compiling code is lightning fast. Docker containers spin up instantly. The battery lasts all day even with heavy IDE usage. The keyboard is comfortable for long coding sessions.",
        date: "2023-09-12",
        helpfulCount: 56,
      },
      {
        id: "r5",
        userName: "MovieBuff",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 4,
        title: "Amazing display, but gets warm",
        content:
          "The Liquid Retina XDR display is stunning for watching movies and editing videos. My only complaint is that it can get quite warm during intensive tasks.",
        date: "2023-08-30",
        helpfulCount: 19,
      },
    ],
  },
  {
    id: "2",
    name: "Sony WH-1000XM5",
    description: "Premium noise-cancelling headphones with exceptional sound quality",
    price: 349.99,
    discount: 15,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "headphones",
    rating: 4.9,
    reviewCount: 187,
    specifications: {
      Audio: {
        Driver: "30mm dynamic driver",
        "Frequency Response": "4Hz-40,000Hz",
        "Noise Cancellation": "Adaptive noise cancellation",
      },
      Battery: {
        "Battery Life": "Up to 30 hours",
        "Charging Time": "3.5 hours",
        "Quick Charge": "3 hours playback from 3 minutes charge",
      },
      Connectivity: {
        Bluetooth: "Bluetooth 5.2",
        "Codec Support": "LDAC, AAC, SBC",
        Multipoint: "Connect to two devices simultaneously",
      },
      Physical: {
        Weight: "250g",
        Color: "Black",
      },
    },
    prices: [
      {
        platform: "Amazon",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 298.0,
        originalPrice: 349.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Best Buy",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 299.99,
        originalPrice: 349.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Sony Store",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 349.99,
        originalPrice: 349.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "AudioPhile",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Best noise cancellation on the market",
        content:
          "These headphones have incredible noise cancellation. I use them on my daily commute and they completely block out the subway noise. Sound quality is excellent with deep bass and clear highs.",
        date: "2023-11-10",
        helpfulCount: 38,
      },
      {
        id: "r2",
        userName: "TravelExpert",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Perfect for long flights",
        content:
          "I bought these specifically for travel and they're amazing. Battery lasts for multiple long-haul flights and the noise cancellation makes flying much more pleasant. Comfortable to wear for hours.",
        date: "2023-10-22",
        helpfulCount: 45,
      },
    ],
  },
  {
    id: "3",
    name: "Samsung Galaxy S23 Ultra",
    description: "Flagship smartphone with advanced camera system",
    price: 1199.99,
    discount: 0,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "smartphones",
    rating: 4.7,
    reviewCount: 312,
    specifications: {
      Display: {
        Size: "6.8-inch Dynamic AMOLED 2X",
        Resolution: "3088 x 1440 pixels",
        "Refresh Rate": "120Hz adaptive",
      },
      Performance: {
        Processor: "Snapdragon 8 Gen 2",
        RAM: "12GB",
        Storage: "256GB/512GB/1TB",
      },
      Camera: {
        Main: "200MP wide",
        "Ultra-wide": "12MP",
        Telephoto: "10MP (3x optical zoom)",
        Periscope: "10MP (10x optical zoom)",
        Front: "12MP",
      },
      Battery: {
        Capacity: "5000mAh",
        Charging: "45W wired, 15W wireless",
      },
    },
    prices: [
      {
        platform: "Amazon",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1199.99,
        originalPrice: 1199.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Samsung",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1199.99,
        originalPrice: 1199.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Best Buy",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1149.99,
        originalPrice: 1199.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "PhotoEnthusiast",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Camera system is incredible",
        content:
          "The 200MP main camera takes stunning photos, and the 10x optical zoom lets me capture details I couldn't with my previous phone. Night mode is also significantly improved.",
        date: "2023-09-15",
        helpfulCount: 67,
        images: ["/placeholder.svg?height=100&width=100", "/placeholder.svg?height=100&width=100"],
      },
      {
        id: "r2",
        userName: "TechReviewer",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 4,
        title: "Great phone but expensive",
        content:
          "This is definitely the most powerful Android phone on the market. The S Pen integration is useful and the display is gorgeous. Battery life is good but not great. My only real complaint is the price.",
        date: "2023-08-28",
        helpfulCount: 42,
      },
    ],
  },
  {
    id: "4",
    name: 'LG C2 OLED 65" TV',
    description: "Stunning 4K OLED TV with perfect blacks and vibrant colors",
    price: 1799.99,
    discount: 20,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "tvs",
    rating: 4.8,
    reviewCount: 156,
    specifications: {
      Display: {
        "Screen Size": "65 inches",
        Resolution: "4K UHD (3840 x 2160)",
        "Panel Type": "OLED",
        HDR: "Dolby Vision, HDR10, HLG",
        "Refresh Rate": "120Hz",
      },
      Audio: {
        "Sound System": "2.2 channel",
        "Output Power": "40W",
        "Dolby Atmos": "Yes",
      },
      "Smart Features": {
        "Operating System": "webOS 22",
        "Voice Assistant": "Google Assistant, Alexa",
        "HDMI 2.1": "4 ports",
      },
      Physical: {
        Dimensions: "57.0 x 32.7 x 1.8 inches",
        Weight: "50.7 lbs",
      },
    },
    prices: [
      {
        platform: "Amazon",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1499.99,
        originalPrice: 1799.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Best Buy",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1449.99,
        originalPrice: 1799.99,
        condition: "New",
        delivery: "Free shipping",
        url: "#",
      },
      {
        platform: "Walmart",
        platformLogo: "/placeholder.svg?height=32&width=32",
        price: 1479.99,
        originalPrice: 1799.99,
        condition: "New",
        delivery: "$49.99 shipping",
        url: "#",
      },
    ],
    reviews: [
      {
        id: "r1",
        userName: "MovieBuff",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Best TV I've ever owned",
        content:
          "The picture quality is absolutely stunning. Perfect blacks, vibrant colors, and the 4K upscaling makes even older content look great. Gaming at 120Hz with VRR is buttery smooth.",
        date: "2023-07-15",
        helpfulCount: 48,
      },
      {
        id: "r2",
        userName: "GamingEnthusiast",
        userAvatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        title: "Perfect for next-gen gaming",
        content:
          "I bought this specifically for PS5 and Xbox Series X gaming. The 4 HDMI 2.1 ports, 120Hz refresh rate, VRR, and ALLM make this perfect for gaming. The response time is incredible with virtually no input lag.",
        date: "2023-06-28",
        helpfulCount: 52,
      },
    ],
  },
]

export async function getProducts(options: FilterOptions = {}): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredProducts = [...mockProducts]

  // Apply filters
  if (options.query) {
    const query = options.query.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query),
    )
  }

  if (options.category) {
    filteredProducts = filteredProducts.filter((product) => product.category === options.category)
  }

  if (options.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= options.minPrice!)
  }

  if (options.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= options.maxPrice!)
  }

  if (options.brands && options.brands.length > 0) {
    // In a real app, you'd have a brand field to filter on
    // This is just a simplified example
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
        // In a real app, you'd sort by date
        // This is just a simplified example
        filteredProducts.sort((a, b) => b.id.localeCompare(a.id))
        break
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating)
        break
      case "featured":
      default:
        // Featured products would be marked in the database
        // This is just a simplified example
        break
    }
  }

  return filteredProducts
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockProducts.find((product) => product.id === id) || null
}

export async function getSimilarProducts(category: string, currentProductId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockProducts.filter((product) => product.category === category && product.id !== currentProductId).slice(0, 4)
}

