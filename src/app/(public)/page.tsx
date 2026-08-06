import {
  HeroSection,
  StatsSection,
  IntroSection,
  KeunggulanSection,
  ProdukPreviewSection,
  InquirySection,
} from "@/components/home/HomeSections";
import type { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com";

export const metadata: Metadata = {
  title: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
  description:
    "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
    description:
      "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
    url: BASE_URL,
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
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "PT Yones Satiya Wacana",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 200,
        height: 60,
      },
      description:
        "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
      foundingDate: "2015",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Jend. Sudirman Kav 21",
        addressLocality: "Jakarta",
        postalCode: "12920",
        addressCountry: "ID",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+62-812-3456-7890",
          contactType: "sales",
          availableLanguage: ["Indonesian", "English"],
        },
      ],
      email: "info@yonessatiyawacana.com",
      sameAs: [],
      areaServed: "Worldwide",
      knowsAbout: [
        "Crude Palm Oil",
        "Palm Oil Export",
        "CPO Supply",
        "Agribusiness Indonesia",
        "Palm Oil Derivatives",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "PT Yones Satiya Wacana",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: ["id", "en"],
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "PT Yones Satiya Wacana | Global Palm Oil Supplier from Indonesia",
      description:
        "PT Yones Satiya Wacana is an Indonesian company specializing in the export and supply of high-quality Crude Palm Oil (CPO) and palm oil derivatives for international markets.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "id",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#f7f9fb]">
        <HeroSection />
        <StatsSection />
        <IntroSection />
        <KeunggulanSection />
        <ProdukPreviewSection />
        <InquirySection />
      </div>
    </>
  );
}
