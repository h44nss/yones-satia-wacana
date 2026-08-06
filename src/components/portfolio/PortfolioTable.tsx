"use client";
import { motion } from "framer-motion";

type Portfolio = {
  id: string;
  export_date: string;
  target_country: string;
  client_description: string;
};

export default function PortfolioTable({ portfolios }: { portfolios: Portfolio[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-slate-200 rounded-[15px] shadow-sm overflow-hidden"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600 min-w-[600px]">
          <thead className="bg-slate-50 text-slate-900 border-b border-slate-200 uppercase text-xs font-bold tracking-wider">
            <tr>
              <th className="p-6">Tanggal Ekspor</th>
              <th className="p-6">Negara Tujuan</th>
              <th className="p-6">Deskripsi Klien</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {portfolios.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-10 text-center text-slate-400 font-semibold">
                  Belum ada portofolio pengiriman.
                </td>
              </tr>
            ) : (
              portfolios.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6">
                    {new Date(p.export_date + "T00:00:00").toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="p-6 font-bold text-slate-900">{p.target_country}</td>
                  <td className="p-6">{p.client_description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
