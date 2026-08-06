"use client";

export function InquiryForm() {
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form inquiry berhasil dikirim!");
      }}
    >
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NAMA LENGKAP</label>
        <input
          required
          type="text"
          className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
          placeholder="Masukkan nama Anda"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">EMAIL</label>
          <input
            required
            type="email"
            className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
            placeholder="email@anda.com"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">NO. HP / WA</label>
          <input
            required
            type="text"
            className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
            placeholder="+62 812..."
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">PESAN / INQUIRY</label>
        <textarea
          required
          rows={4}
          className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-y transition-colors"
          placeholder="Ceritakan detail pesanan atau pertanyaan Anda..."
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-blue-900 text-white font-semibold py-3.5 px-4 rounded-[15px] hover:bg-blue-950 transition-colors text-sm"
        >
          Kirim Pertanyaan
        </button>
      </div>
    </form>
  );
}
