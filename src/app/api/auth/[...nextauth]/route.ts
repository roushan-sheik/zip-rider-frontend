import { authOptions } from "@/utils/authOptions"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import config from "./../../../../config/env.config"
import nexiosInstance from "@/config/nexios.config"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: config.google_client as string,
      clientSecret: config.google_secret as string,
    }),
  ],

  callbacks: {
    // google callback ===========================>
    async signIn({ account, profile }: any) {
      if (!account && !profile) {
        return false
      }
      if (account?.provider === "google") {
        // create user into db
        const response: any = await nexiosInstance.post("/auth/login", {
          name: profile?.name,
          email: profile?.email,
          img: profile?.picture,
        })
        // set accessToken into browser cookie
        if (response.data.data.accessToken && response.data.data.refreshToken) {
          cookies().set("accessToken", response.data.data.accessToken)
          cookies().set("refreshToken", response.data.data.refreshToken)
        }
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: config.next_auth_secret,
})

export { handler as GET, handler as POST }
