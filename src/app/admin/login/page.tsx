"use client";
import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Login gagal. Pastikan email dan password benar.");
      setLoading(false);
    } else {
      router.replace("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-[15px] border border-slate-200 shadow-sm w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Image src="/logo.png" alt="Logo PT Yones Satiya Wacana" width={64} height={64} className="w-16 h-16 mx-auto mb-4 object-contain" />
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-sm text-slate-500">Masuk ke CMS PT Yones Satiya Wacana</p>
        </div>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-[15px] text-sm border border-red-200 font-semibold">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="login-email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email</label>
            <input id="login-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black outline-none transition-colors" placeholder="admin@yonessatia.com" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="login-password" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
            <input id="login-password" type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black outline-none transition-colors" placeholder="••••••••" />
          </div>
          <div className="pt-2">
            <button type="submit" disabled={loading} className="w-full bg-blue-900 text-white py-3 rounded-[15px] font-semibold text-sm hover:bg-blue-950 disabled:opacity-50 transition-colors active:scale-[0.98]">
              {loading ? "Memverifikasi..." : "Masuk ke Dashboard"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
