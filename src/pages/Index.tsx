
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Shield, TrendingUp, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-white/20"></div>
          <div className="absolute top-40 right-20 w-64 h-64 rounded-full border border-white/20"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full border border-white/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">Rebuild Credit,</span>
                <br />
                <span className="text-orange-500">Regain Your</span>
                <br />
                <span className="text-orange-500">Future</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-slate-200 max-w-xl">
                Credit Counseling and Financial Solutions
              </p>
              <p className="text-lg mb-8 text-slate-300 max-w-xl">
                We would like to help you succeed financially and are here for you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Your Free Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
                >
                  Learn More About Our Services
                </Link>
              </div>
            </div>

            {/* Right Content - Impact Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-orange-500 hover:bg-orange-600 transition-all rounded-3xl p-8 max-w-md cursor-pointer transform hover:scale-105">
                <Link to="/impact" className="block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <TrendingUp className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Impact</h3>
                  </div>
                  <p className="text-white/90 text-lg">
                    To understand the impact of your Good or Bad Credit Score
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Choose <span className="text-orange-500">Samatva?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer unique advantages that set us apart from other credit counseling companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-green-50 to-green-100 group hover:scale-105">
              <div className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-700 transition-colors">
                <CheckCircle className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Free Credit Counseling</h3>
              <p className="text-slate-600 leading-relaxed">
                Samatva does not charge any fees from customers for its credit counselling service, unlike other counselling companies
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-blue-50 to-blue-100 group hover:scale-105">
              <div className="bg-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-colors">
                <Shield className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">RBI-Registered Partners</h3>
              <p className="text-slate-600 leading-relaxed">
                Samatva assists customers in securing funding from an RBI-registered financial institution
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-purple-50 to-purple-100 group hover:scale-105">
              <div className="bg-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-700 transition-colors">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Specialized Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Services designed for salaried customers who are currently employed
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br from-orange-50 to-orange-100 group hover:scale-105">
              <div className="bg-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-700 transition-colors">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Settlement Account Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, Samatva will help, provided you have no more than two settled accounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proven Results You Can <span className="text-orange-500">Trust</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl font-bold text-blue-600 mb-4">6-12</div>
              <div className="text-2xl font-bold text-slate-900 mb-4">Months</div>
              <p className="text-slate-600 text-lg">Average time to improve your credit score</p>
            </div>
            
            <div className="text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl font-bold text-green-600 mb-4">100%</div>
              <div className="text-2xl font-bold text-slate-900 mb-4">Free Service</div>
              <p className="text-slate-600 text-lg">No hidden fees or charges</p>
            </div>
            
            <div className="text-center p-10 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="text-6xl font-bold text-orange-600 mb-4">RBI</div>
              <div className="text-2xl font-bold text-slate-900 mb-4">Registered</div>
              <p className="text-slate-600 text-lg">All our financial institution partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-orange-500">Financial Future?</span>
          </h2>
          <p className="text-xl mb-10 text-slate-200 max-w-3xl mx-auto">
            Start your journey to better credit health today with our free consultation
          </p>
          <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center gap-3"
          >
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
