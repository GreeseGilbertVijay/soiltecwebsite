import React from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Clients: React.FC = () => {
  const { t } = useLanguage();

  const logos = [
    '/logos/1.png',
    '/logos/2.png',
    '/logos/3.png',
    '/logos/4.png',
    '/logos/5.png',
    '/logos/6.png',
    '/logos/7.png',
  ];

  const sliderSettings = {
    dots: false,
    arrows: false, // ✅ Hide left and right arrows
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 360, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 font-raleway">
      <Helmet>
        <title>Clients | Soiltec Piling and Foundation Dubai</title>
        <meta
          name="description"
          content="Explore our prestigious clients at Soiltec Piling and Foundation, a leading geotechnical engineering firm in Dubai."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      {/* Page Header */}
      <div className="bg-gray-200 dark:bg-gray-800 px-4 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            {t('clients.title')}
          </h1>
        </div>
      </div>

      {/* Logo Carousel Section */}
      <section className="py-12 bg-white dark:bg-gray-900 px-6">
        <div className="max-w-7xl mx-auto">
          <Slider {...sliderSettings}>
            {logos.map((src, index) => (
              <div key={index} className="px-3 flex items-center justify-center">
                <img
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  className="w-full h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
