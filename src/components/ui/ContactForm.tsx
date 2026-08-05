"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Semua field bertanda * wajib diisi.");
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError("Mohon masukkan alamat email yang valid.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const text = `Halo PT Yones Satiya Wacana, saya tertarik menjalin kerja sama.%0A%0A*Nama*: ${formData.name}%0A*Perusahaan*: ${formData.company || '-'}%0A*Email*: ${formData.email}%0A*Pesan*: ${formData.message}`;
      window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 max-w-3xl mx-auto shadow-sm">
      {error && (
        <div className="bg-red-50 text-red-700 px-4 py-3 rounded border border-red-200 mb-6 text-sm font-medium" role="alert">
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Nama Lengkap <span className="text-red-500">*</span></label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white border border-slate-300 p-2.5 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-300 p-2.5 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="john@company.com" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Nama Perusahaan (Opsional)</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-slate-300 p-2.5 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="PT ABC" />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">Pesan / Inquiry <span className="text-red-500">*</span></label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full bg-white border border-slate-300 p-2.5 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-y" placeholder="Sebutkan detail kebutuhan komoditas Anda..." />
        </div>
        <div className="pt-2">
          <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white font-semibold py-2.5 px-4 rounded hover:bg-blue-950 transition-colors disabled:opacity-70 text-sm flex items-center justify-center">
            {isSubmitting ? "Memverifikasi..." : "Kirim Pesan via WhatsApp"}
          </button>
        </div>
      </form>
    </div>
  );
}
