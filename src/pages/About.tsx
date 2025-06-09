
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, TrendingUp, Linkedin, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  // Get advantages with fallback to empty array
  const advantages = Array.isArray(t('about.whyChoose.advantages')) ? t('about.whyChoose.advantages') : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                {t('about.hero.title')}
              </h1>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('about.hero.subtitle1')} <span className="text-yellow-300">No-Cost</span> Financial
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('about.hero.subtitle2')} <span className="text-yellow-300">Resolve Debt/Rebuild Credit</span>,
                </h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  {t('about.hero.subtitle3')}
                </h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  {t('about.hero.subtitle4')}
                </h2>
              </div>
              <p className="text-xl text-orange-100 mt-8 leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>
            <div className="lg:flex lg:justify-end">
              <img alt="Debt Counselling Session" className="w-full max-w-lg rounded-2xl shadow-2xl" src="/lovable-uploads/ab1e075d-5cb7-4bb7-8eb3-58065d670483.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {t('about.leadership.title')}
            </h2>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              {t('about.leadership.description1')}
            </p>
            <p className="text-lg text-orange-600 font-semibold mt-6">
              {t('about.leadership.description2')}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              {t('about.leadership.description3')}
            </p>
            <p className="text-lg text-gray-700">
              {t('about.leadership.description4')}
            </p>
          </div>

          {/* Our Process Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img alt="Credit Counselling Session" className="w-full max-w-lg rounded-2xl shadow-xl" src="/lovable-uploads/9dd940b1-1ee3-42df-afda-f23fd6651851.png" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('about.process.title')}
                </h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>{t('about.process.step1')}</p>
                  <p>{t('about.process.step2')}</p>
                  <p>{t('about.process.step3')}</p>
                  <p>{t('about.process.step4')}</p>
                  <p className="text-blue-600 font-semibold">{t('about.process.step5')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* Why Choose Samatva Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              {t('about.whyChoose.title')} 
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              {t('about.whyChoose.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage: any, index: number) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300">
                <div className="mb-6">
                  {index === 0 && (
                    <div className="w-16 h-16 mx-auto bg-green-500 rounded-lg flex items-center justify-center">
                      <Check className="text-white" size={32} />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg flex items-center justify-center">
                      <Shield className="text-white" size={32} />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-16 h-16 mx-auto bg-purple-500 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={32} />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-16 h-16 mx-auto bg-orange-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-white" size={32} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              {t('about.management.title')}
            </h2>
            <p className="text-2xl text-gray-600">{t('about.management.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Thallam Sreekumar Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">{t('about.management.thallam.name')}</h3>
                      <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{t('about.management.thallam.position')}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.management.thallam.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venkatramanan TM Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">{t('about.management.venkat.name')}</h3>
                      <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{t('about.management.venkat.position')}</p>
                    <p className="text-gray-600 leading-relaxed">
                      {t('about.management.venkat.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-orange-500 mb-6">{t('about.contact.title')}</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-lg font-semibold">+91 9606914500 / 9789511937</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-lg">support@samatvaawareness.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>CIN: U70200TN2024PTC167249</span>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    {t('about.contact.address')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
