import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // assetPrefix: Required for microfrontends gateway mode
  // Ensures static assets (_next/static/*) are correctly routed through proxy
  // Only in development when served through gateway (port 3024)
  // In production, Vercel handles this automatically
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : '/support',
  // Rewrites to handle asset requests correctly when served through proxy
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [];
    }
    return {
      beforeFiles: [
        {
          source: '/support/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    };
  },
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

