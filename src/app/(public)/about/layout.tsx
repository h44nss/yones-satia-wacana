import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com/about";

export const metadata: Metadata = {
  title: "About PT Yones Satiya Wacana | Palm Oil Export Company",
  description:
    "Learn about PT Yones Satiya Wacana — an Indonesian palm oil export company established in 2015. Discover our vision, mission, and commitment to sustainable CPO supply chains.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About PT Yones Satiya Wacana | Palm Oil Export Company",
    description:
      "Learn about PT Yones Satiya Wacana — an Indonesian palm oil export company established in 2015. Discover our vision, mission, and commitment to sustainable CPO supply chains.",
    url: `${BASE_URL}/about`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Yones Satiya Wacana — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PT Yones Satiya Wacana | Palm Oil Export Company",
    description:
      "Learn about PT Yones Satiya Wacana — an Indonesian palm oil export company established in 2015.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
