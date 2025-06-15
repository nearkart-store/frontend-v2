"use client"

import Link from "next/link"
import { useState } from "react"
import { SearchForm } from "./search-form"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Heart, User } from "lucide-react"
import { UserLogin } from "./user-login"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Category", href: "/products?category" },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <span className="text-2xl font-bold ">NearKart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 bg-white rounded-full px-6 py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-primary dark:hover:text-primary font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchForm minimal />
            <ModeToggle />
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
            <UserLogin />
            <Button className="bg-transparent hover:bg-transparent" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <SearchForm minimal />
            <nav className="mt-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 hover:text-primary dark:hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex space-x-4">
              <div className="flex-1">
                <ModeToggle />
               
              </div>
              
              
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

