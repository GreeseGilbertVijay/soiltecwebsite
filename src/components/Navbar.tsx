import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ThemeToggle from '@/components/ThemeToggle' // Ensure this exists

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  )

  const location = useLocation()
  const { t, currentLanguage } = useLanguage()

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
  ]

  const isActive = (path: string) => location.pathname === path
  const fontSize = currentLanguage === 'en' ? '16px' : '14px'

  return (
    <nav className="sticky z-50 border-b border-slate-300 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <img
                src="/images/soiltec.png"
                alt="Soiltec Logo"
                className="h-10 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
            <div className="flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  style={{ fontSize }}
                  className={`px-2 py-2 rounded-lg font-small transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-yellow-500 text-white shadow'
                      : 'text-slate-600 dark:text-slate-300 hover:text-yellow-500'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-white hover:text-yellow-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden px-4">
            <div className="pt-3 pb-4 border-t border-slate-300 dark:border-slate-700 bg-white dark:bg-gray-900 bg-opacity-95 backdrop-blur-md rounded-b-lg shadow-md">
              
              {/* Top section: Language + Theme */}
              <div className="flex justify-between items-center px-2 mb-3">
                <LanguageSwitcher />
                <ThemeToggle theme={theme} setTheme={setTheme} />
              </div>

              {/* Navigation links */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMenuOpen(false)
                      scrollToTop()
                    }}
                    style={{ fontSize }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-yellow-500 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:text-yellow-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
