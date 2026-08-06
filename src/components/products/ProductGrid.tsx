"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="col-span-3 text-center text-slate-500 font-semibold py-10">
        Katalog produk belum tersedia saat ini.
      </div>
    );
  }

  return (
    <>
      {products.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border border-slate-200 p-6 rounded-[15px] space-y-6 shadow-sm hover:-translate-y-1 transition-transform group flex flex-col"
        >
          <div className="h-48 bg-slate-100 rounded-[15px] overflow-hidden border border-slate-200 relative shrink-0">
            <Image
              src={item.image_url || "/images/product.png"}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="space-y-3 flex-grow">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">MINYAK NABATI</div>
            <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{item.description}</p>
          </div>
          <div className="pt-2">
            <Link href="/contact" className="text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors flex items-center gap-1">
              Inquiry Produk Ini &rarr;
            </Link>
          </div>
        </motion.div>
      ))}
    </>
  );
}
