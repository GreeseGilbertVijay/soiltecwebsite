import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Activities: React.FC = () => {
  const { t } = useLanguage();

  const imageBoxes = [
    { src: '/activities/bored.webp', caption: t('activities.box1') },
    { src: '/activities/micro.webp', caption: t('activities.box2') },
    { src: '/activities/diaphragm.webp', caption: t('activities.box3') },
    { src: '/activities/contiguous.webp', caption: t('activities.box4') },
    { src: '/activities/soil.webp', caption: t('activities.box5') },
    { src: '/activities/bracing.webp', caption: t('activities.box6') },
    { src: '/activities/soldier.webp', caption: t('activities.box7') },
    { src: '/activities/improve.webp', caption: t('activities.box8') },
    { src: '/activities/ground.webp', caption: t('activities.box9') },
    { src: '/activities/secant.webp', caption: t('activities.box10') },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen font-raleway">
      <Helmet>
        <title>Activities | Soiltec Piling and Foundation Dubai</title>
        <meta
          name="description"
          content="Learn about Soiltec Piling and Foundation, Dubai's trusted experts in geotechnical engineering, piling, and foundation solutions. Explore our mission, experience, and commitment to innovation and quality."
        />
        <meta
          name="keywords"
          content="Soiltec, piling company Dubai, foundation solutions UAE, geotechnical engineering, construction piling, Soiltec Dubai, deep foundation, bored piles, micro piling Dubai"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="py-12 bg-gray-200 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('activities.title')}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('activities.description')}
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
            {t('activities.subtitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {imageBoxes.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
