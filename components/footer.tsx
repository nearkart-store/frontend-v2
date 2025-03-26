import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">NearKart</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Find the best deals across multiple e-commerce platforms.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=electronics"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=clothing"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=home-kitchen"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=beauty"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Beauty
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=books"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300   dark:text-gray-400 dark:hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-300  hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-300 dark:text-gray-400 space-y-2">
              <p>123 Comparison Street</p>
              <p>Dealsville, DS 12345</p>
              <p>Email: info@Nearkart.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-300 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nearkart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

