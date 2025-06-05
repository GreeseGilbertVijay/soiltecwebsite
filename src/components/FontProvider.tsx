
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Load Google Fonts for Indian languages
    const fontLinks = {
      ta: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@300;400;500;600;700&display=swap',
      te: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@300;400;500;600;700&display=swap',
      hi: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap',
      ml: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@300;400;500;600;700&display=swap',
      kn: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@300;400;500;600;700&display=swap',
    };

    // Remove existing language-specific font links
    const existingLinks = document.querySelectorAll('link[data-language-font]');
    existingLinks.forEach(link => link.remove());

    // Add font link for current language
    if (fontLinks[currentLanguage as keyof typeof fontLinks]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fontLinks[currentLanguage as keyof typeof fontLinks];
      link.setAttribute('data-language-font', currentLanguage);
      document.head.appendChild(link);
    }

    // Apply font class to body
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    document.body.classList.add(`font-${currentLanguage}`);
  }, [currentLanguage]);

  return <>{children}</>;
};

export default FontProvider;
