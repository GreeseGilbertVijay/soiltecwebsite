
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, ArrowRight } from 'lucide-react';

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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

      {/* Core Value Propositions */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-orange-500">Samatva?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We offer unique advantages that set us apart from other credit counseling companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all group hover:scale-105 border border-slate-600">
              <div className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Free Credit Counseling</h3>
              <p className="text-slate-300 leading-relaxed">
                Samatva does not charge any fees from customers for its credit counselling service
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all group hover:scale-105 border border-slate-600">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">RBI-Registered Partners</h3>
              <p className="text-slate-300 leading-relaxed">
                Samatva assists customers in securing funding from RBI-registered institutions
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all group hover:scale-105 border border-slate-600">
              <div className="bg-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Specialized Support</h3>
              <p className="text-slate-300 leading-relaxed">
                Services designed for salaried customers who are currently employed
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all group hover:scale-105 border border-slate-600">
              <div className="bg-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Settlement Account Support</h3>
              <p className="text-slate-300 leading-relaxed">
                Samatva will help, provided you have no more than two settled accounts
              </p>
            </div>
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
    </div>;
};
export default Index;
