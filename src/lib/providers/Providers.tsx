import React, { ReactNode } from "react"
import { NextUIProvider } from "@nextui-org/system"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <div className="mx-auto container">{children}</div>
        </NextThemesProvider>
      </NextUIProvider>
    </>
  )
}

export default Providers
