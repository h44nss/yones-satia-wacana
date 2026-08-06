import { createClient } from "@/utils/supabase/server";
import VideoGrid from "@/components/gallery/VideoGrid";

export const revalidate = 3600; // revalidate cache setiap 1 jam

export const metadata = {
  title: "Galeri Video",
  description: "Dokumentasi operasional, fasilitas pabrik, dan proses produksi PT Yones Satiya Wacana.",
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: videos } = await supabase
    .from("gallery_videos")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Galeri Video</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Dokumentasi operasional, fasilitas pabrik, dan proses produksi PT Yones Satiya Wacana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <VideoGrid videos={videos ?? []} />
        </div>
      </div>
    </div>
  );
}
