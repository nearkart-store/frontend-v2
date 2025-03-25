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
    <div>
          <SignedOut>
              <SignInButton>
                  <div className="text-white border p-2 px-4 hover:bg-white hover:text-black font-bold rounded cursor-pointer">
                      SignIn
                  </div>
              </SignInButton>
          </SignedOut>

          <SignedIn>
              <button className=" text-white font-bold rounded">
                  <UserButton />
              </button>
          </SignedIn>
    </div>
  )
}

