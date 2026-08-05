import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanya Jawab (FAQ)",
  description: "Kumpulan jawaban atas pertanyaan yang sering diajukan seputar prosedur ekspor, kargo, kualitas CPO, dan sertifikasi produk kami.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
