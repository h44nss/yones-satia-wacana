"use client";
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function HomePage() {
  const scrollVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#f7f9fb]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial="hidden" animate="visible" variants={scrollVariant}
        >
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            AGRIBISNIS INDONESIA UNTUK PASAR GLOBAL
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            Mitra Terpercaya <br/> Ekspor Minyak Sawit <br/> Berkualitas Global
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
            PT Yones Satiya Wacana menghadirkan produk agribisnis premium yang bersumber secara etis dan berkelanjutan untuk pasar internasional. Keandalan logistik dan standar tinggi jadi prioritas.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-blue-900 text-white px-6 py-3.5 rounded-[15px] font-semibold hover:bg-blue-950 transition-colors text-sm flex items-center gap-2">
              Hubungi Kami <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/products" className="bg-white border border-slate-300 text-slate-900 px-6 py-3.5 rounded-[15px] font-semibold hover:bg-slate-50 transition-colors text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-700"></span> Lihat Detail Produk
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="h-[500px]"
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/images/hero.png" alt="Palm Plantation" className="w-full h-full object-cover rounded-[15px] shadow-sm" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="border-y border-slate-200 bg-white"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariant}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div className="space-y-1">
            <div className="text-3xl font-bold text-slate-900">2015</div>
            <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Berdiri Sejak</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-slate-900">Global</div>
            <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Jangkauan Pasar</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-slate-900">Premium</div>
            <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Kualitas Produk</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-bold text-slate-900">ISO</div>
            <div className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Standar Sertifikasi</div>
          </div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-16 items-center"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariant}
      >
        <div className="h-[400px]">
          <img src="/images/factory.png" alt="Factory" className="w-full h-full object-cover rounded-[15px] border border-slate-200" />
        </div>
        <div className="space-y-6">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">TENTANG KAMI</div>
          <h2 className="text-3xl font-bold text-slate-900 leading-snug max-w-lg">Integritas dalam Setiap Tetes, Kriteria Utama untuk Pasar Ekspor.</h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            PT Yones Satiya Wacana adalah perusahaan agribisnis Indonesia yang bergerak di bidang ekspor-impor komoditas, menghadirkan produk premium yang bersumber secara etis dan berkelanjutan untuk pasar internasional. Didirikan pada 2015, perusahaan berkomitmen pada integritas, keberlanjutan, dan keunggulan profesional.
          </p>
          <div className="pt-2">
            <Link href="/about" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1">
              Pelajari lebih lanjut &rarr;
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Keunggulan Kemitraan Kami */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <motion.div 
          className="max-w-7xl mx-auto px-4 md:px-8 space-y-16"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariant}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Keunggulan Kemitraan Kami</h2>
            <p className="text-slate-600 text-sm">Fokus utama kami adalah menyediakan minyak sawit berkualitas tinggi bagi pasar global.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Standar Internasional", desc: "Menyediakan minyak sawit dan turunannya dengan standar dan mutu internasional yang konsisten.", icon: "SI" },
              { title: "Solusi Logistik", desc: "Memberikan solusi logistik yang aman dan efisien untuk pengiriman domestik maupun internasional.", icon: "SL" },
              { title: "Kemitraan Strategis", desc: "Membangun kemitraan strategis jangka panjang dengan buyer dan mitra di seluruh dunia.", icon: "KS" },
              { title: "Kontribusi Ekonomi", desc: "Berkontribusi pada pertumbuhan ekonomi Indonesia melalui perdagangan komoditas global.", icon: "KE" },
            ].map((item, i) => (
              <motion.div key={i} variants={scrollVariant} className="bg-white p-8 border border-slate-200 rounded-[15px] space-y-6 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center font-bold text-xs rounded-[15px]">
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Produk Kami */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-12"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariant}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Produk Kami</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 grid md:grid-cols-2 gap-10 items-center rounded-[15px] shadow-sm group">
          <div className="h-[250px] bg-slate-100 border border-slate-200 overflow-hidden">
            <img src="/images/product.png" alt="Minyak Nabati" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">KATEGORI PRODUK</div>
            <h3 className="text-2xl font-bold text-slate-900">Minyak Nabati & Turunannya</h3>
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
      </motion.section>

      {/* Mulai Kemitraan Bersama Kami */}
      <motion.section 
        className="bg-white border-t border-slate-200 py-24"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariant}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-snug">Mulai Kemitraan Bersama Kami</h2>
            <p className="text-slate-600 leading-relaxed max-w-md text-sm">
              Unduh brosur perusahaan kami untuk informasi lebih detail. Atau, kirimkan form di samping untuk mendiskusikan kebutuhan komoditas Anda secara langsung.
            </p>
            <div className="pt-4">
              <button className="border border-slate-300 text-slate-900 px-6 py-3 rounded-[15px] font-semibold hover:bg-slate-50 transition-colors text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Company Profile
              </button>
            </div>
          </div>
          <div className="bg-white p-8 border border-slate-200 rounded-[15px] shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6 text-lg">Kirim Form Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form inquiry berhasil dikirim!"); }}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NAMA LENGKAP</label>
                <input required type="text" className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="Masukkan nama Anda" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">EMAIL</label>
                  <input required type="email" className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="email@anda.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NO. HP / WA</label>
                  <input required type="text" className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="+62 812..." />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">PESAN / INQUIRY</label>
                <textarea required rows={4} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-y transition-colors" placeholder="Ceritakan detail pesanan atau pertanyaan Anda..."></textarea>
              </div>
              <div className="pt-2">
                <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-3.5 px-4 rounded-[15px] hover:bg-blue-950 transition-colors text-sm">
                  Kirim Pertanyaan
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
