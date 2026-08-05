"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Redirect to WA prefilled
    const text = `Halo Yones Satiya Wacana,\n\nNama: ${formData.name}\nPerusahaan: ${formData.company}\nEmail: ${formData.email}\n\nPesan: ${formData.message}\n\nSaya ingin berkonsultasi mengenai produk/inquiry saya.`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Get in Touch</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">We are ready to support your global supply chain needs. Reach out for price quotes, specifications, or business inquiries.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white p-8 border border-slate-200 rounded-[15px] space-y-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">📍</div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Headquarters</div>
                    <div className="text-sm text-slate-600 mt-1 leading-relaxed">Jl. Jend. Sudirman Kav 21, Jakarta 12920, Indonesia</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">✉️</div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Email</div>
                    <div className="text-sm text-slate-600 mt-1 space-y-1">
                      <div><a href="mailto:info@yonessatiyawacana.com" className="hover:text-blue-700 transition-colors">info@yonessatiyawacana.com</a></div>
                      <div><a href="mailto:toto.sugiharso@yonessatiyawacana.com" className="hover:text-blue-700 transition-colors">toto.sugiharso@yonessatiyawacana.com</a></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1">📞</div>
                  <div>
                    <div className="font-bold text-sm text-slate-900">Phone / WhatsApp</div>
                    <div className="text-sm text-slate-600 mt-1">+62 812 3456 7890</div>
                  </div>
                </div>
              </div>
              <div className="h-48 bg-slate-100 rounded-[15px] border border-slate-200 mt-6 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27361730043!2d106.82030047524959!3d-6.227608260991823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e46c7600bb%3A0xcb1b514b8a24c8c7!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="bg-white p-8 md:p-10 border border-slate-200 rounded-[15px] space-y-8 shadow-sm">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-slate-900">Detailed Inquiry Form</h2>
                <p className="text-sm text-slate-500">Please fill out the form below to help us process your inquiry faster. All required fields are marked (*).</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">First Name *</label>
                    <input required type="text" onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Company Name *</label>
                    <input required type="text" onChange={e => setFormData({...formData, company: e.target.value})} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="Global Logistics LLC" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input required type="email" onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Country / Region</label>
                    <select className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors">
                      <option>United States</option>
                      <option>China</option>
                      <option>India</option>
                      <option>Netherlands</option>
                      <option>Indonesia</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Primary Interest</label>
                  <select className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors">
                    <option>Product Specifications</option>
                    <option>Pricing Inquiry</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Message details *</label>
                  <textarea required rows={4} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full border border-slate-300 bg-slate-50 p-3 rounded-[15px] text-sm focus:bg-white focus:border-black focus:ring-1 focus:ring-black outline-none resize-y transition-colors" placeholder="Please specify your desired volume, delivery terms, and destination port..."></textarea>
                </div>

                <div>
                  <button type="submit" className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-[15px] hover:bg-blue-950 transition-all text-sm flex items-center gap-2 active:scale-[0.98]">
                    Submit Inquiry ke WhatsApp <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 19.165s-1.815-.011-3.515-.92l-3.924 1.03 1.05-3.823c-1.026-1.704-1.597-3.711-1.597-5.852 0-6.175 5.006-11.18 11.18-11.18 6.177 0 11.18 5.005 11.18 11.18 0 6.175-5.003 11.18-11.18 11.18z"/></svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
