/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  // Netlify-specific optimizations
  trailingSlash: false,
  // Production optimizations (swcMinify is default in Next.js 15)
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Netlify handles image optimization
  },
  // Netlify-specific settings to prevent build issues
  generateEtags: false,
  poweredByHeader: false,
  // Disable problematic features for Netlify
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;

