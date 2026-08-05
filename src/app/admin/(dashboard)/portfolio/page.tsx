"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Trash2, Edit, X } from "lucide-react";

export default function PortfolioAdmin() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ target_country: "", client_description: "", export_date: "" });
  
  const supabase = createClient();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const { data } = await supabase.from("portfolios").select("*").order("export_date", { ascending: false });
    if (data) setPortfolios(data);
    setLoading(false);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from("portfolios").update(form).eq("id", editingId);
    } else {
      await supabase.from("portfolios").insert([form]);
    }
    setModalOpen(false);
    setForm({ target_country: "", client_description: "", export_date: "" });
    setEditingId(null);
    loadData();
  };

  const handleEdit = (pf: any) => {
    setForm({ target_country: pf.target_country, client_description: pf.client_description, export_date: pf.export_date });
    setEditingId(pf.id);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus portofolio ini?")) {
      await supabase.from("portfolios").delete().eq("id", id);
      loadData();
    }
  };

  const openNew = () => {
    setForm({ target_country: "", client_description: "", export_date: "" });
    setEditingId(null);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Manajemen Portofolio</h1>
        <button onClick={openNew} className="bg-blue-900 text-white px-4 py-2.5 rounded-[15px] text-sm font-semibold flex items-center gap-2 hover:bg-blue-950 transition-colors active:scale-95">
          <Plus className="w-4 h-4" /> Tambah Portofolio
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[15px] shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-700 tracking-wider">
            <tr>
              <th className="p-5">Tanggal Ekspor</th>
              <th className="p-5">Negara Tujuan</th>
              <th className="p-5">Klien</th>
              <th className="p-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Memuat data...</td></tr>
            ) : portfolios.length === 0 ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Belum ada data portofolio di database.</td></tr>
            ) : (
              portfolios.map(p => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">{p.export_date}</td>
                  <td className="p-5 font-bold text-slate-900">{p.target_country}</td>
                  <td className="p-5">{p.client_description}</td>
                  <td className="p-5 flex justify-end gap-2">
                    <button onClick={() => handleEdit(p)} className="p-2 text-blue-700 hover:bg-blue-50 rounded-[15px] transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(p.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-[15px] transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-blue-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[15px] p-6 w-full max-w-md space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">{editingId ? "Edit Portofolio" : "Tambah Portofolio"}</h2>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Tanggal Ekspor</label>
                <input required type="date" value={form.export_date} onChange={e => setForm({...form, export_date: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Negara Tujuan</label>
                <input required type="text" value={form.target_country} onChange={e => setForm({...form, target_country: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" placeholder="China" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Deskripsi Klien</label>
                <input required type="text" value={form.client_description} onChange={e => setForm({...form, client_description: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" placeholder="Pabrik Makanan..." />
              </div>
              <button type="submit" className="w-full bg-blue-900 text-white font-semibold py-3 rounded-[15px] hover:bg-blue-950 transition-colors">
                Simpan Data
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
