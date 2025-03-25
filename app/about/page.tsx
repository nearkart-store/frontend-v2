"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
    return (
        <div className="relative py-20 px-4 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
                        Welcome to <span className="font-semibold">NearKart</span>, your ultimate eCommerce companion!
                        We leverage cutting-edge AI to provide you with personalized shopping recommendations,
                        helping you discover the best products tailored to your preferences and needs.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-8 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Personalized Shopping
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            We analyze your shopping patterns to recommend products that suit your taste and lifestyle.
                        </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Smart Deals & Offers
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Get real-time updates on discounts and best deals from trusted eCommerce platforms.
                        </p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Seamless Experience
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Our AI-powered engine ensures an intuitive and hassle-free shopping journey.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
