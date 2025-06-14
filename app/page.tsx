import { SearchForm } from "@/components/search-form"
import { FeaturedProducts } from "@/components/featured-products"
import { PopularCategories } from "@/components/popular-categories"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { HeroSection } from "@/components/hero"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

     
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Popular Categories */}
      <PopularCategories />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}

