
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Samatva
          </h1>
          <p className="text-xl text-blue-100">
            Dedicated to your financial success, every step of the way
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-lg text-white">
              <p className="text-xl md:text-2xl font-medium">
                We would like to help you succeed financially and are here for you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Expertise</h3>
              <p className="text-gray-600">
                Experienced credit counselors and financial advisors
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ethical Practices</h3>
              <p className="text-gray-600">
                Transparent, fee-free counseling services
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Legitimate Partnerships</h3>
              <p className="text-gray-600">
                Work only with RBI-registered financial institutions
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                6-12 month structured improvement programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Step-by-step Support</h3>
              <p className="text-gray-700">
                Guidance throughout your entire financial journey, ensuring you never feel alone in the process.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">No Hidden Costs</h3>
              <p className="text-gray-700">
                Completely transparent, fee-free service model that puts your interests first.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-700">
                All partnerships with RBI-registered institutions, ensuring legitimacy and security.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Standards</h3>
              <p className="text-gray-700">
                Unlike other counselling companies, we maintain the highest ethical standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Choose Samatva?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>100% free credit counseling services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Partnerships only with RBI-registered institutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Specialized support for employed professionals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>Proven 6-12 month improvement programs</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Promise</h3>
                <p className="text-gray-700 mb-4">
                  We understand that financial challenges can be overwhelming. That's why we're committed to providing clear, honest guidance without any hidden agendas or fees.
                </p>
                <p className="text-gray-700">
                  Our team of experienced professionals will work with you to create a realistic plan that fits your specific situation and goals.
                </p>
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
