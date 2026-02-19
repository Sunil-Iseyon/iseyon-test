/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Legacy / non-existent pages → canonical destinations
      { source: '/request-demo', destination: '/contact', permanent: true },
      { source: '/get-in-touch', destination: '/contact', permanent: true },
      // Bare insight slugs → proper /insights/* path
      { source: '/business-intelligence',   destination: '/insights/business-intelligence',   permanent: true },
      { source: '/internal-applications',   destination: '/insights/internal-applications',   permanent: true },
      { source: '/support-communities',     destination: '/insights/support-communities',     permanent: true },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/feed.xml',
        destination: '/rss',
      },
    ]
  },
}

export default nextConfig
