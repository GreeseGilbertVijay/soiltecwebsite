
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, ArrowRight } from 'lucide-react';

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-white/20"></div>
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full border border-white/20"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full border border-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="text-white block mb-4">Rebuild Credit,</span>
                <span className="text-orange-500 block mb-4">Regain Your</span>
                <span className="text-orange-500 block">Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-xl leading-relaxed">
                We would like to help you succeed financially and are here for you every step of the way.
              </p>
              
            </div>

            {/* Right Content - Impact Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all rounded-3xl p-10 max-w-md cursor-pointer transform hover:scale-105 shadow-2xl">
                <Link to="/impact" className="block">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <TrendingUp className="text-white" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Impact</h3>
                  </div>
                  <p className="text-white/95 text-xl leading-relaxed">
                    To understand the impact of your Good or Bad Credit Score
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-32 w-80 h-80 rounded-full border border-white/20"></div>
          <div className="absolute bottom-32 left-32 w-96 h-96 rounded-full border border-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white block mb-4">Resolve DEBT</span>
              <span className="text-orange-500 block mb-8">Rebuild CREDIT</span>
            </h2>
            <p className="text-2xl md:text-3xl text-orange-400 font-medium mb-12">
              Concept Incubated by IITM Research Park
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg px-8 py-4 min-w-[280px]">
              Start Your Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-semibold transition-all flex items-center justify-center text-lg px-8 py-4 min-w-[280px]">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results You Can <span className="text-orange-500">Trust</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500">
              <div className="text-6xl font-bold text-orange-500 mb-4">6-12</div>
              <div className="text-2xl font-bold text-white mb-4">Months</div>
              <p className="text-slate-300 text-lg">Average time to improve your credit score</p>
            </div>
            
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500">
              <div className="text-6xl font-bold text-green-500 mb-4">100%</div>
              <div className="text-2xl font-bold text-white mb-4">Free Service</div>
              <p className="text-slate-300 text-lg">No hidden fees or charges</p>
            </div>
            
            <div className="text-center p-10 bg-gradient-to-br from-slate-700 to-slate-600 rounded-3xl hover:from-slate-600 hover:to-slate-500 transition-all hover:scale-105 border border-slate-500">
              <div className="text-6xl font-bold text-orange-500 mb-4">RBI</div>
              <div className="text-2xl font-bold text-white mb-4">Registered</div>
              <p className="text-slate-300 text-lg">All our financial institution partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video & SABD */}
      <section className="pt-3 pb-3 text-center">
        <div className="container pt-0 pb-0 pt-lg-5 pb-lg-5 video-wrapper" style={{position: 'relative'}}>
          <video id="myVideo" className="conactContent" width="100%" height="600px" poster="img/video-poster2.png">
            <source src="https://www.youtube.com/shorts/T3alOcIJ5eg" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button id="playBtn" aria-label="Play Video">
            <img src="img/play-icon.png" alt="Play" />
          </button>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl mb-10 text-orange-100 max-w-3xl mx-auto">
            Start your journey to better credit health today with our free consultation
          </p>
          <Link to="/contact" className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl">
            Get Professional Help Now
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
