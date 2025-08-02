import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: '/images/piling-icon.png',
      title: t('home.container2.heading1'),
      desc: t('home.container2.description1'),
    },
    {
      icon: '/images/foundation-icon.png',
      title: t('home.container2.heading2'),
      desc: t('home.container2.description2'),
    },
    {
      icon: '/images/shoring-icon.png',
      title: t('home.container2.heading3'),
      desc: t('home.container2.description3'),
    },
    {
      icon: '/images/soil-icon.png',
      title: t('home.container2.heading4'),
      desc: t('home.container2.description4'),
    },
    {
      icon: '/images/geotechnical-icon.png',
      title: t('home.container2.heading5'),
      desc: t('home.container2.description5'),
    },
    {
      icon: '/images/engineering-icon.png',
      title: t('home.container2.heading6'),
      desc: t('home.container2.description6'),
    },
  ];

  return (
    <div className="min-h-screen font-raleway bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <Helmet>
        <title>Soiltec Piling and Foundation | Geotechnical Engineering in Dubai</title>
        <meta
          name="description"
          content="Soiltec Piling and Foundation is a leading geotechnical and foundation engineering company based in Dubai, delivering innovative piling, shoring, and deep foundation solutions across the UAE."
        />
        <meta
          name="keywords"
          content="Piling Company in Dubai, Foundation Engineering Dubai, Geotechnical Engineering UAE, Soiltec Piling Dubai, Shoring and Piling Services"
        />
      </Helmet>

      <Navbar />
      <ImageSlider />

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center px-6 flex items-center justify-center text-center">
        <div className="bg-black/80 backdrop-blur p-10 rounded-3xl shadow-lg max-w-3xl w-full">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            {t('home.hero.description')}
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all"
          >
            {t('home.hero.button')}
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 bg-gray-200 dark:bg-gray-800 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.container1.title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t('home.container1.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-950 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            {t('home.container2.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('home.container3.title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {t('home.container3.description')}
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all"
          >
            {t('home.container3.button')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
