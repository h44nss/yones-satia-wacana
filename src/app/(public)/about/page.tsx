import Link from 'next/link';

const BASE_URL = "https://yonessatiyawacana.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/about#webpage`,
      url: `${BASE_URL}/about`,
      name: "About PT Yones Satiya Wacana | Palm Oil Export Company",
      description:
        "Learn about PT Yones Satiya Wacana — an Indonesian palm oil export company established in 2015. Discover our vision, mission, and commitment to sustainable CPO supply chains.",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "id",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-[#f7f9fb] min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">Membangun Kepercayaan di Setiap Tetesan</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sejak 2015, PT Yones Satiya Wacana telah bertransformasi dari pemain lokal ke skala internasional dengan jejak global, menjangkau mitrak bisnis di berbagai benua dengan jaminan mutu kelapa sawit premium.
          </p>
        </div>
      </section>

      {/* Perjalanan Kami & Visi Misi */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 bg-white p-8 md:p-12 border border-slate-200 rounded-[15px] space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Perjalanan Kami</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>Berawal dari pengepul komoditas kecil menengah, PT Yones Satiya Wacana dirintis untuk menjembatani antara perkebunan kelapa sawit Indonesia dengan kebutuhan global.</p>
            <p>Melewati pasang surut industri, kami terus memperbaiki kualitas penyulingan (refining) dan menjaga rantai pasok dari perkebunan hingga pelabuhan keberangkatan, memastikan semua standar lingkungan terpenuhi.</p>
          </div>
        </div>
        <div className="md:col-span-5 space-y-6">
          <div className="bg-blue-900 text-white p-8 rounded-[15px] space-y-4 h-1/2 flex flex-col justify-center shadow-sm">
            <h3 className="text-xl font-bold">Visi</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Menjadi gerbang utama untuk komoditas sawit Indonesia ke pasar global, diakui karena kualitas, dan praktik berkelanjutan.
            </p>
          </div>
          <div className="bg-[#e0f2fe] p-8 rounded-[15px] space-y-4 h-[calc(50%-1.5rem)] flex flex-col justify-center border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Misi</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="text-blue-700">&bull;</span> Menyediakan produk berkualitas tinggi.</li>
              <li className="flex gap-2"><span className="text-blue-700">&bull;</span> Menjaga integritas operasional.</li>
              <li className="flex gap-2"><span className="text-blue-700">&bull;</span> Mendukung praktik pertanian berkelanjutan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Perusahaan */}
      <section className="border-t border-slate-200 bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Nilai-Nilai Perusahaan</h2>
            <p className="text-slate-500 text-sm">Prinsip dasar yang menjadi pedoman operasional PT Yones Satiya Wacana.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-200 rounded-[15px] space-y-4 bg-white shadow-sm">
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-[15px] flex items-center justify-center text-slate-900 font-bold text-lg">I</div>
              <h3 className="text-xl font-bold text-slate-900">Integritas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Mengedepankan kejujuran dan transparansi dalam setiap transaksi bisnis.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-[15px] space-y-4 bg-white shadow-sm">
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-[15px] flex items-center justify-center text-slate-900 font-bold text-lg">K</div>
              <h3 className="text-xl font-bold text-slate-900">Keberlanjutan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Komitmen untuk mendukung lingkungan melalui praktik pasok yang ramah.</p>
            </div>
            <div className="p-8 border border-slate-200 rounded-[15px] space-y-4 bg-white shadow-sm">
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-[15px] flex items-center justify-center text-slate-900 font-bold text-lg">P</div>
              <h3 className="text-xl font-bold text-slate-900">Keunggulan Profesional</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Dedikasi tanpa kompromi untuk mencapai standar operasional global.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Jejak Langkah Kami */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Jejak Langkah Kami</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
             <div className="space-y-4 relative">
                <div className="w-4 h-4 bg-blue-700 rounded-full mx-auto relative z-10"></div>
                <div className="absolute top-2 left-[50%] w-full h-[1px] bg-slate-300"></div>
                <div className="font-bold text-slate-900">2015</div>
                <div className="text-xs text-slate-500">Berdiri di Jakarta, Indonesia</div>
             </div>
             <div className="space-y-4 relative">
                <div className="w-4 h-4 bg-blue-700 rounded-full mx-auto relative z-10"></div>
                <div className="absolute top-2 left-[50%] w-full h-[1px] bg-slate-300"></div>
                <div className="font-bold text-slate-900">2018</div>
                <div className="text-xs text-slate-500">Ekspor Perdana ke Asia Timur</div>
             </div>
             <div className="space-y-4 relative">
                <div className="w-4 h-4 bg-blue-700 rounded-full mx-auto relative z-10"></div>
                <div className="absolute top-2 left-[50%] w-full h-[1px] bg-slate-300"></div>
                <div className="font-bold text-slate-900">2021</div>
                <div className="text-xs text-slate-500">Sertifikasi ISO dan Ekspansi Global</div>
             </div>
             <div className="space-y-4 relative">
                <div className="w-4 h-4 bg-blue-900 rounded-full mx-auto relative z-10 ring-4 ring-slate-200"></div>
                <div className="font-bold text-slate-900">Present</div>
                <div className="text-xs text-slate-500">Menjadi pemain kunci dalam industri</div>
             </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
