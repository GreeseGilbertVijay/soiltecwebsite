import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Samatva Awareness Solution Foundation
            </h3>
            <p className="text-gray-300 mb-4">Our mission is to empower individuals with expert financial guidance and essential resources to build, strengthen, and sustain a resilient credit profile—laying the foundation for lasting financial well-being and opportunity.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-500" />
                <span className="text-sm text-gray-300">support@samatvaawareness.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-500" />
                <span className="text-sm text-gray-300">+91 9606914500 / 9789511937</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/credit-health" className="text-gray-300 hover:text-orange-500 transition-colors">Credit Health</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-orange-500 transition-colors">Impact</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
            </li>
              <li>
            </li>
              <li>+91 9606914500 
+91 9789511937 
CIN: U70200TN2024PTC167249 No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017</li>
              <li>
            </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Samatva Awareness Solution Foundation. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <span className="text-xs text-gray-400">
                RBI-Registered Financial Institution Partners | Completely Free Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;