import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri & Fasilitas",
  description: "Galeri foto dan video aktivitas operasional, perkebunan kelapa sawit, dan fasilitas produksi standar internasional PT Yones Satiya Wacana.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
