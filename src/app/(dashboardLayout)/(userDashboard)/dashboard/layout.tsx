import React, { ReactNode } from "react"
import UserLayout from "./_layout/userLayout"

const UserDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  )
}

export default UserDashboardLayout
