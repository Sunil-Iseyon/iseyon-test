/** @type {import('next').NextConfig} */

// Content-Security-Policy sources
// - Vercel Analytics injects a script from va.vercel-scripts.com
// - TinaCMS Admin SPA is served from /admin and connects to app.tina.io + content.tinajs.io
// - Google Fonts loaded via next/font/google
// - Inline JSON-LD <script> blocks require 'unsafe-inline' for scripts (or nonce — nonce not used here)
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live https://app.tina.io;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob: https:;
  connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com https://app.tina.io https://content.tinajs.io https://identity.tinajs.io;
  frame-src 'self' https://app.tina.io https://vercel.live;
  frame-ancestors 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`
  .replace(/\n/g, ' ')
  .replace(/\s{2,}/g, ' ')
  .trim()

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ]
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
