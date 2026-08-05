"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Trash2, Edit, X } from "lucide-react";

export default function GalleryAdmin() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", youtube_id: "" });
  
  const supabase = createClient();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const { data } = await supabase.from("gallery_videos").select("*").order("created_at", { ascending: false });
    if (data) setVideos(data);
    setLoading(false);
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from("gallery_videos").update(form).eq("id", editingId);
    } else {
      await supabase.from("gallery_videos").insert([form]);
    }
    setModalOpen(false);
    setForm({ title: "", youtube_id: "" });
    setEditingId(null);
    loadData();
  };

  const handleEdit = (v: any) => {
    setForm({ title: v.title, youtube_id: v.youtube_id });
    setEditingId(v.id);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus video ini?")) {
      await supabase.from("gallery_videos").delete().eq("id", id);
      loadData();
    }
  };

  const openNew = () => {
    setForm({ title: "", youtube_id: "" });
    setEditingId(null);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Manajemen Galeri Video</h1>
        <button onClick={openNew} className="bg-blue-900 text-white px-4 py-2.5 rounded-[15px] text-sm font-semibold flex items-center gap-2 hover:bg-blue-950 transition-colors active:scale-95">
          <Plus className="w-4 h-4" /> Tambah Video
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[15px] shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-700 tracking-wider">
            <tr>
              <th className="p-5">Thumbnail</th>
              <th className="p-5">Judul Video</th>
              <th className="p-5">YouTube ID</th>
              <th className="p-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Memuat data...</td></tr>
            ) : videos.length === 0 ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Belum ada data video di database.</td></tr>
            ) : (
              videos.map(v => (
                <tr key={v.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">
                    <img src={`https://img.youtube.com/vi/${v.youtube_id}/mqdefault.jpg`} alt="Thumbnail" className="w-24 rounded-[15px]" />
                  </td>
                  <td className="p-5 font-bold text-slate-900">{v.title}</td>
                  <td className="p-5 font-mono text-xs">{v.youtube_id}</td>
                  <td className="p-5 flex justify-end gap-2">
                    <button onClick={() => handleEdit(v)} className="p-2 text-blue-700 hover:bg-blue-50 rounded-[15px] transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(v.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-[15px] transition-colors"><Trash2 className="w-4 h-4" /></button>
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
              <h2 className="text-lg font-bold text-slate-900">{editingId ? "Edit Video" : "Tambah Video Baru"}</h2>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Judul Video</label>
                <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" placeholder="Proses Pabrik" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">YouTube Video ID</label>
                <input required type="text" value={form.youtube_id} onChange={e => setForm({...form, youtube_id: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" placeholder="dQw4w9WgXcQ" />
                <p className="text-[10px] text-slate-500">Karakter acak 11 digit dari link YouTube (misal: v=<strong>dQw4w9WgXcQ</strong>)</p>
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
