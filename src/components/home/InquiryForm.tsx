"use client";
import { useState } from "react";

export function InquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Yones Satiya Wacana,\n\nNama: ${form.name}\nEmail: ${form.email}\nNo. HP/WA: ${form.phone}\n\nPesan: ${form.message}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-label="Form inquiry cepat">
      <div className="space-y-1.5">
        <label htmlFor="inquiry-name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          NAMA LENGKAP
        </label>
        <input
          id="inquiry-name"
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="inquiry-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            EMAIL
          </label>
          <input
            id="inquiry-email"
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
            placeholder="email@anda.com"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="inquiry-phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            NO. HP / WA
          </label>
          <input
            id="inquiry-phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
            placeholder="+62 812..."
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="inquiry-message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          PESAN / INQUIRY
        </label>
        <textarea
          id="inquiry-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-y transition-colors"
          placeholder="Ceritakan detail pesanan atau pertanyaan Anda..."
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-blue-900 text-white font-semibold py-3.5 px-4 rounded-[15px] hover:bg-blue-950 transition-colors text-sm flex items-center justify-center gap-2"
        >
          Kirim via WhatsApp
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 19.165s-1.815-.011-3.515-.92l-3.924 1.03 1.05-3.823c-1.026-1.704-1.597-3.711-1.597-5.852 0-6.175 5.006-11.18 11.18-11.18 6.177 0 11.18 5.005 11.18 11.18 0 6.175-5.003 11.18-11.18 11.18z" />
          </svg>
        </button>
      </div>
    </form>
  );
}
