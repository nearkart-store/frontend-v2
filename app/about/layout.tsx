import React from "react"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
    title: "Browse Products - NearKart",
    description: "Search and explore products across categories, brands, and price ranges.",
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cn("min-h-screen bg-white text-gray-900")}>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4">{children}</main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
