import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // basePath: Required for Turborepo microfrontends
  // Ensures assets and routes are correctly prefixed with /support
  // In production, Vercel handles this automatically
  basePath: process.env.NODE_ENV === 'production' ? undefined : '/support',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xnuhligbmtlwrzemwgmv.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

