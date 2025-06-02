
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle, BarChart3, CreditCard, Shield, AlertCircle } from 'lucide-react';

const Impact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 tracking-tight">
            Credit Worthiness
            <span className="block font-medium text-orange-500">Indicator</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Understanding your credit score and why it's important to have a good credit score
          </p>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-slate-900 mb-8 text-center">
              What Is Credit Score?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-16">
              Credit Score is your creditworthiness, which is basically how well you have managed your loans, 
              credit cards, buy now pay later facilities, overdraft or other credit lines
            </p>
          </div>

          {/* Credit Score Gauge */}
          <div className="flex justify-center mb-20">
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Gauge Background */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Poor - Red */}
                  <path
                    d="M 30 170 A 85 85 0 0 1 85 15"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="20"
                    className="opacity-80"
                  />
                  {/* Average - Orange */}
                  <path
                    d="M 85 15 A 85 85 0 0 1 140 30"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="20"
                    className="opacity-80"
                  />
                  {/* Good - Yellow Green */}
                  <path
                    d="M 140 30 A 85 85 0 0 1 170 85"
                    fill="none"
                    stroke="#84cc16"
                    strokeWidth="20"
                    className="opacity-80"
                  />
                  {/* Very Good - Green */}
                  <path
                    d="M 170 85 A 85 85 0 0 1 170 115"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="20"
                    className="opacity-80"
                  />
                  {/* Excellent - Dark Green */}
                  <path
                    d="M 170 115 A 85 85 0 0 1 140 170"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="20"
                    className="opacity-80"
                  />
                  
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="40"
                    stroke="#1f2937"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />
                  <circle cx="100" cy="100" r="8" fill="#1f2937" />
                </svg>
                
                {/* Score Labels */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900 mb-2">680-730</div>
                    <div className="text-lg text-slate-600">GOOD</div>
                  </div>
                </div>
              </div>
              
              {/* Gauge Labels */}
              <div className="absolute top-8 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                POOR <br />350
              </div>
              <div className="absolute top-4 left-20 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                AVERAGE <br />630-680
              </div>
              <div className="absolute top-8 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                EXCELLENT <br />730+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIBIL Ratings Table */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-orange-500 text-white p-6">
              <h3 className="text-2xl font-semibold">Credit Score Impact on Loan Approval</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-orange-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">CIBIL Ratings</th>
                    <th className="px-6 py-4 text-left font-semibold">Credit Score</th>
                    <th className="px-6 py-4 text-left font-semibold">Chances of being approved for a Personal Loan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 font-medium">Poor</td>
                    <td className="px-6 py-4 text-slate-600">Less than 630</td>
                    <td className="px-6 py-4 text-slate-600">You will not qualify for a personal loan</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 font-medium">Average</td>
                    <td className="px-6 py-4 text-slate-600">630 - 680</td>
                    <td className="px-6 py-4 text-slate-600">Loan may be approved, but at a higher interest rate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 font-medium">Good</td>
                    <td className="px-6 py-4 text-slate-600">680 - 730</td>
                    <td className="px-6 py-4 text-slate-600">Loan is likely to be approved with a high interest rate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 font-medium">Very Good</td>
                    <td className="px-6 py-4 text-slate-600">730 - 780</td>
                    <td className="px-6 py-4 text-slate-600">Loan with a moderate interest rate, larger loan amount</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-slate-900 font-medium">Excellent</td>
                    <td className="px-6 py-4 text-slate-600">780 Above</td>
                    <td className="px-6 py-4 text-slate-600">Loan with a very low interest rate, faster approval, larger loan amount</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lender Assessment */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900 mb-6">How Lenders Use Your Credit Score</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Lenders seek your credit score to assess the risk factor in lending to you, which is basically as follows:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Loan Eligibility</h4>
              <p className="text-slate-600">Whether they should lend to you or not</p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">Loan Terms</h4>
              <p className="text-slate-600">If they want to lend, at what interest rates and loan terms should they lend to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Calculation */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-light text-slate-900 mb-8 text-center">How is my CIBIL score calculated?</h3>
          <p className="text-lg text-slate-600 mb-12 text-center leading-relaxed">
            As mentioned earlier, the credit bureaus use data from your credit history to calculate and arrive at your credit score.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h4 className="text-xl font-semibold text-slate-900 mb-6">Factors that affect your credit score:</h4>
            <div className="space-y-4">
              {[
                'Multiple Loan Enquiry/Applications',
                'Having Multiple Credit Cards and Multiple Loans',
                'High Usage of Available Credit card limit',
                'Delayed Payments (Paid within the Same Month)',
                'Missed Payments (Skipped by not paying within the same month)',
                'Settled Accounts',
                'Written-off Accounts'
              ].map((factor, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-slate-700">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintaining Good Credit */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light text-slate-900 mb-6">
              How Can I maintain 750+ Credit Score?
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Maintaining a good credit score can be done easily by doing the following:
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  1. Pay Your Bills on Time
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Timely payments have the biggest impact on your credit score. Set reminders or enable auto-debit to ensure 
                  your credit card and loan EMIs are paid without delay.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  2. Keep Credit Utilization Low
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Aim to use no more than 30% of your total credit limit. Using too much credit or maxing out your cards can hurt your credit score.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-sm text-slate-600">
                    <strong>Example:</strong> If you have 2 credit cards with Rs.50,000 and Rs.40,000 limits (total Rs.90,000), 
                    keep usage below Rs.27,000 (30%).
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  3. Limit New Credit Applications
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Restrict new credit applications within a short span. Multiple inquiries can negatively impact your score 
                  and signal credit dependency to lenders.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  4. Avoid Multiple Loans/Credit Cards
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Having several loans or credit cards increases your repayment burden and risk of missed payments. 
                  Lenders may see it as credit dependency.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-3">
                  5. Monitor Your Credit Report Regularly
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  Check your credit report regularly to ensure banks/NBFC have updated your repayment history correctly. 
                  Dispute any errors promptly.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-orange-500">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="text-orange-500" size={24} />
                  <h4 className="text-xl font-semibold text-slate-900">
                    Samatva Can Help
                  </h4>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Our free credit counseling service can guide you through each of these steps, helping you maintain 
                  and improve your credit score effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-6">Timeline for Improvement</h2>
          </div>
          
          <div className="bg-slate-800 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                <Clock className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-light mb-2">6 to 12 Months</h3>
                <p className="text-slate-300 text-lg">Duration to improve your credit score</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-semibold mb-3">Method</h4>
                <p className="text-slate-300 leading-relaxed">
                  Based on the timely repayment of the new loan that you avail
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-semibold mb-3">Strategy</h4>
                <p className="text-slate-300 leading-relaxed">
                  Getting a loan with a poor credit score is difficult, so it's always a good idea to improve your credit score before applying
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

export default Impact;
