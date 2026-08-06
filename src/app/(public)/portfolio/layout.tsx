import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com";

export const metadata: Metadata = {
  title: "Export Portfolio | PT Yones Satiya Wacana",
  description:
    "Explore PT Yones Satiya Wacana's export track record — shipment history, global business partners, and successful palm oil deliveries to international markets across multiple continents.",
  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },
  openGraph: {
    title: "Export Portfolio | PT Yones Satiya Wacana",
    description:
      "Explore our export track record — shipment history, global partners, and successful palm oil deliveries to international markets.",
    url: `${BASE_URL}/portfolio`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Export Portfolio — PT Yones Satiya Wacana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Portfolio | PT Yones Satiya Wacana",
    description:
      "Explore our export track record — shipment history, global partners, and successful palm oil deliveries.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
