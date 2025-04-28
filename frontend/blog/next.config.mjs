/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        // For local development
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1338',
          pathname: '/uploads/**',
        },
        // For production
        // {
        //   protocol: 'https',
        //   hostname: 'your-production-domain.com',
        //   pathname: '/uploads/**',
        // }
      ],
    },
  }
  
  export default nextConfig