import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { decodeToken } from "./helpers"

// auth routes
const authRoutes = ["/login", "register"]
// role base route
type TRole = keyof typeof RoleBasedRoute

const RoleBasedRoute = {
  admin: [/^\/admin-dashboard/],
  driver: [/^\/driver-dashboard/],
  user: [/^\/dashboard/],
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const accessToken = cookies().get("accessToken")?.value
  //   check accessToken have or not

  if (!accessToken) {
    // protecting hybrid routes
    if (authRoutes.includes(pathname)) {
      return NextResponse.next()
    } else {
      console.log("accessToken nai amar vai>>>>", accessToken)
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      )
    }
  }
  // role based authorization ==========================>
  let decodedToken = null
  decodedToken = decodeToken(accessToken as string) as any
  const role = decodedToken?.role

  if (role && RoleBasedRoute[role as TRole]) {
    const routes = RoleBasedRoute[role as TRole]

    if (routes.some((route: any) => pathname.match(route))) {
      return NextResponse.next()
    }
  }

  return NextResponse.redirect(new URL("/", request.url))
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
    "/driver-dashboard/:page*",
  ],
}
