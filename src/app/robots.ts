import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Mencegah Google meng-index halaman Admin Panel
    },
    sitemap: 'https://yonessatiyawacana.com/sitemap.xml',
  };
}
