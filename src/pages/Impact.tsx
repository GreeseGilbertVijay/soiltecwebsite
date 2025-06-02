
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Understanding Credit Score Impact
          </h1>
          <p className="text-xl text-blue-100">
            To understand the impact of your Good or Bad Credit Score
          </p>
        </div>
      </section>

      {/* Good News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Good News About Credit Scores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Not Permanent</h3>
              <p className="text-gray-600">
                The good news is that a poor credit score is not permanent
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Always Improvable</h3>
              <p className="text-gray-600">
                You can always improve it by taking appropriate steps
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Worth the Investment</h3>
              <p className="text-gray-600">
                Although it may take some time, it is worth improving your score before applying for a new loan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Timeline for Improvement
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">6 to 12 Months</h3>
                <p className="text-gray-600">Duration to improve your credit score</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Method</h4>
                <p className="text-gray-600">
                  Based on the timely repayment of the new loan that you avail
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h4>
                <p className="text-gray-600">
                  Getting a loan with a poor credit score is difficult, so it's always a good idea to improve your credit score before applying
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact Areas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Loan Applications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Poor credit scores make getting loans difficult</li>
                <li>• Better to improve before applying for new loans or credit cards</li>
                <li>• Timely repayment of new loans helps build positive credit history</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Financial Opportunities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Good credit scores open more financial doors</li>
                <li>• Better interest rates and loan terms</li>
                <li>• Increased approval chances for credit applications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Long-term Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved creditworthiness over time</li>
                <li>• Better financial stability and options</li>
                <li>• Enhanced ability to secure future funding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
