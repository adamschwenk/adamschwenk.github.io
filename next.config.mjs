/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove the repository name since we're using username.github.io
  // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  trailingSlash: true, // Recommended for static exports
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
