import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://yonessatiyawacana.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | PT Yones Satiya Wacana",
    default: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
  },
  description:
    "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
  keywords: [
    "Palm Oil Supplier Indonesia",
    "Crude Palm Oil Exporter",
    "Indonesian Palm Oil Export",
    "CPO Supplier",
    "Palm Oil Manufacturer Indonesia",
    "Palm Oil Export Company",
    "Minyak Sawit Indonesia",
    "Ekspor CPO",
    "PT Yones Satiya Wacana",
  ],
  authors: [{ name: "PT Yones Satiya Wacana", url: BASE_URL }],
  creator: "PT Yones Satiya Wacana",
  publisher: "PT Yones Satiya Wacana",
  category: "Business",
  applicationName: "PT Yones Satiya Wacana",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
    description:
      "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
    url: BASE_URL,
    siteName: "PT Yones Satiya Wacana",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Yones Satiya Wacana — Global Palm Oil Supplier from Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
    description:
      "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script
          strategy="afterInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'id',
                includedLanguages: 'en,id',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
