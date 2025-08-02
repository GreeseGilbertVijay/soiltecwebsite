import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Contact | Soiltec Piling and Foundation Dubai</title>
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

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">{t('contact.title')}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dubai Office */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors">
              <h2 className="text-2xl font-semibold mb-4">{t('contact.box1title')}</h2>
              <div className="space-y-1">
                <p className="flex gap-2 items-start text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  Hor Alanz East, P.O. Box: 92776
                </p>
                <p className="text-gray-600 dark:text-gray-300">Dubai - U.A.E.</p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Phone className="w-5 h-5 text-green-600" /> +971 4 2696440
                </p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Phone className="w-5 h-5 text-green-600" /> +971 4 2696442
                </p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:soiltec@eim.ae" className="hover:underline text-blue-700 dark:text-blue-400">
                    soiltec@eim.ae
                  </a>
                </p>
              </div>
            </div>

            {/* Abu Dhabi Office */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors">
              <h2 className="text-2xl font-semibold mb-4">{t('contact.box2title')}</h2>
              <div className="space-y-1">
                <p className="flex gap-2 items-start text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  Zaied City, P.O. Box: 114691
                </p>
                <p className="text-gray-600 dark:text-gray-300">Abu Dhabi - U.A.E.</p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Phone className="w-5 h-5 text-green-600" /> +971 2 8827121
                </p>
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                  <Phone className="w-5 h-5 text-green-600" /> +971 2 8827131
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="my-12 rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="Soiltec Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.403491330679!2d55.28693417526568!3d25.24119567765894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c3ae2a166e9%3A0x8363b44a875083fc!2sSoiltec%20Piling%20and%20Foundation%20LLC!5e0!3m2!1sen!2sae!4v1694443002526!5m2!1sen!2sae"
              width="100%"
              height="400"
              loading="lazy"
              className="w-full h-[400px] border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Key Contacts */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transition-colors">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.box3title')}</h2>
            <ul className="space-y-2 list-disc list-inside pl-2 text-gray-700 dark:text-gray-200">
              <li>
                <strong>{t('contact.box3director1')}</strong> – {t('contact.box3role1')}
              </li>
              <li>
                <strong>{t('contact.box3director2')}</strong> – {t('contact.box3role2')}
              </li>
              <li>
                <strong>{t('contact.box3director3')}</strong> – {t('contact.box3role3')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
