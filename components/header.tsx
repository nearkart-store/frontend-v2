"use client"

import Link from "next/link"
import { useState } from "react"
import { SearchForm } from "./search-form"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Heart, User } from "lucide-react"
import { UserLogin } from "./user-login"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Category", href: "/products?category" },
  ]

  return (
    <header className="bg-gray-950 text-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold ">Nearkart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-white rounded-full px-6 py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-primary dark:hover:text-blue-400 font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchForm minimal />
            {/* <ModeToggle /> */}
            {/* <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button> */}
            {/* <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button> */}
            <UserLogin />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <SearchForm minimal />
            <nav className="mt-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="sm" className="flex-1">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

