import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Nearkart saved me over $200 on my new laptop purchase. I would have never found that deal without this amazing platform!",
      author: "Sarah Johnson",
      role: "Graphic Designer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      content:
        "I love how easy it is to compare prices across different stores. This is now my go-to site before making any tech purchase.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      content:
        "The price history feature helped me decide when to buy my new TV. I waited for a week and saved $150. Totally worth it!",
      author: "Emily Rodriguez",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-zinc-950 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

