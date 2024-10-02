"use client"

import React, { ReactNode } from "react"

const UserLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  console.log("Log inside layout client")
  return (
    <section className="flex">
      <h2>Side</h2>
      <div>{children}</div>
      <h2>Nav</h2>
    </section>
  )
}

export default UserLayout
