// Server components untuk konten statis — tidak ada JS yang dikirim ke client
// Hanya animasi (framer-motion) yang butuh "use client"
import Image from "next/image";
import Link from "next/link";
import { HeroAnimWrapper, SectionAnimWrapper, CardAnimWrapper } from "./HomeAnimWrappers";
import { InquiryForm } from "./InquiryForm";

/* ── Hero ── */
export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
      <HeroAnimWrapper>
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          AGRIBISNIS INDONESIA UNTUK PASAR GLOBAL
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
          Mitra Terpercaya <br /> Ekspor Minyak Sawit <br /> Berkualitas Global
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
          PT Yones Satiya Wacana menghadirkan produk agribisnis premium yang bersumber secara etis dan
          berkelanjutan untuk pasar internasional. Keandalan logistik dan standar tinggi jadi prioritas.
        </p>
        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="bg-blue-900 text-white px-6 py-3.5 rounded-[15px] font-semibold hover:bg-blue-950 transition-colors text-sm flex items-center gap-2"
          >
            Hubungi Kami <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/products"
            className="bg-white border border-slate-300 text-slate-900 px-6 py-3.5 rounded-[15px] font-semibold hover:bg-slate-50 transition-colors text-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-blue-700" /> Lihat Detail Produk
          </Link>
        </div>
      </HeroAnimWrapper>

      <SectionAnimWrapper className="h-[500px] relative" delay={0.1}>
        <Image
          src="/images/hero.png"
          alt="Palm oil plantation in Indonesia — PT Yones Satiya Wacana export operations"
          fill
          priority
          className="object-cover rounded-[15px] shadow-sm"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </SectionAnimWrapper>
    </section>
  );
}

/* ── Stats ── */
export function StatsSection() {
  const stats = [
    { value: "2015", label: "Berdiri Sejak" },
    { value: "Global", label: "Jangkauan Pasar" },
    { value: "Premium", label: "Kualitas Produk" },
    { value: "ISO", label: "Standar Sertifikasi" },
  ];
  return (
    <SectionAnimWrapper className="border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
        {stats.map((s) => (
          <div key={s.label} className="space-y-1">
            <div className="text-3xl font-bold text-slate-900">{s.value}</div>
            <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </SectionAnimWrapper>
  );
}

/* ── Intro ── */
export function IntroSection() {
  return (
    <SectionAnimWrapper className="max-w-7xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
      <div className="h-[400px] relative">
        <Image
          src="/images/factory.png"
          alt="PT Yones Satiya Wacana crude palm oil processing facility in Indonesia"
          fill
          className="object-cover rounded-[15px] border border-slate-200"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-6">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">TENTANG KAMI</div>
        <h2 className="text-3xl font-bold text-slate-900 leading-snug max-w-lg">
          Integritas dalam Setiap Tetes, Kriteria Utama untuk Pasar Ekspor.
        </h2>
        <p className="text-slate-600 leading-relaxed text-sm">
          PT Yones Satiya Wacana adalah perusahaan agribisnis Indonesia yang bergerak di bidang ekspor-impor
          komoditas, menghadirkan produk premium yang bersumber secara etis dan berkelanjutan untuk pasar
          internasional. Didirikan pada 2015, perusahaan berkomitmen pada integritas, keberlanjutan, dan
          keunggulan profesional.
        </p>
        <div className="pt-2">
          <Link href="/about" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1">
            Pelajari lebih lanjut &rarr;
          </Link>
        </div>
      </div>
    </SectionAnimWrapper>
  );
}

/* ── Keunggulan ── */
export function KeunggulanSection() {
  const items = [
    { title: "Standar Internasional", desc: "Menyediakan minyak sawit dan turunannya dengan standar dan mutu internasional yang konsisten.", icon: "SI" },
    { title: "Solusi Logistik", desc: "Memberikan solusi logistik yang aman dan efisien untuk pengiriman domestik maupun internasional.", icon: "SL" },
    { title: "Kemitraan Strategis", desc: "Membangun kemitraan strategis jangka panjang dengan buyer dan mitra di seluruh dunia.", icon: "KS" },
    { title: "Kontribusi Ekonomi", desc: "Berkontribusi pada pertumbuhan ekonomi Indonesia melalui perdagangan komoditas global.", icon: "KE" },
  ];

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <SectionAnimWrapper className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Keunggulan Kemitraan Kami</h2>
          <p className="text-slate-600 text-sm">Fokus utama kami adalah menyediakan minyak sawit berkualitas tinggi bagi pasar global.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <CardAnimWrapper key={item.title} delay={i * 0.1}>
              <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center font-bold text-xs rounded-[15px]">
                {item.icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </CardAnimWrapper>
          ))}
        </div>
      </SectionAnimWrapper>
    </section>
  );
}

/* ── Produk Preview ── */
export function ProdukPreviewSection() {
  return (
    <SectionAnimWrapper className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">Produk Kami</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 grid md:grid-cols-2 gap-10 items-center rounded-[15px] shadow-sm group">
        <div className="h-[250px] bg-slate-100 border border-slate-200 overflow-hidden relative rounded-[15px]">
          <Image
            src="/images/product.png"
            alt="Crude Palm Oil (CPO) and palm oil derivatives products by PT Yones Satiya Wacana"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">KATEGORI PRODUK</div>
          <h3 className="text-2xl font-bold text-slate-900">Minyak Nabati &amp; Turunannya</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Kami menyediakan berbagai produk minyak sawit berkualitas tinggi dan turunannya untuk kebutuhan industri maupun konsumsi di pasar global.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1">
              Kirim Inquiry Produk &rarr;
            </Link>
          </div>
        </div>
      </div>
    </SectionAnimWrapper>
  );
}

/* ── CTA / Inquiry Form ── */
export function InquirySection() {
  return (
    <SectionAnimWrapper className="bg-white border-t border-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-900 leading-snug">Mulai Kemitraan Bersama Kami</h2>
          <p className="text-slate-600 leading-relaxed max-w-md text-sm">
            Unduh brosur perusahaan kami untuk informasi lebih detail. Atau, kirimkan form di samping untuk mendiskusikan kebutuhan komoditas Anda secara langsung.
          </p>
          <div className="pt-4">
            <button className="border border-slate-300 text-slate-900 px-6 py-3 rounded-[15px] font-semibold hover:bg-slate-50 transition-colors text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Company Profile
            </button>
          </div>
        </div>
        <div className="bg-white p-8 border border-slate-200 rounded-[15px] shadow-sm">
          <h3 className="font-bold text-slate-900 mb-6 text-lg">Kirim Form Inquiry</h3>
          <InquiryForm />
        </div>
      </div>
    </SectionAnimWrapper>
  );
}
