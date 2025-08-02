// src/pages/About.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectNames = Array.from({ length: 36 }, (_, i) => t(`projects.name${i + 1}`));

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 font-raleway">
      <Helmet>
        <title>Projects | Soiltec Piling and Foundation Dubai</title>
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

      <section className="py-12 bg-gray-200 dark:bg-gray-800 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* Text Content */}
    <div className="text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {t('projects.title')}
      </h2>
      <ul className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed list-disc list-inside space-y-1">
        {projectNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>

    {/* Embedded YouTube Video */}
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-lg shadow-xl"
        src="https://www.youtube.com/embed/qy5dPhtatws"
        title="Soiltec Project Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Projects;
