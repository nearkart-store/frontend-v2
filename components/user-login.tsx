import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

export function UserLogin() {
  return (
      <div className="flex items-center space-x-4">
          {/* Sign In Button (When Signed Out) */}
          <SignedOut>
              <SignInButton>
                  <div className="relative px-6 py-2 text-nowrap text-white font-bold bg-transparent border border-white/30 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">
                      Sign In
                  </div>
              </SignInButton>
          </SignedOut>

          {/* User Profile Button (When Signed In) */}
          <SignedIn>
              <button className="relative flex text-nowrap items-center justify-center p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <UserButton />
              </button>
          </SignedIn>
      </div>

  )
}

