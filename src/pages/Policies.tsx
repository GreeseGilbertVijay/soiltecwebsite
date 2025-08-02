import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Policies: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Policies | Soiltec Piling and Foundation Dubai</title>
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

      {/* Policy Section */}
      <section className="py-16 bg-gray-200 dark:bg-gray-800 px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t('policies.title')}
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>{t('policies.content1')}</p>
            <p>{t('policies.content2')}</p>
            <p>{t('policies.content3')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policies;
