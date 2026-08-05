"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ID" | "EN";
const LanguageContext = createContext<{ lang: Language; setLang: (l: Language) => void }>({ lang: "ID", setLang: () => {} });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("ID");
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
