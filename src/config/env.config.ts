const config = {
  next_auth_secret: process.env.NEXTAUTH_SECRET,
  github_id: process.env.GITHUB_ID,
  github_secret: process.env.GITHUB_SECRET,
  google_client: process.env.GOOGLE_CLIENT_ID,
  google_secret: process.env.GOOGLE_CLIENT_SECRET,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
}
export default config
