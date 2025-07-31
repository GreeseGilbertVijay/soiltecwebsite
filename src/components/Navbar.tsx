import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// ... (imports remain unchanged)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, currentLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/clients', label: t('nav.clients') },
    { path: '/equipments', label: t('nav.equipments') }, 
    { path: '/policies', label: t('nav.policies') },            
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const fontSize = currentLanguage === 'en' ? '16px' : '14px';

  return (
    <nav className="sticky z-50 border-b border-slate-300 bg-white bg-opacity-80 backdrop-blur bg-gradient-to-r from-[#fff] to-[#fff] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img
                src="/images/soiltec.png"
                alt="Samatva Awareness"
                className="h-10 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex items-baseline">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  style={{ fontSize }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-yellow-500 text-white shadow'
                      : 'text-slate-600 hover:text-yellow-500'
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
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-yellow-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 border-t border-slate-300 bg-white bg-opacity-90 backdrop-blur rounded-b-lg">
              <div className="border-b border-slate-200 mb-2">
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
                      ? 'bg-yellow-500 text-white'
                      : 'text-slate-600 hover:text-yellow-500'
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

