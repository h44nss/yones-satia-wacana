import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com/gallery";

export const metadata: Metadata = {
  title: "Gallery & Facilities | PT Yones Satiya Wacana",
  description:
    "View photos and videos of PT Yones Satiya Wacana's palm oil processing facilities, plantation operations, and export logistics — showcasing our international-standard infrastructure.",
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
  openGraph: {
    title: "Gallery & Facilities | PT Yones Satiya Wacana",
    description:
      "View photos and videos of our palm oil processing facilities, plantation operations, and export logistics.",
    url: `${BASE_URL}/gallery`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gallery — PT Yones Satiya Wacana Facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery & Facilities | PT Yones Satiya Wacana",
    description:
      "View photos and videos of our palm oil processing facilities, plantation operations, and export logistics.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
