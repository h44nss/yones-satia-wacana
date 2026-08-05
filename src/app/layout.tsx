import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PT Yones Satiya Wacana",
    default: "PT Yones Satiya Wacana - Global Palm Oil & CPO Supplier",
  },
  description: "PT Yones Satiya Wacana is a trusted global supplier and exporter of high-quality Crude Palm Oil (CPO) and its derivatives from Indonesia.",
  keywords: ["CPO", "Palm Oil", "Export", "Indonesia", "Minyak Sawit", "Yones Satiya Wacana", "Supplier", "Agriculture"],
  openGraph: {
    title: "PT Yones Satiya Wacana - Global Palm Oil Supplier",
    description: "Trusted exporter of high-quality Crude Palm Oil (CPO) and its derivatives from Indonesia to the world.",
    url: "https://yonessatiyawacana.com",
    siteName: "PT Yones Satiya Wacana",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
