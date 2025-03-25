"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import type { Review } from "@/lib/types"

interface ProductReviewsProps {
  reviews: Review[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  const [visibleReviews, setVisibleReviews] = useState(3)

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length))
  }

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  // Calculate rating distribution
  const ratingDistribution = Array(5).fill(0)
  reviews.forEach((review) => {
    ratingDistribution[5 - review.rating]++
  })

  return (
    <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Customer Reviews</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-2">{averageRating.toFixed(1)}</div>
          <div className="flex items-center mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Based on {reviews.length} reviews</div>
        </div>

        <div className="col-span-2">
          <div className="space-y-2">
            {ratingDistribution.map((count, index) => {
              const stars = 5 - index
              const percentage = (count / reviews.length) * 100

              return (
                <div key={stars} className="flex items-center">
                  <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
                    {stars} star{stars !== 1 ? "s" : ""}
                  </div>
                  <div className="flex-1 h-4 mx-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <div className="w-9 text-sm text-gray-600 dark:text-gray-400">{count}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={review.userAvatar || "/placeholder.svg?height=40&width=40"}
                    alt={review.userName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{review.userName}</h4>
                  <div className="flex items-center">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </div>
            </div>

            <h5 className="font-medium mb-2">{review.title}</h5>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{review.content}</p>

            {review.images && review.images.length > 0 && (
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
                {review.images.map((image, i) => (
                  <div key={i} className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Review image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span className="mr-4">Was this review helpful?</span>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ThumbsUp className="w-4 h-4 mr-1" />
                Yes ({review.helpfulCount})
              </Button>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <ThumbsDown className="w-4 h-4 mr-1" />
                No
              </Button>
            </div>
          </div>
        ))}
      </div>

      {visibleReviews < reviews.length && (
        <Button variant="outline" className="w-full mt-6" onClick={loadMoreReviews}>
          Load More Reviews
        </Button>
      )}
    </div>
  )
}

