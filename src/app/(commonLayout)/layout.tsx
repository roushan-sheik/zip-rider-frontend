import NavBar from "@/components/page/shared/Navbar"
import React, { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <>{children}</>
    </div>
  )
}

export default CommonLayout
