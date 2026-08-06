import { createClient } from "@/utils/supabase/server";
import PortfolioTable from "@/components/portfolio/PortfolioTable";

export const revalidate = 3600; // revalidate cache setiap 1 jam

const BASE_URL = "https://yonessatiyawacana.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/portfolio#webpage`,
      url: `${BASE_URL}/portfolio`,
      name: "Export Portfolio | PT Yones Satiya Wacana",
      description:
        "Explore PT Yones Satiya Wacana's export track record — shipment history, global business partners, and successful palm oil deliveries to international markets.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      inLanguage: "id",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: `${BASE_URL}/portfolio` },
      ],
    },
  ],
};

export default async function PortfolioPage() {
  const supabase = await createClient();
  const { data: portfolios } = await supabase
    .from("portfolios")
    .select("*")
    .order("export_date", { ascending: false });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
