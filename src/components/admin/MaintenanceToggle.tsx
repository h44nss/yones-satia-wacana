"use client";

import { useEffect, useState, useRef } from "react";
import { Construction, Globe } from "lucide-react";

export default function MaintenanceToggle() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // useRef agar fetch awal hanya berjalan sekali
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    fetch("/api/maintenance")
      .then((r) => {
        if (!r.ok) throw new Error("Gagal memuat status");
        return r.json();
      })
      .then((d) => setEnabled(Boolean(d.maintenance_mode)))
      .catch(() => {
        setEnabled(false);
        setError("Gagal memuat status maintenance");
      });
  }, []);

  const toggle = async () => {
    if (enabled === null) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: !enabled }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Gagal menyimpan perubahan");
      }
      const data = await res.json();
      setEnabled(Boolean(data.maintenance_mode));
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const isLoading = enabled === null || loading;

  return (
    <div className="bg-white border border-slate-200 rounded-[15px] p-6 shadow-sm space-y-3">
      <div className="flex items-center justify-between gap-6">
        {/* Left info */}
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-[15px] flex items-center justify-center transition-colors ${
              enabled
                ? "bg-amber-50 text-amber-600"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {enabled ? (
              <Construction className="w-7 h-7" />
            ) : (
              <Globe className="w-7 h-7" />
            )}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm">Mode Maintenance</p>
            <p className="text-xs text-slate-400 mt-0.5">
              {isLoading
                ? "Memuat status..."
                : enabled
                ? "Website publik menampilkan halaman maintenance"
                : "Website publik aktif & berjalan normal"}
            </p>
          </div>
        </div>

        {/* Right toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Status badge */}
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full transition-colors ${
              isLoading
                ? "bg-slate-100 text-slate-400"
                : enabled
                ? "bg-amber-100 text-amber-700"
                : "bg-emerald-100 text-emerald-700"
            }`}
          >
            {isLoading ? "—" : enabled ? "AKTIF" : "NONAKTIF"}
          </span>

          {/* Toggle switch */}
          <button
            id="btn-maintenance-toggle"
            onClick={toggle}
            disabled={isLoading}
            aria-label="Toggle maintenance mode"
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
              enabled
                ? "bg-amber-500 focus:ring-amber-400"
                : "bg-slate-200 focus:ring-slate-400"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                enabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-4 py-2">
          ⚠️ {error}
        </p>
      )}
    </div>
  );
}
