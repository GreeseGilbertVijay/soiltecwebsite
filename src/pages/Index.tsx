
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Users, Shield, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Samatva Awareness Solution Foundation
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Credit Counseling and Financial Solutions
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
              We would like to help you succeed financially and are here for you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Start Your Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Samatva?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer unique advantages that set us apart from other credit counseling companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-green-100">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Free Credit Counseling</h3>
              <p className="text-gray-600">
                Samatva does not charge any fees from customers for its credit counselling service, unlike other counselling companies
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">RBI-Registered Partners</h3>
              <p className="text-gray-600">
                Samatva assists customers in securing funding from an RBI-registered financial institution
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Specialized Support</h3>
              <p className="text-gray-600">
                Services designed for salaried customers who are currently employed
              </p>
            </div>

            <div className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Settlement Account Support</h3>
              <p className="text-gray-600">
                Yes, Samatva will help, provided you have no more than two settled accounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results You Can Trust
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">6-12</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Months</div>
              <p className="text-gray-600">Average time to improve your credit score</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Free Service</div>
              <p className="text-gray-600">No hidden fees or charges</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">RBI</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Registered</div>
              <p className="text-gray-600">All our financial institution partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your journey to better credit health today with our free consultation
          </p>
          <Link 
            to="/contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105 inline-block"
          >
            Get Professional Help Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
