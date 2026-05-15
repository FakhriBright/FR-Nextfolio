/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compress: true,

  experimental: {
    scrollRestoration: true,
  },

  poweredByHeader: false,
};

module.exports = nextConfig;