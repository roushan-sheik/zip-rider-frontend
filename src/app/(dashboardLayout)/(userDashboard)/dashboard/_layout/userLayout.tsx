"use client"

import { NavbarWrapper } from "@/components/dashboardNavbar/dashboardNavbar"
import { SidebarWrapper } from "@/components/sidebar/UserSidebar"
import React, { ReactNode } from "react"

const UserLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  console.log("Log inside layout client")
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>

      <NavbarWrapper>
        <>{children}</>
      </NavbarWrapper>
    </section>
  )
}

export default UserLayout
