"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
      if (data) setProducts(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Katalog Produk</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">Kami menyediakan minyak sawit mentah (CPO) dan berbagai produk turunannya dengan standar kualitas ekspor internasional.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {loading ? (
             <div className="col-span-3 text-center text-slate-500 font-semibold py-10">Memuat katalog produk...</div>
          ) : products.length === 0 ? (
             <div className="col-span-3 text-center text-slate-500 font-semibold py-10">Katalog produk belum tersedia saat ini.</div>
          ) : (
            products.map((item, i) => (
             <motion.div 
               key={item.id} 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border border-slate-200 p-6 rounded-[15px] space-y-6 shadow-sm hover:-translate-y-1 transition-transform group flex flex-col"
             >
               <div className="h-48 bg-slate-100 rounded-[15px] overflow-hidden border border-slate-200 relative shrink-0">
                 <img src={item.image_url || "/images/product.png"} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="space-y-3 flex-grow">
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">MINYAK NABATI</div>
                 <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                 <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                   {item.description}
                 </p>
               </div>
               <div className="pt-2">
                 <Link href="/contact" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1">
                   Inquiry Produk Ini &rarr;
                 </Link>
               </div>
             </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
