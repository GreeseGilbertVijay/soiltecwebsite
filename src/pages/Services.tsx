
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calculator, Home, Car, User, TrendingDown, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenure, setLoanTenure] = useState(20);

  // Calculate EMI based on interest rates for different credit scores
  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    const numberOfPayments = tenure * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(emi);
  };

  const creditScoreData = {
    low: {
      rate: 16,
      emi: calculateEMI(loanAmount, 16, loanTenure),
      totalRepayment: calculateEMI(loanAmount, 16, loanTenure) * loanTenure * 12,
      totalInterest: (calculateEMI(loanAmount, 16, loanTenure) * loanTenure * 12) - loanAmount,
      lender: 'Housing Finance Companies (HFC)',
      insight: 'Limited options due to low score'
    },
    moderate: {
      rate: 14,
      emi: calculateEMI(loanAmount, 14, loanTenure),
      totalRepayment: calculateEMI(loanAmount, 14, loanTenure) * loanTenure * 12,
      totalInterest: (calculateEMI(loanAmount, 14, loanTenure) * loanTenure * 12) - loanAmount,
      lender: 'Small Private / Finance Banks',
      insight: 'Moderate option with better rate'
    },
    high: {
      rate: 9,
      emi: calculateEMI(loanAmount, 9, loanTenure),
      totalRepayment: calculateEMI(loanAmount, 9, loanTenure) * loanTenure * 12,
      totalInterest: (calculateEMI(loanAmount, 9, loanTenure) * loanTenure * 12) - loanAmount,
      lender: 'Top Private Sector Banks',
      insight: 'Best option with strong credit'
    }
  };

  const moderateVsLowSavings = creditScoreData.low.totalInterest - creditScoreData.moderate.totalInterest;
  const highVsLowSavings = creditScoreData.low.totalInterest - creditScoreData.high.totalInterest;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-8 tracking-tight">
            Interactive Loan
            <span className="block font-medium text-orange-500">Comparison</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Compare loan options across different credit scores and see potential savings in real-time. 
            Adjust loan amount and tenure to visualize the impact on EMIs and total repayment.
          </p>
        </div>
      </section>

      {/* Loan Type Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-2xl p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'home' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Home size={20} />
                <span>Home Loan</span>
              </button>
              <button
                onClick={() => setActiveTab('auto')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'auto' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Car size={20} />
                <span>Auto Loan</span>
              </button>
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === 'personal' 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User size={20} />
                <span>Personal Loan</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="flex items-center space-x-3 text-2xl font-light">
                <Calculator className="text-blue-500" size={28} />
                <span>Interactive {activeTab === 'home' ? 'Home' : activeTab === 'auto' ? 'Auto' : 'Personal'} Loan Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Loan Amount (in ₹)</label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    min="100000"
                    max="50000000"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>Min: ₹1L</span>
                    <span>Max: ₹5Cr</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-700 font-medium mb-3">Loan Tenure (Years)</label>
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    min="1"
                    max="30"
                  />
                  <div className="flex justify-between text-sm text-slate-500 mt-2">
                    <span>Min: 1 yr</span>
                    <span>Max: 30 yrs</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-lg rounded-xl"
                onClick={() => {/* Calculate functionality already handled by state */}}
              >
                Calculate
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-slate-900 mb-12 text-center">Visual Comparison</h2>
          
          {/* Interest Rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-medium text-slate-700 mb-4">Low Credit Score</h3>
              <div className="text-4xl font-bold text-red-500 mb-2">{creditScoreData.low.rate}%</div>
              <p className="text-slate-600">Interest Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-slate-700 mb-4">Moderate Credit Score</h3>
              <div className="text-4xl font-bold text-orange-500 mb-2">{creditScoreData.moderate.rate}%</div>
              <p className="text-slate-600">Interest Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-slate-700 mb-4">High Credit Score</h3>
              <div className="text-4xl font-bold text-green-500 mb-2">{creditScoreData.high.rate}%</div>
              <p className="text-slate-600">Interest Rate</p>
            </div>
          </div>

          {/* Monthly EMI */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Monthly EMI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-500 text-white p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold mb-2">₹{creditScoreData.low.emi.toLocaleString()}</div>
                <div className="text-red-100">Low Credit</div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold mb-2">₹{creditScoreData.moderate.emi.toLocaleString()}</div>
                <div className="text-orange-100">Moderate Credit</div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-2xl text-center">
                <div className="text-2xl font-bold mb-2">₹{creditScoreData.high.emi.toLocaleString()}</div>
                <div className="text-green-100">High Credit</div>
              </div>
            </div>
          </div>

          {/* Total Repayment */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Total Repayment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-500 text-white p-6 rounded-2xl">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.low.totalRepayment / 10000000).toFixed(2)} Cr</div>
                <div className="text-sm text-red-100 mb-3">Principal: ₹{(loanAmount / 10000000).toFixed(2)} Cr</div>
                <div className="text-red-100">Low Credit</div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-2xl">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.moderate.totalRepayment / 10000000).toFixed(2)} Cr</div>
                <div className="text-sm text-orange-100 mb-3">Principal: ₹{(loanAmount / 10000000).toFixed(2)} Cr</div>
                <div className="text-orange-100">Moderate Credit</div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-2xl">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.high.totalRepayment / 10000000).toFixed(2)} Cr</div>
                <div className="text-sm text-green-100 mb-3">Principal: ₹{(loanAmount / 10000000).toFixed(2)} Cr</div>
                <div className="text-green-100">High Credit</div>
              </div>
            </div>
          </div>

          {/* Total Interest Paid */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-slate-900 mb-6">Total Interest Paid</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-500 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.low.totalInterest / 10000000).toFixed(2)} Cr</div>
                <div className="text-red-100">Low Credit</div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.moderate.totalInterest / 100000).toFixed(2)} L</div>
                <div className="text-orange-100">Moderate Credit</div>
              </div>
              <div className="bg-green-500 text-white p-6 rounded-2xl text-center">
                <div className="text-xl font-bold mb-2">₹{(creditScoreData.high.totalInterest / 100000).toFixed(2)} L</div>
                <div className="text-green-100">High Credit</div>
              </div>
            </div>
          </div>

          {/* Potential Savings */}
          <div className="bg-blue-50 rounded-3xl p-8">
            <h3 className="text-2xl font-light text-blue-900 mb-8 flex items-center">
              <TrendingUp className="mr-3" />
              Potential Savings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-blue-100">
                <h4 className="text-lg font-medium text-slate-700 mb-3">Moderate vs Low Credit</h4>
                <div className="text-3xl font-bold text-orange-500 mb-2">₹{(moderateVsLowSavings / 100000).toFixed(2)} L</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-blue-100">
                <h4 className="text-lg font-medium text-slate-700 mb-3">High vs Low Credit</h4>
                <div className="text-3xl font-bold text-green-500 mb-2">₹{(highVsLowSavings / 100000).toFixed(2)} L</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-xl border-0">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="flex items-center space-x-3 text-2xl font-light">
                <Home className="text-blue-500" />
                <span>{activeTab === 'home' ? 'Home' : activeTab === 'auto' ? 'Auto' : 'Personal'} Loan Comparison</span>
              </CardTitle>
              <p className="text-slate-600 mt-2">Compare {activeTab} loan options for different credit score ranges</p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-slate-700">Criteria</th>
                      <th className="px-6 py-4 text-left font-medium text-slate-700">Low CIBIL Score (&lt;700)</th>
                      <th className="px-6 py-4 text-left font-medium text-slate-700">Moderate CIBIL Score</th>
                      <th className="px-6 py-4 text-left font-medium text-slate-700">High CIBIL Score (&gt;700)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Eligible Lender</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.low.lender}</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.moderate.lender}</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.high.lender}</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Interest Rate</td>
                      <td className="px-6 py-4 text-red-500 font-semibold">{creditScoreData.low.rate}%</td>
                      <td className="px-6 py-4 text-orange-500 font-semibold">{creditScoreData.moderate.rate}%</td>
                      <td className="px-6 py-4 text-green-500 font-semibold">{creditScoreData.high.rate}%</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">EMI (for {loanTenure} years)</td>
                      <td className="px-6 py-4 text-slate-600">₹{creditScoreData.low.emi.toLocaleString()}</td>
                      <td className="px-6 py-4 text-slate-600">₹{creditScoreData.moderate.emi.toLocaleString()}</td>
                      <td className="px-6 py-4 text-slate-600">₹{creditScoreData.high.emi.toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Total Repayment</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.low.totalRepayment / 10000000).toFixed(2)} Cr</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.moderate.totalRepayment / 10000000).toFixed(2)} Cr</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.high.totalRepayment / 10000000).toFixed(2)} Cr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Total Interest Paid</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.low.totalInterest / 10000000).toFixed(2)} Cr</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.moderate.totalInterest / 100000).toFixed(2)} L</td>
                      <td className="px-6 py-4 text-slate-600">₹{(creditScoreData.high.totalInterest / 100000).toFixed(2)} L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Potential Savings vs HFC</td>
                      <td className="px-6 py-4 text-slate-400">—</td>
                      <td className="px-6 py-4 text-orange-500 font-semibold">₹{(moderateVsLowSavings / 100000).toFixed(2)} L</td>
                      <td className="px-6 py-4 text-green-500 font-semibold">₹{(highVsLowSavings / 100000).toFixed(2)} L</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">Key Insight</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.low.insight}</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.moderate.insight}</td>
                      <td className="px-6 py-4 text-slate-600">{creditScoreData.high.insight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-900 mb-3">Disclaimer</h3>
                <p className="text-slate-600 leading-relaxed">
                  The above comparison is for illustrative purposes only. Actual loan eligibility, interest rates, EMIs, 
                  and terms are determined by individual lenders based on the applicant's credit profile, income, 
                  employer category, and other underwriting criteria. All loan disbursals are subject to the lender's 
                  policies and applicable regulations as prescribed by the Reserve Bank of India (RBI).
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

export default Services;
