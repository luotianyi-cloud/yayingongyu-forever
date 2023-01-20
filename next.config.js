/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: process.env.STATIC_MODE === 'true',
  }
}

module.exports = nextConfig
