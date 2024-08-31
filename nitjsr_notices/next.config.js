/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    //   domains: ['utfs.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nitjsr.ac.in',
          port: ''
        }
      ]
    }
};

module.exports = nextConfig;
