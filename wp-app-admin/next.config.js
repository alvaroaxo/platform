/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['https://sandbox-admin.perfectreward.com'],
  }
}

module.exports = nextConfig
