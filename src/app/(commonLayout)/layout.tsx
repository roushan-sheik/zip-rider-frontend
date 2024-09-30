import Footer from "@/components/page/shared/Footer"
import NavBar from "@/components/page/shared/Navbar"
import React, { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <>{children}</>
      <Footer />
    </div>
  )
}

export default CommonLayout
