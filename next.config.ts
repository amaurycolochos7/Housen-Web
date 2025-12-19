import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Attempt to disable turbo via experimental flags if needed
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

