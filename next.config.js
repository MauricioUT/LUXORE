/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: false,
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
          pathname: '/luxore-img/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;