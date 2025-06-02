
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TrendingUp, Clock, Target, CheckCircle, Home, Car, CreditCard, Calculator } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Impact = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [activeLoanType, setActiveLoanType] = useState('home');

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    const totalMonths = tenure * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    return Math.round(emi);
  };

  const loanData = {
    low: { rate: 16, eligible: 'Housing Finance Companies (HFC)' },
    moderate: { rate: 14, eligible: 'Small Private / Finance Banks' },
    high: { rate: 9, eligible: 'Top Private Sector Banks' }
  };

  const lowEMI = calculateEMI(loanAmount, loanData.low.rate, loanTenure);
  const moderateEMI = calculateEMI(loanAmount, loanData.moderate.rate, loanTenure);
  const highEMI = calculateEMI(loanAmount, loanData.high.rate, loanTenure);

  const lowTotal = lowEMI * loanTenure * 12;
  const moderateTotal = moderateEMI * loanTenure * 12;
  const highTotal = highEMI * loanTenure * 12;

  const lowInterest = lowTotal - loanAmount;
  const moderateInterest = moderateTotal - loanAmount;
  const highInterest = highTotal - loanAmount;

  const moderateSavings = lowInterest - moderateInterest;
  const highSavings = lowInterest - highInterest;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Interactive Loan Comparison
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Compare loan options across different credit scores and see potential savings in real-time. 
            Adjust loan amount and tenure to visualize the impact on EMIs and total repayment.
          </p>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Loan Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare loan options across different credit scores and see potential savings in real-time
            </p>
          </div>

          {/* Loan Type Tabs */}
          <div className="mb-12">
            <Tabs value={activeLoanType} onValueChange={setActiveLoanType} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 h-14 bg-white border-2 border-blue-100">
                <TabsTrigger value="home" className="flex items-center gap-2 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Home size={20} />
                  Home Loan
                </TabsTrigger>
                <TabsTrigger value="auto" className="flex items-center gap-2 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <Car size={20} />
                  Auto Loan
                </TabsTrigger>
                <TabsTrigger value="personal" className="flex items-center gap-2 text-lg font-semibold data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  <CreditCard size={20} />
                  Personal Loan
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Calculator Card */}
          <Card className="mb-12 shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calculator size={28} />
                Interactive {activeLoanType.charAt(0).toUpperCase() + activeLoanType.slice(1)} Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <Label htmlFor="loanAmount" className="text-lg font-semibold text-gray-700">
                    Loan Amount (in ₹)
                  </Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="text-xl h-14 border-2 border-blue-200 focus:border-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Min: ₹1L</span>
                    <span>Max: ₹5Cr</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="loanTenure" className="text-lg font-semibold text-gray-700">
                    Loan Tenure (Years)
                  </Label>
                  <Input
                    id="loanTenure"
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="text-xl h-14 border-2 border-blue-200 focus:border-blue-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Min: 1 yr</span>
                    <span>Max: 30 yrs</span>
                  </div>
                </div>
              </div>
              <Button className="w-full h-14 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Visual Comparison */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Visual Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-red-600 mb-2">{loanData.low.rate}%</div>
                  <div className="text-gray-600 font-medium">Interest Rate</div>
                  <div className="mt-4 text-lg font-semibold text-gray-800">Low Credit Score</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{loanData.moderate.rate}%</div>
                  <div className="text-gray-600 font-medium">Interest Rate</div>
                  <div className="mt-4 text-lg font-semibold text-gray-800">Moderate Credit Score</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">{loanData.high.rate}%</div>
                  <div className="text-gray-600 font-medium">Interest Rate</div>
                  <div className="mt-4 text-lg font-semibold text-gray-800">High Credit Score</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* EMI Comparison */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Monthly EMI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(lowEMI)}</div>
                  <div className="text-red-100 mb-4">Low Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(moderateEMI)}</div>
                  <div className="text-orange-100 mb-4">Moderate Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(highEMI)}</div>
                  <div className="text-green-100 mb-4">High Credit</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Total Repayment */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Total Repayment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(lowTotal)}</div>
                  <div className="text-sm text-red-100">Principal: {formatCurrency(loanAmount)}</div>
                  <div className="text-red-100 font-medium mt-2">Low Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(moderateTotal)}</div>
                  <div className="text-sm text-orange-100">Principal: {formatCurrency(loanAmount)}</div>
                  <div className="text-orange-100 font-medium mt-2">Moderate Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(highTotal)}</div>
                  <div className="text-sm text-green-100">Principal: {formatCurrency(loanAmount)}</div>
                  <div className="text-green-100 font-medium mt-2">High Credit</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Total Interest Paid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Total Interest Paid</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(lowInterest)}</div>
                  <div className="text-red-100 font-medium">Low Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(moderateInterest)}</div>
                  <div className="text-orange-100 font-medium">Moderate Credit</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">{formatCurrency(highInterest)}</div>
                  <div className="text-green-100 font-medium">High Credit</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Potential Savings */}
          <Card className="mb-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center">💰 Potential Savings</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white bg-opacity-20 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4">Moderate vs Low Credit</h4>
                  <div className="text-4xl font-bold text-orange-200 mb-2">{formatCurrency(moderateSavings)}</div>
                  <p className="text-blue-100">You can save this much by improving from low to moderate credit score</p>
                </div>
                <div className="text-center p-6 bg-white bg-opacity-20 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4">High vs Low Credit</h4>
                  <div className="text-4xl font-bold text-green-200 mb-2">{formatCurrency(highSavings)}</div>
                  <p className="text-blue-100">You can save this much by improving from low to high credit score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Home Loan Comparison Table */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Home className="text-blue-600" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Home Loan Comparison
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare home loan options for different credit score ranges
            </p>
          </div>

          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="p-6 text-left text-lg font-semibold">Criteria</th>
                    <th className="p-6 text-center text-lg font-semibold bg-red-500 bg-opacity-20">Low CIBIL Score (&lt;700)</th>
                    <th className="p-6 text-center text-lg font-semibold bg-orange-500 bg-opacity-20">Moderate CIBIL Score</th>
                    <th className="p-6 text-center text-lg font-semibold bg-green-500 bg-opacity-20">High CIBIL Score (&gt;700)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-semibold text-gray-900">Eligible Lender</td>
                    <td className="p-6 text-center text-gray-700">{loanData.low.eligible}</td>
                    <td className="p-6 text-center text-gray-700">{loanData.moderate.eligible}</td>
                    <td className="p-6 text-center text-gray-700">{loanData.high.eligible}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-900">Interest Rate</td>
                    <td className="p-6 text-center text-red-600 font-bold text-xl">{loanData.low.rate}%</td>
                    <td className="p-6 text-center text-orange-600 font-bold text-xl">13.5%</td>
                    <td className="p-6 text-center text-green-600 font-bold text-xl">{loanData.high.rate}%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-semibold text-gray-900">EMI (for 20 years)</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(lowEMI)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(moderateEMI)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(highEMI)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-900">Total Repayment</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(lowTotal)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(moderateTotal)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(highTotal)}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-semibold text-gray-900">Total Interest Paid</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(lowInterest)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(moderateInterest)}</td>
                    <td className="p-6 text-center text-gray-700 font-semibold">{formatCurrency(highInterest)}</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-900">Potential Savings vs HFC</td>
                    <td className="p-6 text-center text-gray-500">—</td>
                    <td className="p-6 text-center text-orange-600 font-bold">{formatCurrency(moderateSavings)}</td>
                    <td className="p-6 text-center text-green-600 font-bold">{formatCurrency(highSavings)}</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Key Insight</td>
                    <td className="p-6 text-center text-red-600 font-medium">Limited options due to low score</td>
                    <td className="p-6 text-center text-orange-600 font-medium">Moderate option with better rate</td>
                    <td className="p-6 text-center text-green-600 font-medium">Best option with strong credit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Disclaimer */}
          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Disclaimer</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The above comparison is for illustrative purposes only. Actual loan eligibility, interest rates, EMIs, and terms are determined by individual lenders based on the applicant's credit profile, income, employer category, and other underwriting criteria. All loan disbursals are subject to the lender's policies and applicable regulations as prescribed by the Reserve Bank of India (RBI).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Good News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Good News About Credit Scores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your credit journey is full of opportunities for improvement and financial growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Not Permanent</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                The good news is that a poor credit score is not permanent. With the right strategies and consistent effort, you can transform your financial profile.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Always Improvable</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                You can always improve your credit score by taking appropriate steps. Every positive financial decision moves you closer to better opportunities.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Worth the Investment</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Although it may take some time, improving your score before applying for a new loan can save you lakhs of rupees in interest payments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Timeline for Improvement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the journey to better credit scores and financial opportunities
            </p>
          </div>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-12">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-lg">
                  <Clock className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">6 to 12 Months</h3>
                  <p className="text-xl text-gray-600">Duration to improve your credit score significantly</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <Card className="border-l-4 border-l-blue-600 bg-gradient-to-r from-blue-50 to-transparent p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Method</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Based on the timely repayment of new loans that you avail. Consistent payment history is the most important factor in credit score improvement.
                  </p>
                </Card>
                
                <Card className="border-l-4 border-l-green-600 bg-gradient-to-r from-green-50 to-transparent p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Strategy</h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Getting a loan with a poor credit score is difficult, so it's always a good idea to improve your credit score before applying. This strategic approach can save you significant money in the long run.
                  </p>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
