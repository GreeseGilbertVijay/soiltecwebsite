
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { HeartHandshake, Users, CheckCircle, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Credit Counseling Services
          </h1>
          <p className="text-xl text-blue-100">
            Professional, free, and personalized financial solutions
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Free Consultation */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Free Consultation</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
                    <p className="text-gray-600 text-sm">Unlike other counselling companies, we provide completely free credit counseling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Guidance</h4>
                    <p className="text-gray-600 text-sm">Expert advice on improving your financial situation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Plans</h4>
                    <p className="text-gray-600 text-sm">Customized strategies based on your specific needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Settlement Account Support */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Settlement Account Support</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Eligibility</h4>
                    <p className="text-gray-600 text-sm">Available for customers with no more than two settled accounts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Funding Assistance</h4>
                    <p className="text-gray-600 text-sm">Help securing funding from RBI-registered financial institutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Profile Improvement</h4>
                    <p className="text-gray-600 text-sm">Clear overdue amounts on settled accounts to improve credit profile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <UserCheck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Target Audience</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Employment Requirement</h4>
                    <p className="text-gray-600 text-sm">Services for salaried customers who are currently employed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Active Income</h4>
                    <p className="text-gray-600 text-sm">Must have current employment status</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-purple-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Commitment to Improvement</h4>
                    <p className="text-gray-600 text-sm">Willingness to follow structured improvement plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our 5-Step Process
            </h2>
            <p className="text-lg text-gray-600">
              A structured approach to improving your financial health
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { step: 1, title: "Free Consultation", description: "Schedule your no-cost credit counseling session" },
              { step: 2, title: "Assessment", description: "We'll evaluate your current financial situation" },
              { step: 3, title: "Custom Plan", description: "Receive a personalized improvement strategy" },
              { step: 4, title: "Implementation", description: "Begin your 6-12 month improvement journey" },
              { step: 5, title: "Ongoing Support", description: "Continuous guidance until you achieve your goals" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step towards better financial health today
          </p>
          <Link 
            to="/contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105 inline-block"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
