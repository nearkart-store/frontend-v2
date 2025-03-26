import { Search, BarChart3, CreditCard } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Products",
      description: "Find the product you're looking for using our powerful search and filtering options.",
    },
    {
      icon: BarChart3,
      title: "Compare Prices",
      description: "Compare prices across multiple platforms to find the best deals available.",
    },
    {
      icon: CreditCard,
      title: "Buy with Confidence",
      description: "Purchase directly from your preferred retailer with complete peace of mind.",
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

