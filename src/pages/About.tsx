import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, TrendingUp, Linkedin, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
        <div className="w-[95%] mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="w-[95%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.whyChoose.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.whyChoose.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage: any, index: number) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      {index === 0 && <Target className="w-6 h-6 text-orange-500" />}
                      {index === 1 && <Users className="w-6 h-6 text-orange-500" />}
                      {index === 2 && <Shield className="w-6 h-6 text-orange-500" />}
                      {index === 3 && <TrendingUp className="w-6 h-6 text-orange-500" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[95%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.team.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(t('about.team.members')) && t('about.team.members').map((member: any, index: number) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <div className="flex gap-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="w-[95%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.missionDesc')}
              </p>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl animate-scale-in">
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
