"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function GalleryPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("gallery_videos").select("*").order("created_at", { ascending: false });
      if (data) setVideos(data);
      setLoading(false);
    }
    load();
  }, [supabase]);

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Galeri Video</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">Dokumentasi operasional, fasilitas pabrik, dan proses produksi PT Yones Satiya Wacana.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {loading ? (
             <div className="col-span-2 text-center text-slate-500 font-semibold py-10">Memuat galeri video...</div>
          ) : videos.length === 0 ? (
             <div className="col-span-2 text-center text-slate-500 font-semibold py-10">Belum ada video di galeri.</div>
          ) : videos.map((vid, i) => (
             <motion.div 
               key={vid.id} 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white border border-slate-200 p-6 md:p-8 rounded-[15px] space-y-6 shadow-sm"
             >
               <div className="aspect-video bg-slate-900 rounded-[15px] overflow-hidden relative group cursor-pointer border border-slate-800 flex items-center justify-center">
                  <a href={`https://www.youtube.com/watch?v=${vid.youtube_id}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
                  <img src={`https://img.youtube.com/vi/${vid.youtube_id}/maxresdefault.jpg`} alt="Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute w-16 h-16 bg-red-600 rounded-[15px] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                     <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
               </div>
               <div className="space-y-2">
                 <h3 className="font-bold text-slate-900 text-lg">{vid.title}</h3>
                 <p className="text-sm text-slate-500">Melihat langsung standar kualitas tinggi di fasilitas utama kami.</p>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
