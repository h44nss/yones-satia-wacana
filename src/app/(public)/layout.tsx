import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] selection:bg-slate-200">
        <Navbar />
        <main className="flex-grow w-full mt-20">
          {children}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
