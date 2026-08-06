import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import MaintenancePage from "@/components/MaintenancePage";

async function isMaintenanceMode(): Promise<boolean> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/site_settings?key=eq.maintenance_mode&select=value`,
      {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return false;
    const data = await res.json();
    return Array.isArray(data) && data[0]?.value === "true";
  } catch {
    return false;
  }
}

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const maintenance = await isMaintenanceMode();

  // Mode maintenance: full screen tanpa Navbar/Footer
  if (maintenance) {
    return <MaintenancePage />;
  }

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
