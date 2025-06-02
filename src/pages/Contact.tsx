import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, CheckCircle } from 'lucide-react';
const Contact = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started Today
          </h1>
          <p className="text-xl text-blue-100">
            Ready to transform your financial future? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">support@samatvaawareness.in</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 9606914500 / 9789511937</p>
                    <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Credit Score Improvement</h4>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Debt Settlement Support</h4>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Financial Counseling</h4>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Loan Application Guidance</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Steps</h2>
              
              <div className="space-y-6">
                {[{
                step: 1,
                title: "Free Consultation",
                description: "Schedule your no-cost credit counseling session",
                color: "bg-blue-600"
              }, {
                step: 2,
                title: "Assessment",
                description: "We'll evaluate your current financial situation",
                color: "bg-green-600"
              }, {
                step: 3,
                title: "Custom Plan",
                description: "Receive a personalized improvement strategy",
                color: "bg-purple-600"
              }, {
                step: 4,
                title: "Implementation",
                description: "Begin your 6-12 month improvement journey",
                color: "bg-orange-600"
              }, {
                step: 5,
                title: "Ongoing Support",
                description: "Continuous guidance until you achieve your goals",
                color: "bg-red-600"
              }].map((item, index) => <div key={index} className="flex items-start space-x-4">
                    <div className={`${item.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>)}
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {["RBI-Registered Institution Partners", "Completely Free Service", "6-12 Month Proven Results", "Professional Credit Counselors"].map((item, index) => <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-600" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take the First Step Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your journey to better financial health starts with a simple conversation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@samatva.org" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors transform hover:scale-105">
              Start Your Free Consultation
            </a>
            <a href="tel:+91-XXXX-XXXXXX" className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;