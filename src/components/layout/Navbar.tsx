"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const switchLang = (target: "ID" | "EN") => {
    setLang(target);
    const code = target === "EN" ? "en" : "id";
    document.cookie = `googtrans=/id/${code}; path=/;`;
    
    // Efek transisi halus sebelum reload
    document.body.style.transition = 'opacity 0.3s ease-out';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const navLinks = [
    { name: lang === "ID" ? "Beranda" : "Home", href: "/" },
    { name: lang === "ID" ? "Tentang" : "About", href: "/about" },
    { name: lang === "ID" ? "Produk" : "Products", href: "/products" },
    { name: lang === "ID" ? "Portofolio" : "Portfolio", href: "/portfolio" },
    { name: lang === "ID" ? "Galeri" : "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#f7f9fb] border-b border-slate-200 h-20 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          <img src="/logo.png" alt="Logo PT Yones Satiya Wacana" className="h-10 w-auto object-contain" />
          <span className="hidden sm:inline-block">PT Yones Satiya Wacana</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`relative group transition-colors py-1 ${isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-slate-900 origin-left transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            )
          })}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="text-sm font-semibold text-slate-600 flex gap-2">
            <span onClick={() => switchLang("ID")} className={`cursor-pointer transition-colors ${lang === "ID" ? "text-slate-900 font-bold" : "hover:text-slate-900"}`}>ID</span>
            <span className="text-slate-300">|</span>
            <span onClick={() => switchLang("EN")} className={`cursor-pointer transition-colors ${lang === "EN" ? "text-slate-900 font-bold" : "hover:text-slate-900"}`}>EN</span>
          </div>
          <Link href="/contact" className="bg-blue-900 text-white px-6 py-2.5 rounded-[15px] text-sm font-semibold hover:bg-blue-950 transition-colors inline-flex items-center active:scale-95">
            {lang === "ID" ? "Hubungi Kami" : "Contact Us"}
          </Link>
        </div>
        <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 py-4 px-4 flex flex-col space-y-4 md:hidden shadow-lg origin-top"
          >
            {navLinks.map((link) => (
               <Link 
                 key={link.name} 
                 href={link.href} 
                 onClick={() => setMobileMenuOpen(false)} 
                 className={`font-semibold ${pathname === link.href ? "text-slate-900" : "text-slate-500"}`}
               >
                 {link.name}
               </Link>
            ))}
            <hr className="border-slate-100" />
            <div className="flex justify-between items-center px-2 py-1">
              <span className="text-sm font-semibold text-slate-500">{lang === "ID" ? "Bahasa" : "Language"}</span>
              <div className="flex gap-3 text-sm">
                <button onClick={() => { switchLang("ID"); setMobileMenuOpen(false); }} className={`font-bold transition-colors ${lang === "ID" ? "text-slate-900" : "text-slate-400"}`}>ID</button>
                <span className="text-slate-300">|</span>
                <button onClick={() => { switchLang("EN"); setMobileMenuOpen(false); }} className={`font-bold transition-colors ${lang === "EN" ? "text-slate-900" : "text-slate-400"}`}>EN</button>
              </div>
            </div>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-blue-900 text-white px-4 py-3 text-center rounded-[15px] text-sm font-semibold active:scale-[0.98]">
              {lang === "ID" ? "Hubungi Kami" : "Contact Us"}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
