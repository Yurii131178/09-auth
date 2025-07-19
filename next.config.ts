import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ac.goit.global' },
      { protocol: 'https', hostname: 'aliiev-lomach.com' },
      { protocol: 'https', hostname: 'www.pixabay.com' },
      { protocol: 'https', hostname: 'www.freepik.com' },
    ],
  },
};

export default nextConfig;
