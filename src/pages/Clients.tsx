import React from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/slick-custom.css';

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

  const settings = {
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
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Clients | Soiltec Piling and Foundation Dubai</title>
        <meta
          name="description"
          content="Explore our core services and geotechnical activities at Soiltec Dubai."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <div className="bg-gray-200 dark:bg-gray-800 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            {t('clients.title')}
          </h1>
        </div>
      </div>

      {/* Logo Slider Section */}
      <section className="py-10 bg-white dark:bg-gray-900 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {logos.map((src, index) => (
              <div key={index} className="px-2 sm:px-3 flex items-center justify-center">
                <img
                  src={src}
                  alt={`Logo ${index + 1}`}
                  className="max-h-16 sm:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
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
