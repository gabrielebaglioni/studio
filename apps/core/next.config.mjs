/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // basePath: Required for Turborepo microfrontends gateway mode
  // In gateway mode (port 3024), the proxy routes /core to this app
  // In standalone mode (port 3001), basePath is ignored when accessing directly
  basePath: process.env.NODE_ENV === 'production' ? undefined : '/core',
  // Rewrites: Map requests from /core/_next/* to /_next/* internally
  // This ensures static assets are served correctly through the proxy
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [];
    }
    return {
      beforeFiles: [
        {
          source: '/core/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    };
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xnuhligbmtlwrzemwgmv.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
