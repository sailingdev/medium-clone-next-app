/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    // domains: ["images.unsplash.com", "tailwindui.com"],
    domains: ["tailwindui.com"],
  },
};

module.exports = nextConfig;
