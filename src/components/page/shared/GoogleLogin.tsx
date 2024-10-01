"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@nextui-org/react"
import React from "react"
import { useSearchParams } from "next/navigation"

const GoogleLogin = () => {
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect")

  return (
    <Button
      onClick={() =>
        signIn("google", { callbackUrl: redirect ? redirect : "/" })
      }
      variant="ghost"
      color="danger"
    >
      Login With Google
    </Button>
  )
}

export default GoogleLogin
