"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("portfolios").select("*").order("export_date", { ascending: false });
      if (data) setPortfolios(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Portofolio Ekspor</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">Rekam jejak pengiriman komoditas dan kesuksesan distribusi kami ke berbagai negara di seluruh dunia.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-slate-200 rounded-[15px] shadow-sm overflow-hidden"
        >
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-slate-600 min-w-[600px]">
                <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 uppercase text-xs font-bold tracking-wider">
                   <tr>
                      <th className="p-6">Tanggal Ekspor</th>
                      <th className="p-6">Negara Tujuan</th>
                      <th className="p-6">Deskripsi Klien</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {loading ? (
                     <tr><td colSpan={3} className="p-10 text-center text-slate-400 font-semibold">Memuat data portofolio...</td></tr>
                   ) : portfolios.length === 0 ? (
                     <tr><td colSpan={3} className="p-10 text-center text-slate-400 font-semibold">Belum ada portofolio pengiriman.</td></tr>
                   ) : portfolios.map((p, i) => (
                     <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-6">{new Date(p.export_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                        <td className="p-6 font-bold text-slate-900">{p.target_country}</td>
                        <td className="p-6">{p.client_description}</td>
                     </tr>
                   ))}
                </tbody>
             </table>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
