import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-yellow-500 text-black font-sans border-t border-yellow-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" onClick={scrollToTop}>
                <img 
                  src="/images/soiltec.png" 
                  alt="Soiltec Logo" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-black leading-relaxed text-sm">
              {t('footer.description') || 'Soiltec is a trusted provider of geotechnical, piling and foundation solutions based in Dubai.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-4">{t('footer.menu') || 'Quick Links'}</h4>
            <ul className="space-y-2 text-sm">
              {[
                { path: '/about', label: 'about', fallback: 'About Us' },
                { path: '/activities', label: 'activities', fallback: 'Activities' },
                { path: '/projects', label: 'projects', fallback: 'Projects' },
                { path: '/gallery', label: 'gallery', fallback: 'Gallery' },
                { path: '/clients', label: 'clients', fallback: 'Clients' },
                { path: '/equipments', label: 'equipments', fallback: 'Equipments' },
                { path: '/policies', label: 'policies', fallback: 'Policies' },
                { path: '/contact', label: 'contact', fallback: 'Contact' },
              ].map(({ path, label, fallback }) => (
                <li key={label}>
                  <Link 
                    to={path} 
                    onClick={scrollToTop} 
                    className="text-black hover:text-white transition-colors duration-200"
                  >
                    {t(`footer.${label}`) || fallback}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold mb-4">{t('footer.contactInfo') || 'Contact Information'}</h4>
            <div className="space-y-3 text-sm text-black">
              <div>
                <p className="mb-1">
                  <strong>{t('footer.phone') || 'Phone'}:</strong>{' '}
                  <a href="tel:+97142696440" className="hover:text-white transition-colors">+971 4 2696440</a>
                </p>
                <p className="mb-1">
                  <strong>Fax:</strong>{' '}
                  <a href="tel:+97142696442" className="hover:text-white transition-colors">+971 4 2696442</a>
                </p>
                <p className="mb-1">
                  <strong>{t('footer.email') || 'Email'}:</strong>{' '}
                  <a href="mailto:soiltec@eim.ae" className="hover:text-white transition-colors">soiltec@eim.ae</a>
                </p>
              </div>
              <div>
                <p>
                  <strong>{t('footer.address') || 'Address'}:</strong><br />
                  Soiltec Piling & Foundation LLC,<br />
                  Hor Alanz East, P.O. Box: 92776,<br />
                  Dubai - U.A.E.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 pt-6 border-t border-yellow-600 text-center text-sm">
          <p>
            {t('footer.copyright') 
              || '© 2025 Soiltec Piling & Foundation. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
