
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "AUDIO_RECORDER_CLICKED") {
        console.log("🔹 Adjusting iframe height:", event.data.data);
        const iframe = document.getElementById("chatbotIframe") as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.data}`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen relative">
      <style>{`
        #chatbotIframe {
          width: 100%;
          border: none;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }

        @media (max-width: 768px) {
          #chatbotIframe {
            height: 250px;
          }
        }
      `}</style>
      
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="text-white block mb-4 animate-slide-in-right">Rebuild Credit,</span>
                <span className="text-orange-500 block mb-4 animate-slide-in-right" style={{animationDelay: '0.2s'}}>Regain Your Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-xl leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
                {t('home.hero.subtitle')}
              </p>
            </div>

            {/* Right Content - Impact Card */}
            <div className="flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.8s'}}>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-500 rounded-3xl p-10 max-w-md cursor-pointer transform hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-orange-500/25">
                <Link to="/impact" className="block">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-2xl animate-pulse-glow">
                      <TrendingUp className="text-white" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{t('home.hero.impact.title')}</h3>
                  </div>
                  <p className="text-white/95 text-xl leading-relaxed">
                    {t('home.hero.impact.description')}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section with Enhanced Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Enhanced animated background for this section */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 animate-gradient"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-32 w-80 h-80 rounded-full border border-white/20 animate-float-medium"></div>
          <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full border border-orange-500/30 animate-float-slow"></div>
          
          {/* Additional floating elements */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500/20 rounded-full animate-float-particle-0"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-white block mb-4">{t('home.concept.title1')}</span>
              <span className="text-orange-500 block mb-8">{t('home.concept.title2')}</span>
            </h2>
            <p className="text-2xl md:text-3xl text-orange-400 font-medium mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              {t('home.concept.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 text-lg px-8 py-4 min-w-[280px]">
              {t('home.hero.cta')}
              <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center text-lg px-8 py-4 min-w-[280px]">
              {t('home.hero.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Builders with subtle animations */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full animate-float-particle-1"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              {t('home.trustBuilders.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-1">
              <div className="text-6xl font-bold text-orange-500 mb-4">{t('home.trustBuilders.timeline').split(' ')[0]}</div>
              <div className="text-2xl font-bold text-white mb-4">{t('home.trustBuilders.timeline').split(' ')[1]}</div>
              <p className="text-slate-300 text-lg">{t('home.trustBuilders.timelineDesc')}</p>
            </div>
            
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-2">
              <div className="text-6xl font-bold text-green-500 mb-4">{t('home.trustBuilders.freeService').split(' ')[0]}</div>
              <div className="text-2xl font-bold text-white mb-4">{t('home.trustBuilders.freeService').split(' ').slice(1).join(' ')}</div>
              <p className="text-slate-300 text-lg">{t('home.trustBuilders.freeServiceDesc')}</p>
            </div>
            
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500 animate-scale-in stagger-3">
              <div className="text-6xl font-bold text-orange-500 mb-4">{t('home.trustBuilders.rbiRegistered')}</div>
              <div className="text-2xl font-bold text-white mb-4">{t('home.trustBuilders.rbiRegistered')}</div>
              <p className="text-slate-300 text-lg">{t('home.trustBuilders.rbiRegisteredDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 animate-fade-in">
            {t('home.videoSection.title')}
          </h2>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black animate-scale-in">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/T3alOcIJ5eg"
              title="Samatva Credit Solutions"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[300px] md:h-[400px] lg:h-[600px]"
            />
          </div>
        </div>
      </section>

      <section className="pt-2 pb-2 3 pt-lg-5">
        <iframe 
          id="chatbotIframe"
          src="https://shabd.tech/widget/chatpage?name=samatva&authKey=afd9a6b4-03fd-11f0-aabd-047c1692d8ad"
          allow="microphone"
          sandbox="allow-scripts allow-same-origin allow-modals allow-forms allow-popups allow-presentation allow-downloads allow-pointer-lock allow-top-navigation allow-top-navigation-by-user-activation"
          style={{width: '100%', border: 'none', overflow: 'hidden', transition: 'height 0.3s ease-in-out'}}
        />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-10 text-orange-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('home.cta.subtitle')}
          </p>
          <Link to="/contact" className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl animate-scale-in" style={{animationDelay: '0.4s'}}>
            {t('home.cta.button')}
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
