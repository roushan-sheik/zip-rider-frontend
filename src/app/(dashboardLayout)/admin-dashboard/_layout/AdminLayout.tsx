import { NavbarWrapper } from "@/components/dashboardNavbar/dashboardNavbar"
import { AdminSidebarWrapper } from "@/components/sidebar/adminSidebar"
import React, { ReactNode } from "react"

const AdminLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  )
}

export default AdminLayout
