import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 font-raleway">
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }

        @media (max-width: 1920px) {
          h1 { font-size: 56px; }
          h2 { font-size: 48px; }
          h3 { font-size: 36px; }
          h4 { font-size: 28px; }
          h5 { font-size: 24px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 44px; }
          [lang]:not([lang="en"]) h2 { font-size: 36px; }
          [lang]:not([lang="en"]) h3 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h5 { font-size: 22px; }
          [lang]:not([lang="en"]) p { font-size: 18px; }
        }

        @media (max-width: 1440px) {
          h1 { font-size: 48px; line-height: 1em; }
          h2 { font-size: 40px; }
          h3 { font-size: 32px; }
          h4 { font-size: 24px; }
          h5 { font-size: 20px; }
          p { font-size: 18px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 28px; }
          [lang]:not([lang="en"]) h3 { font-size: 24px; }
          [lang]:not([lang="en"]) h4 { font-size: 22px; }
          [lang]:not([lang="en"]) h5 { font-size: 20px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 780px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 28px; }
          h5 { font-size: 18px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 24px; }
          [lang]:not([lang="en"]) h3 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 16px; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px; }
          h2 { font-size: 28px; }
          h3 { font-size: 24px; }
          h4 { font-size: 20px; }
          h5 { font-size: 20px; }
          p { font-size: 16px; }
          [lang]:not([lang="en"]) h1 { font-size: 36px; }
          [lang]:not([lang="en"]) h2 { font-size: 20px; }
          [lang]:not([lang="en"]) h3 { font-size: 18px; }
          [lang]:not([lang="en"]) h4 { font-size: 20px; }
          [lang]:not([lang="en"]) h5 { font-size: 16px; }
          [lang]:not([lang="en"]) p { font-size: 14px; }
        }
      `}</style>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-800 to-blue-500 text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-blue-100">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h3 className=" font-bold text-gray-900 mb-8">{t('contact.contactInfo')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-gray-900">{t('contact.email')}</h4>
                    <p className="text-gray-600">support@samatvaawareness.in</p>
                    <p className=" text-gray-500">{t('contact.emailDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-gray-900">{t('contact.call')}</h4>
                    <p className="text-gray-600">+91 63820 97967</p>
                    <p className=" text-gray-500">{t('contact.callDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className=" font-semibold text-gray-900">{t('contact.hours')}</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="font-bold text-gray-900 mb-6">{t('contact.serviceAreas')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Credit Score Improvement</h5>
                  </div>
                  <div className="bg-green-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Debt Settlement Support</h5>
                  </div>
                  <div className="bg-purple-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Financial Counseling</h5>
                  </div>
                  <div className="bg-orange-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900">Loan Application Guidance</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h3 className=" font-bold text-gray-900 mb-8">{t('contact.nextSteps')}</h3>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "Free Consultation", description: "Schedule your no-cost credit counseling session", color: "bg-blue-600" },
                  { step: 2, title: "Assessment", description: "We'll evaluate your current financial situation", color: "bg-green-600" },
                  { step: 3, title: "Custom Plan", description: "Receive a personalized improvement strategy", color: "bg-purple-600" },
                  { step: 4, title: "Implementation", description: "Begin your 6-12 month improvement journey", color: "bg-orange-600" },
                  { step: 5, title: "Ongoing Support", description: "Continuous guidance until you achieve your goals", color: "bg-red-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${item.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {["RBI-Registered Institution Partners", "Completely Free Service", "6-12 Month Proven Results", "Professional Credit Counselors"].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold mb-4">
            {t('contact.takeFirstStep')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your journey to better financial health starts with a simple conversation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@samatvaawareness.in" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold  transition-colors transform hover:scale-105">
              {t('contact.startConsultation')}
            </a>
            <a href="tel:+919606914500" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold  transition-colors">
              {t('contact.callNow')}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
