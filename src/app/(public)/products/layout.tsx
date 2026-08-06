import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com/product";

export const metadata: Metadata = {
  title: "Palm Oil Products | Crude Palm Oil & Derivatives",
  description:
    "Explore PT Yones Satiya Wacana's full catalog of Crude Palm Oil (CPO), RBD Palm Olein, Palm Kernel Oil, and other palm oil derivatives — export-grade quality certified to international standards.",
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: "Palm Oil Products | PT Yones Satiya Wacana",
    description:
      "Explore our full catalog of Crude Palm Oil (CPO), RBD Palm Olein, Palm Kernel Oil, and other palm oil derivatives — export-grade quality certified to international standards.",
    url: `${BASE_URL}/products`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Palm Oil Products — PT Yones Satiya Wacana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palm Oil Products | PT Yones Satiya Wacana",
    description:
      "Explore our full catalog of Crude Palm Oil (CPO), RBD Palm Olein, and other palm oil derivatives.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
