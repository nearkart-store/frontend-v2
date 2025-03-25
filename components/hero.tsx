import React from 'react'
import { SearchForm } from "@/components/search-form"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black opacity-50 blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title with Gradient Effect */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-foreground drop-shadow-md">
            Find the Best Deals Across Platforms
          </h1>

          {/* Subtitle with Soft Glow */}
          <p className="text-lg md:text-xl text-primary-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            Compare prices from Amazon, Flipkart, and more to grab the best offers on your favorite products.
          </p>

          {/* Modernized Search Form */}
          <div className="mt-8">
            <SearchForm />
          </div>
        </div>
      </div>
    </section>

  )
}


