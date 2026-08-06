"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Video = {
  id: string;
  title: string;
  youtube_id: string;
};

export default function VideoGrid({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <div className="col-span-2 text-center text-slate-500 font-semibold py-10">
        Belum ada video di galeri.
      </div>
    );
  }

  return (
    <>
      {videos.map((vid, i) => (
        <motion.div
          key={vid.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-slate-200 p-6 md:p-8 rounded-[15px] space-y-6 shadow-sm"
        >
          <div className="aspect-video bg-slate-900 rounded-[15px] overflow-hidden relative group cursor-pointer border border-slate-800 flex items-center justify-center">
            <a
              href={`https://www.youtube.com/watch?v=${vid.youtube_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
              aria-label={`Tonton video: ${vid.title}`}
            />
            <Image
              src={`https://img.youtube.com/vi/${vid.youtube_id}/maxresdefault.jpg`}
              alt={`Thumbnail ${vid.title}`}
              fill
              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute w-16 h-16 bg-red-600 rounded-[15px] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform z-[5]">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-lg">{vid.title}</h3>
            <p className="text-sm text-slate-500">Melihat langsung standar kualitas tinggi di fasilitas utama kami.</p>
          </div>
        </motion.div>
      ))}
    </>
  );
}
