import React, { ReactNode } from "react"
import AdminLayout from "./_layout/AdminLayout"

const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminLayout>{children}</AdminLayout>
    </>
  )
}

export default AdminDashboardLayout
