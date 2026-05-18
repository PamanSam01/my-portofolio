'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-sm border border-blood/30 bg-ink p-1">
      <button
        onClick={() => setLang('en')}
        className={`relative px-3 py-1 font-display text-xs tracking-widest transition-colors duration-300 ${
          lang === 'en' ? 'text-ink' : 'text-bone/50 hover:text-bone'
        }`}
      >
        {lang === 'en' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-blood"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      
      <button
        onClick={() => setLang('id')}
        className={`relative px-3 py-1 font-display text-xs tracking-widest transition-colors duration-300 ${
          lang === 'id' ? 'text-ink' : 'text-bone/50 hover:text-bone'
        }`}
      >
        {lang === 'id' && (
          <motion.div
            layoutId="active-lang"
            className="absolute inset-0 bg-blood"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>
    </div>
  );
}
