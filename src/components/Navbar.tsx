
import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/credit-health', label: 'Credit Health' },
    { path: '/impact', label: 'Impact' },
    { path: '/faq', label: 'FAQs' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const languages = [
    { code: 'en', name: 'English', googleCode: 'en' },
    { code: 'ta', name: 'Tamil', googleCode: 'ta' },
    { code: 'te', name: 'Telugu', googleCode: 'te' },
    { code: 'kn', name: 'Kannada', googleCode: 'kn' },
    { code: 'ml', name: 'Malayalam', googleCode: 'ml' },
    { code: 'hi', name: 'Hindi', googleCode: 'hi' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Load Google Translate script
    const addGoogleTranslateScript = () => {
      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
      }
      
      window.googleTranslateElementInit = () => {
        if (!document.querySelector('.goog-te-combo')) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ta,te,kn,ml,hi',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };
    };

    const timer = setTimeout(() => {
      addGoogleTranslateScript();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageChange = (language: typeof languages[0]) => {
    setCurrentLanguage(language.name);
    
    // Wait for Google Translate to be ready
    const checkAndTranslate = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = language.googleCode;
        selectElement.dispatchEvent(new Event('change'));
      } else {
        // If not ready, try again after a short delay
        setTimeout(checkAndTranslate, 500);
      }
    };
    
    checkAndTranslate();
  };

  return (
    <>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <div className="text-3xl font-bold">
                  <span className="text-blue-400">SA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-orange-500 font-bold text-lg leading-tight">SAMATVA</span>
                  <span className="text-orange-500 font-bold text-lg leading-tight">AWARENESS</span>
                  <span className="text-orange-300 text-xs font-medium">REBUILD CREDIT, REGAIN YOUR FUTURE</span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
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

            {/* Language Selector - Top Right */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-orange-400 transition-colors">
                  <Languages size={18} />
                  <span className="text-sm font-medium hidden sm:inline">{currentLanguage}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-200">
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      onClick={() => handleLanguageChange(language)}
                      className="hover:bg-slate-700 hover:text-orange-400 cursor-pointer"
                    >
                      {language.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <div className="md:hidden">
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
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 border-t border-slate-700 rounded-b-lg">
                {/* Mobile Language Selector */}
                <div className="px-4 py-2 border-b border-slate-700 mb-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-orange-400 transition-colors w-full">
                      <Languages size={18} />
                      <span className="text-sm font-medium">{currentLanguage}</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700 text-slate-200">
                      {languages.map((language) => (
                        <DropdownMenuItem
                          key={language.code}
                          onClick={() => handleLanguageChange(language)}
                          className="hover:bg-slate-700 hover:text-orange-400 cursor-pointer"
                        >
                          {language.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
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
    </>
  );
};

export default Navbar;
