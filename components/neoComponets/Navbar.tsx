import React from 'react'
import Link from 'next/link'

import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 lg:px-96 text-xl text-gray-400">
      <Link href="/">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-full" />
            <span className="font-bold text-transparent bg-clip-text bg-gray-200">NEO AI</span>
          </div>
        </div>
        {/* <h1 className="font-bold">NEO AI</h1>
        <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-full" /> */}
      </Link>
      <p className="text-sm">
        {/* developed by <Link href="https://twitter.com/xanmoy" className="text-blue-600">
              Xanmoy

          </Link> */}
        {/* <Link href="https://github.com/xanmoy/sage.git" className="text-blue-600">
             <Github className="rounded-full text-zinc-200 p-1 h-8 w-8" />

          </Link>  */}

      </p>


    </nav>
  )
}

export default Navbar
