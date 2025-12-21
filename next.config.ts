import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Best practice: Enable type checking in production
  typescript: {
    ignoreBuildErrors: false,
  },
  // Best practice: Enable ESLint in production
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  watchOptions: {
    ignored: ['**/.#*.ts', '**/next.config.ts'],
  },
};

export default nextConfig;
