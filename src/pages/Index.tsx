import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageSlider from '../components/ImageSlider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-raleway" lang={currentLanguage}>
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
      <section className="relative h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url('/assets/hero-foundation.jpg')` }}>
        <div className="bg-black bg-opacity-70 p-6 md:p-10 rounded-2xl text-center max-w-3xl w-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Soiltec Piling and Foundation
          </h1>
          <p className="text-md md:text-xl text-gray-200 mb-6">
            Geotechnical and Foundation Engineering Experts in Dubai
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 md:px-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Soiltec is a trusted name in geotechnical engineering, offering specialized solutions in piling, shoring, soil investigation, and deep foundations. Based in Dubai, we serve clients across the UAE with excellence, safety, and reliability.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                icon: '/assets/icon-piling.svg',
                title: 'Piling Services',
                desc: 'End-bearing and friction piles for all soil conditions using modern equipment.',
              },
              {
                icon: '/assets/icon-foundation.svg',
                title: 'Foundation Design',
                desc: 'Tailored foundation solutions to ensure structural integrity and long-term stability.',
              },
              {
                icon: '/assets/icon-shoring.svg',
                title: 'Shoring & Retaining',
                desc: 'Safe excavation support and retaining systems for deep foundation works.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
                <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16 object-contain" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-20 bg-yellow-500 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your next project?</h2>
          <p className="text-base md:text-lg mb-6">
            Contact Soiltec today for expert advice and a competitive quote.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-yellow-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
