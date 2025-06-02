import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Users, Shield, TrendingUp, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
const About = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                ABOUT US
              </h1>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Providing trusted, <span className="text-yellow-300">No-Cost</span> Financial
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Counselling to <span className="text-yellow-300">Resolve Debt/Rebuild Credit</span>,
                </h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  & enhance Financial Awareness within
                </h2>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                  Regulatory Compliance.
                </h2>
              </div>
              <p className="text-xl text-orange-100 mt-8 leading-relaxed">
                Our counsellors are professionally trained and certified by the Indian Institute of Banking and Finance (IIBF)
              </p>
            </div>
            <div className="lg:flex lg:justify-end">
              <img alt="Debt Counselling Session" className="w-full max-w-lg rounded-2xl shadow-2xl" src="/lovable-uploads/ab1e075d-5cb7-4bb7-8eb3-58065d670483.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              At <span className="text-orange-500">Samatva Awareness Solutions</span>,
            </h2>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              We, former bank senior executives—Thallam Sreekumar (Former Head of Business at ICICI Bank) and T.M. Venkatramanan (Former Head of Credit at South Indian Bank)—have launched a new program aimed at helping individuals maintain a healthy credit score, thereby unlocking financial opportunities and addressing unprecedented financial challenges.
            </p>
            <p className="text-lg text-orange-600 font-semibold mt-6">
              This concept has been incubated by IIT Madras Research Park.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 mb-6">
                Our advisory board includes three retired senior bankers, as well as one of the <span className="font-semibold text-gray-900">original co-founders of this concept in the USA</span>.
              </p>
              <p className="text-lg text-gray-700">
                We are also privileged to have a retired senior employee who served with the regulator for <span className="font-semibold text-gray-900">25+years</span>, on our advisory board.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img alt="Professional Consultation" className="w-full max-w-md rounded-xl shadow-lg" src="/lovable-uploads/d83dfa36-277f-402f-b45e-8e6b171122ea.png" />
            </div>
          </div>

          {/* Life Challenges Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  <span className="text-orange-500">Life</span> can get tough, and sometimes,
                </h3>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  paying back loans on time can be <span className="text-orange-500">hard</span>.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  People sometimes lose their jobs or have some personal emergencies and unable to pay the loan EMI's on time. This will impact the credit score. A lower credit score makes it difficult to take a loan again in the future.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm">
                  <div className="text-center">
                    <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="text-orange-600" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">DEBT</h4>
                    <h4 className="text-2xl font-bold text-gray-900">COUNSELLING</h4>
                    <div className="mt-4 text-orange-500">
                      <TrendingUp size={32} className="mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Management</span>
            </h2>
            <p className="text-2xl text-gray-600">The Pillars Of Our Foundational Strength</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Thallam Sreekumar Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">Thallam Sreekumar</h3>
                      <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">Managing Director</p>
                    <p className="text-gray-600 leading-relaxed">
                      With over 25 years of experience in financial services, Mr. Thallam Sreekumar has held senior leadership roles, including National Head of Personal Loans and Business Head of Premium Credit Cards at ICICI. His expertise spans across personal loans, credit cards, and retail assets, making him adept at leading large profit centers with ease.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Venkatramanan TM Card */}
            <Card className="bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-orange-500">Venkatramanan TM</h3>
                      <Linkedin className="text-blue-600 cursor-pointer hover:text-blue-800" size={24} />
                    </div>
                    <p className="text-lg font-semibold text-gray-700 mb-4">Executive Director</p>
                    <p className="text-gray-600 leading-relaxed">
                      Mr. Venkatramanan is a seasoned financial expert with 25 years of experience. He has served in key roles such as Regional and Zonal Credit Manager at ICICI Bank and National Credit Head at DBS. His expertise lies in credit/financial evaluation, credit policy development, and credit scoring models across major banking institutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-orange-500">Approach</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Professional Expertise</h3>
              <p className="text-gray-600">
                Experienced credit counselors and financial advisors
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ethical Practices</h3>
              <p className="text-gray-600">
                Transparent, fee-free counseling services
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Legitimate Partnerships</h3>
              <p className="text-gray-600">
                Work only with RBI-registered financial institutions
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                6-12 month structured improvement programs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl font-bold text-orange-500">SA</div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500">SAMATVA</h3>
                    <h3 className="text-2xl font-bold text-orange-500">AWARENESS</h3>
                    <p className="text-sm text-orange-300">REBUILD CREDIT, REGAIN YOUR FUTURE</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is to empower individuals with expert financial guidance and essential resources to build, strengthen, and sustain a resilient credit profile—laying the foundation for lasting financial well-being and opportunity.
              </p>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-orange-500 mb-6">CONTACT US</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-lg font-semibold">+91 9606914500 / 9789511937</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-lg">support@samatvaawareness.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>CIN: U70200TN2024PTC167249</span>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm leading-relaxed">
                    No.25, Shanthi Apartments, Flat No 3, 1st Floor, Vyasar Street, T.Nagar, Chennai - 600017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;