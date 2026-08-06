import { Metadata } from "next";

const BASE_URL = "https://yonessatiyawacana.com/contact";

export const metadata: Metadata = {
  title: "Contact PT Yones Satiya Wacana | Get a Palm Oil Price Quote",
  description:
    "Contact PT Yones Satiya Wacana for palm oil price quotes, CPO export specifications, B2B partnerships, or bulk supply inquiries. Our team responds promptly to all international inquiries.",
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact PT Yones Satiya Wacana | Get a Palm Oil Price Quote",
    description:
      "Contact us for palm oil price quotes, CPO export specifications, B2B partnerships, or bulk supply inquiries.",
    url: `${BASE_URL}/contact`,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact PT Yones Satiya Wacana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PT Yones Satiya Wacana | Get a Palm Oil Price Quote",
    description:
      "Contact us for palm oil price quotes, CPO export specifications, B2B partnerships, or bulk supply inquiries.",
    images: ["/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
