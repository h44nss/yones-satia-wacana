import { createClient } from "@/utils/supabase/server";
import ProductGrid from "@/components/products/ProductGrid";

export const revalidate = 3600; // revalidate cache setiap 1 jam

export const metadata = {
  title: "Katalog Produk",
  description: "Kami menyediakan minyak sawit mentah (CPO) dan berbagai produk turunannya dengan standar kualitas ekspor internasional.",
};

export default async function ProductsPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
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
  );
}
