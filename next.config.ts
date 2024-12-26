import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Example: https://a.espncdn.com/i/teamlogos/ncaa/500/66.png
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.espncdn.com',
        port: '',
        pathname: '/i/teamlogos/ncaa/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // appDir: true,
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/66', // Default to ISU
      permanent: false,
    },
  ],
};

export default nextConfig;
