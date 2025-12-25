import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // basePath: Required for Turborepo microfrontends
  // Ensures assets and routes are correctly prefixed with /projects
  // In production, Vercel handles this automatically
  basePath: process.env.NODE_ENV === 'production' ? undefined : '/projects',
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

