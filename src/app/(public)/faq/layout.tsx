import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com/faq";

export const metadata: Metadata = {
  title: "FAQ | Palm Oil Export Questions Answered",
  description:
    "Find answers to frequently asked questions about PT Yones Satiya Wacana's CPO export procedures, product specifications, certifications (RSPO, ISO), payment terms, and partnership opportunities.",
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: "FAQ | Palm Oil Export Questions Answered — PT Yones Satiya Wacana",
    description:
      "Find answers to frequently asked questions about CPO export procedures, product specifications, certifications, payment terms, and partnership opportunities.",
    url: `${BASE_URL}/faq`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FAQ — PT Yones Satiya Wacana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Palm Oil Export Questions Answered",
    description:
      "Find answers about CPO export procedures, product specifications, certifications, and partnership opportunities.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
