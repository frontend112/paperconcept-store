import { SignedOut } from "@clerk/clerk-react"
import { RedirectToSignIn } from "@clerk/nextjs"
import React from 'react'

const page = () => {
  return (
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  )
}

export default page