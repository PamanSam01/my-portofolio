'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

import { translations as dictionaries } from "./translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language');
    if (saved === 'id' || saved === 'en') {
      setLang(saved);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('preferred-language', newLang);
  };

  const t = (keyPath: string) => {
    const keys = keyPath.split('.');
    let current: any = dictionaries[lang];
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        // Fallback to English dictionary
        let fallbackCurrent: any = dictionaries['en'];
        for (const fbKey of keys) {
          if (fallbackCurrent === undefined || fallbackCurrent[fbKey] === undefined) {
            return keyPath; // ultimate fallback to key name
          }
          fallbackCurrent = fallbackCurrent[fbKey];
        }
        return fallbackCurrent;
      }
      current = current[key];
    }
    return current;
  };

  const contextValue = { lang, setLang: handleSetLang, t };

  if (!mounted) {
    return (
      <LanguageContext.Provider value={contextValue}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
