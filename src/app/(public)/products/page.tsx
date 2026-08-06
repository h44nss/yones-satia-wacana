import { createClient } from "@/utils/supabase/server";
import ProductGrid from "@/components/products/ProductGrid";

export const revalidate = 3600; // revalidate cache setiap 1 jam

const BASE_URL = "https://yonessatiyawacana.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/products#webpage`,
      url: `${BASE_URL}/products`,
      name: "Palm Oil Products | Crude Palm Oil & Derivatives — PT Yones Satiya Wacana",
      description:
        "Explore PT Yones Satiya Wacana's full catalog of Crude Palm Oil (CPO), RBD Palm Olein, Palm Kernel Oil, and other palm oil derivatives — export-grade quality certified to international standards.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      inLanguage: "id",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Products", item: `${BASE_URL}/products` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Palm Oil Products by PT Yones Satiya Wacana",
      description:
        "Export-grade Crude Palm Oil, RBD Palm Olein, Palm Kernel Oil, and palm oil derivatives from Indonesia.",
      url: `${BASE_URL}/products`,
      provider: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

export default async function ProductsPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#f7f9fb] min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Katalog Produk</h1>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Kami menyediakan minyak sawit mentah (CPO) dan berbagai produk turunannya dengan standar kualitas ekspor internasional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductGrid products={products ?? []} />
          </div>
        </div>
      </div>
    </>
  );
}
