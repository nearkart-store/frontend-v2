import React from 'react'
import { SearchForm } from "@/components/search-form"

export function HeroSection() {
  return (
    <section className="bg-black py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Find the Best Deals Across Multiple Platforms
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Compare prices from Amazon, Flipkart, and more to get the best deals on your favorite products.
                </p>
                <SearchForm />
              </div>
            </div>
          </section>
  )
}


