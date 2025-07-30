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
              {t('footer.mission') || 'Our mission is to empower individuals with expert financial guidance and essential resources to build, strengthen, and sustain a resilient credit profile—laying the foundation for lasting financial well-being and opportunity.'}
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-2xl font-bold  mb-4 text-orange-500">{t('footer.quickLinks') || 'Quick Links'}</h4>
            <ul className="space-y-2">
              <li><Link to="/credit-health" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('nav.creditHealth') || 'Credit Health'}</Link></li>
              <li><Link to="/impact" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('nav.impact') || 'Impact'}</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('nav.services') || 'Services'}</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('nav.about') || 'About'}</Link></li>
              <li><Link to="/faq" onClick={scrollToTop} className="text-black hover:text-orange-400 transition-colors">{t('nav.faq') || 'FAQ'}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1 font-roboto">
            <h4 className="text-2xl font-bold mb-4 text-orange-500">{t('footer.contactInfo') || 'Contact Info'}</h4>
            <div className="space-y-3 text-slate-300">
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-black mb-2">{t('footer.phone') || 'Phone Numbers'}:</p>
                <p><a href="tel:+916382097967" className="text-black hover:text-orange-400 transition-colors">+91 63820 97967</a></p>
                <p> <a href="mailto:support@samatvaawareness.in" className="text-black hover:text-orange-400 transition-colors">support@samatvaawareness.in</a></p>
              </div>
              <div className="text-sm">
                <p className="font-medium text-black mb-2">CIN: U70200TN2024PTC167249</p>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-medium text-black mb-2">{t('footer.address') || 'Address'}:</p>
                <p className='text-black'>No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017</p>
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
