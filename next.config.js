/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'randomuser.me'],
  },
  // Webpack configuration to handle problematic dependencies
  webpack: (config) => {
    // Ignore specific problematic dependencies
    config.resolve.alias = {
      ...config.resolve.alias,
      // Add any problematic packages here
    };
    return config;
  },
  // Transpile specific modules
  transpilePackages: ['recharts', 'react-resize-detector'],
}

module.exports = nextConfig
