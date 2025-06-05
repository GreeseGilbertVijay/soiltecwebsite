
import React from 'react';
import { ChevronDown, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, languages, type Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  
  const currentLangInfo = languages.find(lang => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-orange-400 transition-colors group">
        <Languages size={18} />
        <div className="text-sm font-medium hidden sm:block">
          <span className="text-orange-300">{currentLangInfo?.nativeName}</span>
          {currentLangInfo?.code !== 'en' && (
            <span className="text-slate-400 ml-1">/ {currentLangInfo?.name}</span>
          )}
        </div>
        <ChevronDown size={16} className="opacity-60 group-hover:opacity-100" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-200 min-w-[200px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`hover:bg-slate-700 hover:text-orange-400 cursor-pointer p-3 ${
              currentLanguage === language.code 
                ? 'bg-slate-700 text-orange-400 font-semibold' 
                : ''
            }`}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between w-full">
                <span className="text-base font-medium">{language.nativeName}</span>
                {currentLanguage === language.code && (
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                )}
              </div>
              {language.code !== 'en' && (
                <span className="text-sm text-slate-400">{language.name}</span>
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
