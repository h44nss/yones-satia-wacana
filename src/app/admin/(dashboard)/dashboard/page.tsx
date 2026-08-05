export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Produk", value: "12", color: "bg-blue-100 text-blue-900" },
    { label: "Video Galeri", value: "8", color: "bg-sky-100 text-sky-900" },
    { label: "Klien Portofolio", value: "24", color: "bg-indigo-100 text-indigo-900" },
    { label: "Pengunjung (Bulan ini)", value: "1,204", color: "bg-slate-100 text-slate-900" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard Utama</h1>
        <p className="text-slate-600 mt-1">Ringkasan statistik website PT Yones Satiya Wacana.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-slate-500 text-sm font-semibold mb-2">{stat.label}</h3>
            <div className={`inline-flex items-center justify-center p-3 rounded-lg ${stat.color} font-bold text-2xl`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-8 min-h-[300px] flex items-center justify-center">
        <p className="text-slate-400 font-medium">Area Grafik Statistik (Akan terhubung dengan Analitik Server)</p>
      </div>
    </div>
  );
}
