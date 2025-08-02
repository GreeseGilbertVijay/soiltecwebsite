// src/pages/Gallery.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const imageSources = [
    '/activities/bored.webp',
    '/activities/micro.webp',
    '/activities/diaphragm.webp',
    '/activities/contiguous.webp',
    '/activities/soil.webp',
    '/activities/bracing.webp',
    '/activities/soldier.webp',
    '/activities/improve.webp',
    '/activities/ground.webp',
    '/activities/secant.webp',
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 font-raleway">
      <Helmet>
        <title>Gallery | Soiltec Piling and Foundation Dubai</title>
        <meta
          name="description"
          content="Explore the gallery of Soiltec Piling and Foundation, showcasing our work across Dubai in geotechnical engineering, piling, and foundation solutions."
        />
        <meta
          name="keywords"
          content="Soiltec, piling company Dubai, foundation solutions UAE, geotechnical engineering, construction piling, Soiltec Dubai, deep foundation, bored piles, micro piling Dubai"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="py-12 bg-gray-200 dark:bg-gray-800 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          {t('gallery.title')}
        </h1>
      </section>

      {/* Masonry Gallery Section */}
      <section className="py-12 bg-white dark:bg-gray-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {imageSources.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full rounded-lg shadow-md break-inside-avoid hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
