"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Plus, Trash2, Edit, X, UploadCloud, ImageIcon } from "lucide-react";

export default function ProductsAdmin() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", description: "", image_url: "" });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const supabase = createClient();

  useEffect(() => {
    loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function loadData() {
    setLoading(true);
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (data) setProducts(data);
    setLoading(false);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Validasi ukuran maksimal 3MB (3 * 1024 * 1024 bytes)
      if (selectedFile.size > 3 * 1024 * 1024) {
        alert("Ukuran gambar terlalu besar. Maksimal 3 MB!");
        // Reset input
        e.target.value = "";
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let finalImageUrl = form.image_url;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `public/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('product_images')
        .upload(filePath, file);

      if (uploadError) {
        alert("Gagal upload gambar: " + uploadError.message + "\nPastikan bucket 'product_images' sudah dibuat dan diset Public.");
      } else {
        const { data } = supabase.storage.from('product_images').getPublicUrl(filePath);
        finalImageUrl = data.publicUrl;
      }
    }

    const payload = { title: form.title, description: form.description, image_url: finalImageUrl };

    if (editingId) {
      await supabase.from("products").update(payload).eq("id", editingId);
    } else {
      await supabase.from("products").insert([payload]);
    }
    
    setUploading(false);
    setModalOpen(false);
    setForm({ title: "", description: "", image_url: "" });
    setFile(null);
    setEditingId(null);
    loadData();
  };

  const handleEdit = (product: any) => {
    setForm({ title: product.title, description: product.description, image_url: product.image_url || "" });
    setEditingId(product.id);
    setFile(null);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      await supabase.from("products").delete().eq("id", id);
      loadData();
    }
  };

  const openNew = () => {
    setForm({ title: "", description: "", image_url: "" });
    setEditingId(null);
    setFile(null);
    setModalOpen(true);
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-900">Manajemen Produk</h1>
        <button onClick={openNew} className="bg-blue-900 text-white px-4 py-2.5 rounded-[15px] text-sm font-semibold flex items-center gap-2 hover:bg-blue-950 transition-colors active:scale-95">
          <Plus className="w-4 h-4" /> Tambah Produk
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-[15px] shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-700 tracking-wider">
            <tr>
              <th className="p-5 w-24">Gambar</th>
              <th className="p-5">Nama Produk</th>
              <th className="p-5">Deskripsi</th>
              <th className="p-5 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Memuat data...</td></tr>
            ) : products.length === 0 ? (
              <tr><td colSpan={4} className="p-10 text-center text-slate-400 font-semibold">Belum ada data produk di database.</td></tr>
            ) : (
              products.map(p => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">
                    {p.image_url ? (
                      <img src={p.image_url} alt="Thumbnail" className="w-16 h-16 object-cover rounded-md border border-slate-200" />
                    ) : (
                      <div className="w-16 h-16 bg-slate-100 rounded-md flex items-center justify-center text-slate-300 border border-slate-200">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </td>
                  <td className="p-5 font-bold text-slate-900">{p.title}</td>
                  <td className="p-5 truncate max-w-xs">{p.description}</td>
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
              <h2 className="text-lg font-bold text-slate-900">{editingId ? "Edit Produk" : "Tambah Produk Baru"}</h2>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-900"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Foto Produk</label>
                <div className="border border-slate-300 border-dashed rounded-[15px] p-4 text-center hover:bg-slate-50 transition-colors cursor-pointer relative overflow-hidden">
                  <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                  {file ? (
                    <div className="text-sm font-semibold text-blue-700">{file.name}</div>
                  ) : form.image_url ? (
                    <div className="text-sm font-semibold text-slate-600">Ganti foto yang sudah ada</div>
                  ) : (
                    <div className="flex flex-col items-center text-slate-500 space-y-2">
                      <UploadCloud className="w-6 h-6" />
                      <span className="text-xs font-semibold">Klik untuk memilih gambar (.jpg/.png)</span>
                      <span className="text-[10px] text-slate-400">Maksimal 3 MB</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Nama Produk</label>
                <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none" placeholder="CPO Grade A" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase">Deskripsi</label>
                <textarea required rows={4} value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full border border-slate-300 p-3 rounded-[15px] text-sm focus:border-black outline-none resize-none" placeholder="Kualitas ekspor..."></textarea>
              </div>
              <button type="submit" disabled={uploading} className="w-full bg-blue-900 text-white font-semibold py-3 rounded-[15px] hover:bg-blue-950 disabled:opacity-50 transition-colors">
                {uploading ? "Menyimpan & Mengupload..." : "Simpan Data"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
