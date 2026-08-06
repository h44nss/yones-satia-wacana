import { createClient } from "@/utils/supabase/server";
import VideoGrid from "@/components/gallery/VideoGrid";

export const revalidate = 3600; // revalidate cache setiap 1 jam

const BASE_URL = "https://yonessatiyawacana.com/gallery";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/gallery#webpage`,
      url: `${BASE_URL}/gallery`,
      name: "Gallery & Facilities | PT Yones Satiya Wacana",
      description:
        "View photos and videos of PT Yones Satiya Wacana's palm oil processing facilities, plantation operations, and export logistics.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      inLanguage: "id",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Gallery", item: `${BASE_URL}/gallery` },
      ],
    },
  ],
};

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data: videos } = await supabase
    .from("gallery_videos")
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
    </>
  );
}
