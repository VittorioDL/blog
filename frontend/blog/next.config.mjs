/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Configurazione per sviluppo locale
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1338',
        pathname: '/uploads/**',
      },
      // // Configurazione per Strapi su Render (o altro hosting)
      // {
      //   protocol: 'https',
      //   hostname: 'your-strapi-app.onrender.com', // Sostituisci con il tuo URL Strapi
      //   pathname: '/uploads/**',
      // },
      
    ],
    // Formati moderni per ottimizzazione immagini
    formats: ['image/avif', 'image/webp'],
    // Limite di dimensioni (in byte)
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Abilita React Strict Mode per migliorare la qualità del codice
  reactStrictMode: true,
  // Configurazione SEO avanzata
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
    ];
  },
  // Reindirizzamento per trailing slash (SEO best practice)
  trailingSlash: true,
  // Configurazione per generazione static (ISR)
  experimental: {
    isrMemoryCacheSize: 0, // Disabilita limiti cache per ISR
  },
  // Abilita compressione Brotli e Gzip
  compress: true,
  // Variabili d'ambiente esposte al client
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }
};

export default nextConfig;