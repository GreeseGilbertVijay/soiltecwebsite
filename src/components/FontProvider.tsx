
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const FontProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    // Only proceed if currentLanguage is available
    if (!currentLanguage) return;

    // Load Google Fonts for Indian language

    // Remove existing language-specific font links
    const existingLinks = document.querySelectorAll('link[data-language-font]');
    existingLinks.forEach(link => link.remove());

    // Apply font class to body
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    document.body.classList.add(`font-${currentLanguage}`);
  }, [currentLanguage]);

  return <>{children}</>;
};

export default FontProvider;
