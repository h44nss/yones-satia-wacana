import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Kompresi gzip/brotli otomatis untuk semua response
  compress: true,

  // Optimasi gambar — tambahkan WebP & AVIF sebagai format output
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache 30 hari
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },

  // HTTP security & cache headers
  async headers() {
    return [
      {
        // Static assets — cache agresif 1 tahun
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Semua halaman publik — security headers
        source: "/((?!admin).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Logging minimal di production
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
