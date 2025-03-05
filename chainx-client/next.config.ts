import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: [process.env.SERVER_DOMAIN!],
  },

  async rewrites() {
    return [
      {
        source: `/uploads/:path*`,
        destination: `${process.env.IMAGE_URL}/:path*`,
      },
    ]
  },
}

export default nextConfig
