/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.kinja-img.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.reuters.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "cdn.benzinga.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "www.stl.news",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
