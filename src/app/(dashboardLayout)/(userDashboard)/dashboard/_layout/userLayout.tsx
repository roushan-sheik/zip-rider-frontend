"use client"

import { SidebarWrapper } from "@/components/sidebar/UserSidebar"
import React, { ReactNode } from "react"

const UserLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  console.log("Log inside layout client")
  return (
    <section className="flex">
      <SidebarWrapper></SidebarWrapper>
      <div>{children}</div>
      <h2>Nav</h2>
    </section>
  )
}

export default UserLayout
