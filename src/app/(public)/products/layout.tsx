import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Produk",
  description: "Eksplorasi berbagai produk turunan minyak sawit mentah (CPO) berkualitas ekspor global dari PT Yones Satiya Wacana.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
