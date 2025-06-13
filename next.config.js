/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // This ensures that all routes are handled properly
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
      },
    ];
  },
}

module.exports = nextConfig 