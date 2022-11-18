/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "tailwindui.com", "192.168.113.228"],
  },
};

module.exports = nextConfig;
