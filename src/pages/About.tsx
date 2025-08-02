// src/pages/About.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AutoImageSlider from '@/components/AutoImageSlider';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen font-raleway">
      <Helmet>
        <title>About Us | Soiltec Piling and Foundation Dubai</title>
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

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-200 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('home.container1.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('home.container1.description')}
            </p>
          </div>

          {/* Auto Image Slider */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <AutoImageSlider />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
