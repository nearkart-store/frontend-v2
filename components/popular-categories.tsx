import Link from "next/link"
import { Laptop, Smartphone, Tv, Headphones, Camera, Watch } from "lucide-react"

export function PopularCategories() {
  const categories = [
    {
      name: "Laptops",
      icon: Laptop,
      href: "/products?category=laptops",
      color: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Smartphones",
      icon: Smartphone,
      href: "/products?category=smartphones",
      color: "bg-green-100 dark:bg-green-900",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "TVs",
      icon: Tv,
      href: "/products?category=tvs",
      color: "bg-purple-100 dark:bg-purple-900",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      name: "Headphones",
      icon: Headphones,
      href: "/products?category=headphones",
      color: "bg-red-100 dark:bg-red-900",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      name: "Cameras",
      icon: Camera,
      href: "/products?category=cameras",
      color: "bg-yellow-100 dark:bg-yellow-900",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      name: "Smartwatches",
      icon: Watch,
      href: "/products?category=smartwatches",
      color: "bg-orange-100 dark:bg-orange-900",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center justify-center p-6 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className={`p-4 rounded-full ${category.color} mb-4`}>
                <category.icon className={`h-8 w-8 ${category.iconColor}`} />
              </div>
              <span className="font-medium text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

