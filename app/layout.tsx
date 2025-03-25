import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quick Buy - Price Comparison",
  description: "Find the best deals across multiple e-commerce platforms",
  keywords: ["e-commerce", "shopping", "deals", "price comparison"],  
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      </html>
    </ClerkProvider>
  )
}



import './globals.css'