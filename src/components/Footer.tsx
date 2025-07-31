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
    <footer className="bg-white text-black border-slate-700 font-arial">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" onClick={scrollToTop}>
                <img 
                  src="/images/soiltec.png" 
                  alt="Samatva Awareness" 
                  className="h-12 w-auto object-cover"
                />
              </Link>
            </div>
            <p className="text-black mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-2xl font-bold  mb-4 text-orange-500">{t('footer.menu')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.about') || 'About Us'}</Link></li>
              <li><Link to="/activities" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.activities') || 'Activities'}</Link></li>
              <li><Link to="/projects" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.projects') || 'Projects'}</Link></li>
              <li><Link to="/gallery" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.gallery') || 'Gallery'}</Link></li>
              <li><Link to="/clients" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.clients') || 'Clients'}</Link></li>
              <li><Link to="/equipments" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.equipments') || 'Equipments'}</Link></li>
              <li><Link to="/policies" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.policies') || 'Policies'}</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('footer.contact') || 'Contact'}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 font-roboto">
            <h4 className="text-2xl font-bold mb-4 text-orange-500">{t('footer.contactInfo') || 'Contact Info'}</h4>
            <div className="space-y-3 text-slate-300">
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-black mb-2">{t('footer.phone') || 'Phone Numbers'}:</p>
                <p><a href="tel:+971 4 2696440" className="text-black hover:text-orange-400 transition-colors">+971 4 2696440</a></p>
                <p className="font-medium text-black mb-2">{t('footer.email')}:</p>
                <p> <a href="mailto:soiltec@eim.ae" className="text-black hover:text-orange-400 transition-colors">soiltec@eim.ae</a></p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-black mb-2">{t('footer.address') || 'Address'}:</p>
                <p className='text-black'>Soiltec Piling & Foundation LLC, Hor Alanz East, P.O. Box: 92776, Dubai - U.A.E.</p>
              </div> 
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-black text-sm text-center">
              {t('footer.copyright') || '© 2025  Soiltec Piling & Foundation. All rights reserved.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
