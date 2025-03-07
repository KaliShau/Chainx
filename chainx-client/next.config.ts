import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    SERVER_URL: process.env.SERVER_URL,
    APP_DOMAIN: process.env.APP_DOMAIN
  },
  images: {
    remotePatterns: [{ hostname: process.env.SERVER_URL as string }]
  },

  async rewrites() {
    return [
      {
        source: `/uploads/:path*`,
        destination: `${process.env.SERVER_URL}/uploads/:path*`
      }
    ]
  }
}

export default nextConfig
