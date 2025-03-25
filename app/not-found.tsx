import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      
      <Image  
        src="/not-found.svg"
        alt="404 Not Found"
        width={400}
        height={300}
      />
      <div className="pt-8">
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
      
    </div>
  )
}

