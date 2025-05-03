/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tuodominio.com',
    generateRobotsTxt: true, // Crea anche robots.txt
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/admin', '/bozza'], // Escludi pagine non pubbliche
  
    // (opzionale) Se vuoi creare sitemap solo per alcune sezioni:
    // additionalPaths: async (config) => [
    //   {
    //     loc: '/personalizzata',
    //     lastmod: new Date().toISOString(),
    //   },
    // ],
  
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
      additionalSitemaps: [
        `${process.env.NEXT_PUBLIC_SITE_URL || 'https://tuodominio.com'}/sitemap.xml`,
      ],
    },
  };
  