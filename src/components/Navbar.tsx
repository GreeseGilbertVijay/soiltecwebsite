import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/credit-health', label: t('nav.creditHealth') },
    { path: '/impact', label: t('nav.impact') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const fontSize = currentLanguage === 'en' ? '16px' : '14px';

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/samatvalogo.png" 
                alt="Samatva Awareness" 
                className="h-14 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  style={{ fontSize }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-orange-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-orange-400 hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700 rounded-b-lg">
              {/* Mobile Language Switcher */}
              <div className="px-4 py-2 border-b border-slate-700 mb-2">
                <LanguageSwitcher />
              </div>
              
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}
                  style={{ fontSize }}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-orange-400'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
