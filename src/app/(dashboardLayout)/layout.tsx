import React, { ReactNode } from "react"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      Main Dashboard Layout
      <div>{children}</div>
    </>
  )
}

export default DashboardLayout
