"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Package, Globe, Video } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, portfolios: 0, videos: 0 });
  const supabase = createClient();

  useEffect(() => {
    async function loadStats() {
      const p = await supabase.from("products").select("id", { count: "exact", head: true });
      const pf = await supabase.from("portfolios").select("id", { count: "exact", head: true });
      const v = await supabase.from("gallery_videos").select("id", { count: "exact", head: true });
      setStats({ products: p.count || 0, portfolios: pf.count || 0, videos: v.count || 0 });
    }
    loadStats();
  }, [supabase]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-2">Ringkasan statistik konten website PT Yones Satiya Wacana.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[15px] border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-[15px] bg-[#e0f2fe] text-blue-700 flex items-center justify-center">
            <Package className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.products}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Total Produk</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[15px] border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-[15px] bg-green-50 text-green-700 flex items-center justify-center">
            <Globe className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.portfolios}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Total Portofolio</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-[15px] border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 rounded-[15px] bg-red-50 text-red-700 flex items-center justify-center">
            <Video className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-bold text-slate-900">{stats.videos}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Total Video</div>
          </div>
        </div>
      </div>
    </div>
  );
}
