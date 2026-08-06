"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState("Produk");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  const categories = ["Produk", "Proses Order & Ekspor", "Sertifikasi", "Kemitraan"];

  const questions = {
    "Produk": [
      { q: "What are the specifications of your Crude Palm Oil (CPO)?", a: "Our CPO has a Free Fatty Acid (FFA) maximum of 5%, Moisture & Impurities maximum of 0.5%, and an Iodine Value (IV) of 50-55." },
      { q: "Do you provide custom packing for RBD Palm Olein?", a: "Yes, we offer bulk shipments via flexitanks, ISO tanks, and retail packaging like jerry cans or PET bottles based on buyer requirements." }
    ],
    "Proses Order & Ekspor": [
      { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ is generally 1x20ft container, which holds approximately 21 metric tons of product depending on the packaging type." },
      { q: "What are your standard payment terms?", a: "We typically accept T/T (Telegraphic Transfer) and Irrevocable L/C (Letter of Credit) at sight." }
    ],
    "Sertifikasi": [
      { q: "Are your products RSPO certified?", a: "Yes, we source our palm oil from RSPO-certified mills and plantations, ensuring sustainable and ethical practices." }
    ],
    "Kemitraan": [
      { q: "How can we become an exclusive distributor?", a: "Please fill out our detailed inquiry form on the Contact page, and our business development team will schedule a meeting to discuss exclusive partnership models." }
    ]
  };

  return (
    <div className="bg-[#f7f9fb] min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">Comprehensive information regarding our export standards, certifications, and business operations.</p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3 flex flex-col space-y-6 border-r border-slate-200 pr-4">
            {categories.map(cat => (
              <div 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-sm font-semibold pl-4 cursor-pointer transition-colors relative ${activeTab === cat ? 'text-slate-900 font-bold' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {activeTab === cat && (
                  <motion.div layoutId="faq-indicator" className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-900" />
                )}
                <span>{cat}</span>
              </div>
            ))}
          </div>
          
          <div className="md:col-span-9 space-y-8">
            <div className="bg-white border border-slate-200 rounded-[15px] p-8 space-y-4 shadow-sm overflow-hidden">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-3">
                <span className="w-4 h-4 border-2 border-slate-300 rounded-[15px] inline-block bg-slate-50"></span> {activeTab}
              </h2>
              
              <div className="mt-4 border-t border-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {questions[activeTab as keyof typeof questions]?.map((item, i) => (
                      <div key={i} className="border-b border-slate-100 last:border-0">
                        <div 
                          onClick={() => toggleQuestion(item.q)}
                          className="py-4 flex justify-between items-center text-sm font-semibold text-slate-700 cursor-pointer hover:text-black transition-colors"
                        >
                          <span>{item.q}</span>
                          <motion.span 
                             animate={{ rotate: openQuestion === item.q ? 45 : 0 }} 
                             className="text-slate-400 font-normal text-lg origin-center inline-block ml-4"
                          >
                             +
                          </motion.span>
                        </div>
                        <AnimatePresence>
                          {openQuestion === item.q && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4 text-sm text-slate-600 leading-relaxed pr-8">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
