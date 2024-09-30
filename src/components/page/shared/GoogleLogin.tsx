"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@nextui-org/react"
import React from "react"

const GoogleLogin = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant="ghost"
      color="danger"
    >
      Login With Google
    </Button>
  )
}

export default GoogleLogin
