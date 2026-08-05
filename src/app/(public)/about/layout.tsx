import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Pelajari lebih lanjut tentang sejarah, visi, misi, dan komitmen PT Yones Satiya Wacana sebagai eksportir kelapa sawit terpercaya.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
