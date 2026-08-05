"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, Video, Globe, LogOut } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const navs = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Produk", href: "/admin/products", icon: Package },
    { name: "Portofolio", href: "/admin/portfolio", icon: Globe },
    { name: "Galeri Video", href: "/admin/gallery", icon: Video },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-6 flex flex-col justify-between sticky top-0">
      <div>
        <div className="mb-10 flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <div>
            <h2 className="font-bold text-slate-900 tracking-tight leading-none">CMS Admin</h2>
            <span className="text-xs text-slate-400 font-semibold uppercase">Yones Satiya</span>
          </div>
        </div>
        <nav className="flex flex-col space-y-2">
          {navs.map(n => {
            const active = pathname === n.href;
            const Icon = n.icon;
            return (
              <Link key={n.name} href={n.href} className={`flex items-center gap-3 px-4 py-3 rounded-[15px] text-sm font-semibold transition-all ${active ? "bg-slate-100 text-black" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
                <Icon className="w-5 h-5" />
                {n.name}
              </Link>
            )
          })}
        </nav>
      </div>
      <div>
        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-[15px] text-sm font-semibold text-red-600 hover:bg-red-50 transition-all active:scale-[0.98]">
          <LogOut className="w-5 h-5" />
          Keluar
        </button>
      </div>
    </aside>
  );
}
