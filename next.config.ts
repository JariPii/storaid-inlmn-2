import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://randomuser.me/api/portraits/men/32.jpg')],
  },
};

export default nextConfig;
