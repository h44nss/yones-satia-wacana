import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4 col-span-1">
          <div className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <img src="/logo.png" alt="Logo PT Yones Satiya Wacana" className="h-12 w-auto object-contain" />
            <div>PT Yones Satiya <br/> Wacana</div>
          </div>
          <p className="text-sm text-slate-500">
            Mitra ekspor minyak sawit terpercaya dengan standar global.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-sm uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="/about" className="hover:text-blue-700">Tentang Kami</Link></li>
            <li><Link href="/contact" className="hover:text-blue-700">Kontak</Link></li>
            <li><Link href="/faq" className="hover:text-blue-700">FAQ</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-sm uppercase">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><Link href="#" className="hover:text-blue-700">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-700">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-slate-900 text-sm uppercase">Kontak</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="mailto:info@yonessatiyawacana.com" className="hover:text-blue-700 transition-colors">info@yonessatiyawacana.com</a>
            </li>
            <li>
              <a href="mailto:toto.sugiharso@yonessatiyawacana.com" className="hover:text-blue-700 transition-colors">toto.sugiharso@yonessatiyawacana.com</a>
            </li>
            <li className="pt-1">+62 812 3456 7890</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} PT Yones Satiya Wacana. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-slate-600">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
