import { createClient } from "@/utils/supabase/server";
import PortfolioTable from "@/components/portfolio/PortfolioTable";

export const revalidate = 3600; // revalidate cache setiap 1 jam

export const metadata = {
  title: "Portofolio Ekspor",
  description: "Rekam jejak pengiriman komoditas dan kesuksesan distribusi kami ke berbagai negara di seluruh dunia.",
};

export default async function PortfolioPage() {
  const supabase = await createClient();
  const { data: portfolios } = await supabase
    .from("portfolios")
    .select("*")
    .order("export_date", { ascending: false });

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Portofolio Ekspor</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Rekam jejak pengiriman komoditas dan kesuksesan distribusi kami ke berbagai negara di seluruh dunia.
          </p>
        </div>

        <PortfolioTable portfolios={portfolios ?? []} />
      </div>
    </div>
  );
}
