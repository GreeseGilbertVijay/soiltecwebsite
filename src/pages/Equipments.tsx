import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const images = [
  '/equipments/equipments (1).jpg',
  '/equipments/equipments (2).jpg',
  '/equipments/equipments (3).jpg',
  '/equipments/equipments (4).jpg',
  '/equipments/equipments (5).jpg',
  '/equipments/equipments (6).jpg',
  '/equipments/equipments (7).jpg',
  '/equipments/equipments (8).jpg',
  '/equipments/equipments (9).jpg',
  '/equipments/equipments (10).jpg',
  '/equipments/equipments (11).jpg',
];

const Equipments: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Equipments | Soiltec Piling and Foundation Dubai</title>
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

      {/* Section One */}
      <section className="py-16 bg-gray-200 dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('equipments.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('equipments.description')}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>{t('equipments.list1')}</li>
              <li>{t('equipments.list2')}</li>
              <li>{t('equipments.list3')}</li>
              <li>{t('equipments.list4')}</li>
              <li>{t('equipments.list5')}</li>
              <li>{t('equipments.list6')}</li>
              <li>{t('equipments.list7')}</li>
            </ul>
          </div>

          {/* Auto Image Slider */}
          <div className="w-full">
            <img
              src={images[currentIndex]}
              alt={`Equipment Slide ${currentIndex + 1}`}
              className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* Section Two */}
      <section className="py-16 bg-gray-200 dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {t('equipments.description2')}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>{t('equipments.list8')}</li>
              <li>{t('equipments.list9')}</li>
              <li>{t('equipments.list10')}</li>
              <li>{t('equipments.list11')}</li>
              <li>{t('equipments.list12')}</li>
              <li>{t('equipments.list13')}</li>
              <li>{t('equipments.list14')}</li>
              <li>{t('equipments.list15')}</li>
              <li>{t('equipments.list16')}</li>
              <li>{t('equipments.list17')}</li>
            </ul>
          </div>

          {/* Static Image */}
          <div className="w-full">
            <img
              src="/equipments/equipments.jpg"
              alt="Equipment Overview"
              className="w-4xl h-auto object-cover rounded-xl shadow-lg transition-all duration-700"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipments;
