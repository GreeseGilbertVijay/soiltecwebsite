
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ta' | 'te' | 'hi' | 'ml' | 'kn';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag?: string;
}

export const languages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
];

interface LanguageContextType {
  currentLanguage: Language;
  translations: any;
  changeLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<any>({});

  const loadTranslations = async (language: Language) => {
    try {
      const response = await import(`../lang/${language}.json`);
      setTranslations(response.default || response);
    } catch (error) {
      console.error(`Failed to load translations for ${language}:`, error);
      // Fallback to English if translation fails
      if (language !== 'en') {
        const fallback = await import('../lang/en.json');
        setTranslations(fallback.default || fallback);
      }
    }
  };

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
    loadTranslations(language);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    const initialLanguage = savedLanguage && languages.some(l => l.code === savedLanguage) 
      ? savedLanguage 
      : 'en';
    
    setCurrentLanguage(initialLanguage);
    loadTranslations(initialLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, translations, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
