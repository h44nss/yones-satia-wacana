import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PT Yones Satiya Wacana',
    short_name: 'Yones Satiya',
    description:
      'PT Yones Satiya Wacana — Indonesian Crude Palm Oil (CPO) Exporter and Global Palm Oil Supplier.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f9fb',
    theme_color: '#1e3a5f',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
